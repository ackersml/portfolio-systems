// Vercel Serverless Function for Stripe Payment Intent
// This file should be in the /api directory for Vercel to recognize it
// Install Stripe: npm install stripe

import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: { message: 'Method not allowed' } });
  }

  try {
    const { amount, currency, email, description } = req.body;

    // Validate required fields
    if (!amount || !email) {
      return res.status(400).json({ 
        error: { message: 'Amount and email are required' } 
      });
    }

    // Get affiliate code from request body or cookies
    const affiliateCode = req.body.affiliate_code || 
                         (req.headers.cookie?.match(/affiliate_ref=([^;]+)/)?.[1]);
    
    // If affiliate code exists, verify it's valid and approved
    if (affiliateCode) {
      // Note: You'll need to import Supabase client if you want to verify here
      // For now, we'll just include it in metadata and verify in webhook
      console.log('Affiliate code detected:', affiliateCode);
    }
    
    // Create Payment Intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount, // Amount in cents (50000 = $500.00)
      currency: currency || 'usd',
      description: description || 'Project Discovery Deposit - Michelle Ackers',
      metadata: {
        email: email,
        type: 'discovery_deposit',
        service_type: 'service_website', // Default for discovery deposits
        timestamp: new Date().toISOString(),
        ...(affiliateCode && { affiliate_code: affiliateCode }),
      },
      // Optional: Set up automatic refunds after 7 days if not confirmed
      // automatic_payment_methods: {
      //   enabled: true,
      // },
    });

    // Return client secret for frontend
    res.status(200).json({ 
      clientSecret: paymentIntent.client_secret 
    });

  } catch (error) {
    console.error('Stripe error:', error);
    res.status(500).json({ 
      error: { message: error.message || 'An error occurred processing your payment' } 
    });
  }
}


