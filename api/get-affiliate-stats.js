// Vercel Serverless Function to Get Affiliate Statistics
// Returns affiliate dashboard data (views, conversions, earnings)

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const supabase = createClient(supabaseUrl, supabaseServiceKey);

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { affiliate_code } = req.query;

    if (!affiliate_code) {
      return res.status(400).json({ error: 'Affiliate code is required' });
    }

    // Get affiliate info
    const { data: affiliate, error: affiliateError } = await supabase
      .from('affiliates')
      .select('*')
      .eq('affiliate_code', affiliate_code)
      .single();

    if (affiliateError || !affiliate) {
      return res.status(404).json({ error: 'Affiliate not found' });
    }

    // Get view count
    const { count: viewCount } = await supabase
      .from('affiliate_views')
      .select('*', { count: 'exact', head: true })
      .eq('affiliate_code', affiliate_code);

    // Get conversions
    const { data: conversions, error: conversionsError } = await supabase
      .from('affiliate_conversions')
      .select('*')
      .eq('affiliate_code', affiliate_code)
      .order('created_at', { ascending: false });

    if (conversionsError) {
      console.error('Error fetching conversions:', conversionsError);
    }

    // Get commission payments
    const { data: payments, error: paymentsError } = await supabase
      .from('commission_payments')
      .select('*')
      .eq('affiliate_code', affiliate_code)
      .order('created_at', { ascending: false });

    if (paymentsError) {
      console.error('Error fetching payments:', paymentsError);
    }

    // Calculate stats
    const stats = {
      affiliate: {
        name: affiliate.name,
        instagram_handle: affiliate.instagram_handle,
        email: affiliate.email,
        status: affiliate.status,
        affiliate_code: affiliate.affiliate_code,
        created_at: affiliate.created_at
      },
      views: viewCount || 0,
      conversions: {
        total: conversions?.length || 0,
        pending: conversions?.filter(c => c.status === 'pending').length || 0,
        paid: conversions?.filter(c => c.status === 'paid').length || 0,
        cancelled: conversions?.filter(c => c.status === 'cancelled').length || 0
      },
      earnings: {
        total: parseFloat(affiliate.total_earnings || 0),
        pending: parseFloat(affiliate.pending_earnings || 0),
        paid: parseFloat(affiliate.total_paid || 0)
      },
      conversions_list: conversions || [],
      payments_list: payments || []
    };

    res.status(200).json(stats);

  } catch (error) {
    console.error('Error fetching affiliate stats:', error);
    res.status(500).json({ 
      error: { message: error.message || 'An error occurred fetching stats' } 
    });
  }
}





