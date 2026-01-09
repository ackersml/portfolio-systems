# Stripe Integration Setup Guide

## Overview
The discovery page requires a backend API endpoint to create Stripe Payment Intents securely. This guide explains what needs to be set up.

## Required Setup

### 1. Stripe Account Setup
1. Create a Stripe account at https://stripe.com
2. Get your API keys from the Stripe Dashboard:
   - Publishable Key (starts with `pk_`)
   - Secret Key (starts with `sk_`)

### 2. Update Discovery Page
In `discovery.html`, replace this line:
```javascript
const stripe = Stripe('pk_test_YOUR_PUBLISHABLE_KEY_HERE');
```
With your actual Stripe publishable key:
```javascript
const stripe = Stripe('pk_live_YOUR_ACTUAL_KEY'); // For production
// OR
const stripe = Stripe('pk_test_YOUR_ACTUAL_KEY'); // For testing
```

### 3. Create Backend API Endpoint

You need to create a serverless function or API endpoint at `/api/create-payment-intent` that:

**Request:**
```json
{
  "amount": 50000,
  "currency": "usd",
  "email": "user@example.com",
  "description": "Project Discovery Deposit - Michelle Ackers"
}
```

**Response:**
```json
{
  "clientSecret": "pi_xxx_secret_xxx"
}
```

**Example Implementation (Vercel Serverless Function):**

Create `api/create-payment-intent.js`:

```javascript
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { amount, currency, email, description } = req.body;

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount, // 50000 = $500.00
      currency: currency || 'usd',
      description: description,
      metadata: {
        email: email,
        type: 'discovery_deposit',
        timestamp: new Date().toISOString(),
      },
    });

    res.status(200).json({ 
      clientSecret: paymentIntent.client_secret 
    });
  } catch (error) {
    res.status(500).json({ 
      error: { message: error.message } 
    });
  }
}
```

### 4. Environment Variables

Add to your Vercel project settings or `.env.local`:
```
STRIPE_SECRET_KEY=sk_live_YOUR_SECRET_KEY
STRIPE_PUBLISHABLE_KEY=pk_live_YOUR_PUBLISHABLE_KEY
```

**NEVER commit secret keys to git!**

### 5. Webhook Setup (Optional but Recommended)

Create a webhook endpoint to handle payment events:

**Create `api/webhook.js`:**

```javascript
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  const sig = req.headers['stripe-signature'];
  let event;

  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle the event
  switch (event.type) {
    case 'payment_intent.succeeded':
      const paymentIntent = event.data.object;
      // Send booking link email
      // Log to database/Airtable
      // Send questionnaire
      break;
    case 'payment_intent.payment_failed':
      // Handle failed payment
      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  res.json({ received: true });
}
```

### 6. Email Automation

After successful payment, automatically send:
1. **Booking Link Email** - Calendly or similar booking link
2. **Questionnaire Email** - Project questionnaire form

You can use:
- SendGrid
- Resend
- Mailgun
- Or integrate with your email service

### 7. Testing

1. Use Stripe test mode keys (`pk_test_` and `sk_test_`)
2. Use test card numbers:
   - Success: `4242 4242 4242 4242`
   - Decline: `4000 0000 0000 0002`
3. Test the full flow before going live

### 8. Go Live

1. Switch to live mode keys
2. Update webhook endpoint in Stripe Dashboard
3. Test with a small real payment first
4. Monitor the first few deposits

## Important Notes

- **Security**: Never expose secret keys in client-side code
- **Refunds**: Create an admin interface or script to process refunds when needed
- **Compliance**: Ensure PCI compliance by using Stripe Elements (already implemented)
- **Testing**: Always test in test mode before going live

## Support

For Stripe integration help, refer to:
- Stripe Documentation: https://stripe.com/docs
- Stripe Payment Intents: https://stripe.com/docs/payments/payment-intents
- Stripe Webhooks: https://stripe.com/docs/webhooks






