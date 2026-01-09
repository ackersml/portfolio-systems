// Vercel Serverless Function for Stripe Checkout Session
// This creates a Stripe Checkout session for AI consultation bookings
// Install Stripe: npm install stripe

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
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
            unit_amount: price, // Price in cents (25000 = $250.00)
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${req.headers.origin || 'https://michelleackers.com'}/ai-consultation-thank-you.html?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin || 'https://michelleackers.com'}/ai-consultation.html`,
      metadata: {
        type: 'ai_consultation',
        hours: hours.toString(),
        timestamp: new Date().toISOString(),
      },
      customer_email: undefined, // Will be collected in checkout
    });

    res.status(200).json({ id: session.id });

  } catch (error) {
    console.error('Stripe error:', error);
    res.status(500).json({ 
      error: { message: error.message || 'An error occurred processing your payment' } 
    });
  }
}






