// Vercel Serverless Function for Stripe Checkout Session
// This creates a Stripe Checkout session for AI consultation bookings

const stripe = require('stripe')((process.env.STRIPE_SECRET_KEY || '').trim());

module.exports = async (req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { hours, price } = req.body;

    // Validate required fields
    if (!hours || !price) {
      return res.status(400).json({ 
        error: { message: 'Hours and price are required' } 
      });
    }

    // Get origin from headers or use default
    const origin = req.headers.origin || req.headers.referer?.split('/').slice(0, 3).join('/') || 'https://michelleackers.com';

    // Create Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: `AI Integration Consultation - ${hours} Hour${hours > 1 ? 's' : ''}`,
              description: `${hours}-hour focused session to identify AI automation opportunities and create an actionable implementation roadmap`,
            },
            unit_amount: price, // Price in cents (12500 = $125.00)
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}&type=consultation`,
      cancel_url: `${origin}/ai-consultation`,
      metadata: {
        type: 'ai_consultation',
        hours: hours.toString(),
        timestamp: new Date().toISOString(),
      },
      customer_email: undefined, // Will be collected in checkout
    });

    res.status(200).json({ 
      id: session.id,
      url: session.url 
    });

  } catch (error) {
    console.error('Stripe error:', error);
    res.status(500).json({ 
      error: { message: error.message || 'An error occurred processing your payment' } 
    });
  }
};








