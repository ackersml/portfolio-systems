// Vercel Serverless Function for Stripe Webhooks
// This handles payment events from Stripe
// Install Stripe: npm install stripe

import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const sig = req.headers['stripe-signature'];
  let event;

  try {
    // Verify webhook signature
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle the event
  switch (event.type) {
    case 'payment_intent.succeeded':
      const paymentIntent = event.data.object;
      console.log('Payment succeeded:', paymentIntent.id);
      
      // Track affiliate conversion if affiliate code exists
      const affiliateCode = paymentIntent.metadata?.affiliate_code;
      if (affiliateCode) {
        // Determine service type from payment description or metadata
        const serviceType = paymentIntent.metadata?.service_type || 
                           (paymentIntent.description?.toLowerCase().includes('discovery') ? 'service_website' : 'custom');
        
        const amount = paymentIntent.amount / 100; // Convert cents to dollars
        
        // Call conversion tracking endpoint
        try {
          const conversionResponse = await fetch(`${process.env.SITE_URL || 'http://localhost:3000'}/api/track-conversion`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              affiliate_code: affiliateCode,
              conversion_type: 'payment',
              metadata: {
                payment_intent_id: paymentIntent.id,
                amount: paymentIntent.amount, // Keep in cents for consistency
                currency: paymentIntent.currency,
                service_type: serviceType,
                email: paymentIntent.metadata?.email || paymentIntent.receipt_email
              },
              timestamp: new Date().toISOString()
            })
          });
          
          if (!conversionResponse.ok) {
            console.error('Failed to track affiliate conversion:', await conversionResponse.text());
          }
        } catch (error) {
          console.error('Error tracking affiliate conversion:', error);
          // Don't fail the webhook, just log
        }
      }
      
      // TODO: Implement these actions:
      // 1. Send booking link email to paymentIntent.metadata.email
      // 2. Send project questionnaire email
      // 3. Log payment to database/Airtable
      // 4. Send confirmation to admin
      
      // Example email sending (you'll need to set up your email service):
      // await sendEmail({
      //   to: paymentIntent.metadata.email,
      //   subject: 'Discovery Deposit Received - Next Steps',
      //   template: 'discovery-booking-link',
      //   data: { paymentIntentId: paymentIntent.id }
      // });
      
      break;

    case 'payment_intent.payment_failed':
      const failedPayment = event.data.object;
      console.log('Payment failed:', failedPayment.id);
      // Handle failed payment notification
      break;

    case 'charge.refunded':
      const refund = event.data.object;
      console.log('Refund processed:', refund.id);
      // Update database/Airtable with refund status
      break;

    default:
      console.log(`Unhandled event type: ${event.type}`);
  }

  // Return a response to acknowledge receipt of the event
  res.json({ received: true });
}

// For Vercel, you need to configure the webhook endpoint in Stripe Dashboard
// and add STRIPE_WEBHOOK_SECRET to your environment variables


