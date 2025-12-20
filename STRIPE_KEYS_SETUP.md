# Stripe Keys Setup - COMPLETE ✅

## Keys Configured

### Publishable Key (Frontend)
✅ **Added to `discovery.html`**
```
pk_live_YOUR_PUBLISHABLE_KEY
```

### Secret Key (Backend)
⚠️ **Needs to be added to Vercel Environment Variables**
```
sk_live_YOUR_SECRET_KEY_HERE
```

## Next Steps

### 1. Add Secret Key to Vercel Environment Variables

Run these commands to add the secret key to Vercel:

```bash
# For production
echo "YOUR_STRIPE_SECRET_KEY" | npx vercel env add STRIPE_SECRET_KEY production

# For preview
echo "YOUR_STRIPE_SECRET_KEY" | npx vercel env add STRIPE_SECRET_KEY preview

# For development
echo "YOUR_STRIPE_SECRET_KEY" | npx vercel env add STRIPE_SECRET_KEY development
```

Or add manually via Vercel Dashboard:
1. Go to: https://vercel.com/michelle-ackers/michelle-ackers/settings/environment-variables
2. Add `STRIPE_SECRET_KEY` with your actual secret key value
3. Select all environments (Production, Preview, Development)

### 2. Install Stripe Package

The API functions need the Stripe package. Run:

```bash
npm install
```

This will install Stripe from `package.json`.

### 3. Test the Integration

1. Deploy to Vercel
2. Test the discovery page payment form
3. Use Stripe test mode first if needed (switch to test keys)

## Security Notes

- ✅ Publishable key is in frontend code (safe - this is public)
- ⚠️ Secret key must be in Vercel environment variables (never in code)
- ✅ Secret key is NOT committed to git (in `.gitignore`)
- ✅ Backend API uses `process.env.STRIPE_SECRET_KEY`

## Current Status

- ✅ Publishable key added to `discovery.html`
- ✅ `package.json` created with Stripe dependency
- ⚠️ Secret key needs to be added to Vercel environment variables
- ✅ API endpoints ready (`api/create-payment-intent.js`, `api/webhook.js`)

