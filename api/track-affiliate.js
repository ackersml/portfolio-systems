// Vercel Serverless Function for Affiliate Tracking
// Tracks when someone visits with an affiliate link

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const supabase = createClient(supabaseUrl, supabaseServiceKey);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { affiliate_code, page, timestamp, user_agent, referrer } = req.body;

    // Validate required fields
    if (!affiliate_code) {
      return res.status(400).json({ error: 'Affiliate code is required' });
    }

    // Verify affiliate code exists and is approved
    const { data: affiliate, error: affiliateError } = await supabase
      .from('affiliates')
      .select('affiliate_code, status')
      .eq('affiliate_code', affiliate_code)
      .single();

    if (affiliateError || !affiliate) {
      return res.status(400).json({ error: 'Invalid affiliate code' });
    }

    if (affiliate.status !== 'approved') {
      // Still track but don't error (for pending affiliates)
      console.log('View tracked for non-approved affiliate:', affiliate_code);
    }

    // Get IP address from request
    const ip_address = req.headers['x-forwarded-for'] || 
                      req.headers['x-real-ip'] || 
                      req.connection?.remoteAddress || 
                      'unknown';

    // Store affiliate view
    const { error: insertError } = await supabase
      .from('affiliate_views')
      .insert({
        affiliate_code,
        page_url: page,
        user_agent,
        referrer,
        ip_address
      });

    if (insertError) {
      console.error('Error inserting affiliate view:', insertError);
      // Don't fail the request, just log
    }

    res.status(200).json({ 
      success: true, 
      message: 'Affiliate view tracked' 
    });

  } catch (error) {
    console.error('Affiliate tracking error:', error);
    res.status(500).json({ 
      error: { message: error.message || 'An error occurred tracking affiliate view' } 
    });
  }
}

