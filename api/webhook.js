// Vercel Serverless Function for Stripe Webhooks
// This handles payment events from Stripe
// Install Stripe: npm install stripe

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

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

