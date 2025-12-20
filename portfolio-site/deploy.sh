#!/bin/bash

# Deploy to Vercel
# This script will deploy the portfolio site to Vercel

echo "🚀 Deploying portfolio site to Vercel..."

# Check if vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "📦 Installing Vercel CLI..."
    npm install -g vercel@latest
fi

# Navigate to project directory
cd "$(dirname "$0")"

# Deploy to Vercel
echo "🔨 Building and deploying..."
vercel --prod

echo "✅ Deployment complete!"
echo "🌐 Your site should be live shortly."
