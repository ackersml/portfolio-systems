// Vercel Serverless Function for Stripe Payment Intent
// This file should be in the /api directory for Vercel to recognize it
// Install Stripe: npm install stripe

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

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

    // Create Payment Intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount, // Amount in cents (50000 = $500.00)
      currency: currency || 'usd',
      description: description || 'Project Discovery Deposit - Michelle Ackers',
      metadata: {
        email: email,
        type: 'discovery_deposit',
        timestamp: new Date().toISOString(),
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

