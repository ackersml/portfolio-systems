// Vercel Serverless Function for Affiliate Conversion Tracking
// Tracks when someone books a discovery call or makes a payment via affiliate link

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const supabase = createClient(supabaseUrl, supabaseServiceKey);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { affiliate_code, conversion_type, metadata, timestamp } = req.body;

    // Validate required fields
    if (!affiliate_code || !conversion_type) {
      return res.status(400).json({ 
        error: 'Affiliate code and conversion type are required' 
      });
    }

    // Verify affiliate exists and is approved
    const { data: affiliate, error: affiliateError } = await supabase
      .from('affiliates')
      .select('affiliate_code, status')
      .eq('affiliate_code', affiliate_code)
      .single();

    if (affiliateError || !affiliate) {
      return res.status(400).json({ error: 'Invalid affiliate code' });
    }

    if (affiliate.status !== 'approved') {
      return res.status(400).json({ error: 'Affiliate not approved' });
    }

    // Extract amount and service type from metadata
    const amount = metadata?.amount ? metadata.amount / 100 : 0; // Convert cents to dollars
    const serviceType = metadata?.service_type || 'custom';
    const paymentIntentId = metadata?.payment_intent_id || null;
    const clientEmail = metadata?.email || null;

    // Calculate commission using database function
    const { data: commissionData, error: commissionError } = await supabase
      .rpc('calculate_commission', {
        service_type: serviceType,
        amount: amount
      });

    if (commissionError) {
      console.error('Error calculating commission:', commissionError);
      return res.status(500).json({ error: 'Failed to calculate commission' });
    }

    const commissionAmount = commissionData || 0;
    
    // Get commission rate (for display)
    const commissionRate = amount > 0 ? commissionAmount / amount : 0;

    // Check if conversion already exists (prevent duplicates)
    let conversionId = null;
    if (paymentIntentId) {
      const { data: existing } = await supabase
        .from('affiliate_conversions')
        .select('id')
        .eq('payment_intent_id', paymentIntentId)
        .single();

      if (existing) {
        return res.status(200).json({ 
          success: true, 
          message: 'Conversion already tracked',
          conversion_id: existing.id
        });
      }
    }

    // Store conversion
    const { data: conversion, error: insertError } = await supabase
      .from('affiliate_conversions')
      .insert({
        affiliate_code,
        conversion_type,
        payment_intent_id: paymentIntentId,
        service_type: serviceType,
        amount,
        commission_rate: commissionRate,
        commission_amount: commissionAmount,
        status: 'pending',
        client_email: clientEmail,
        metadata: metadata || {}
      })
      .select()
      .single();

    if (insertError) {
      console.error('Error inserting conversion:', insertError);
      return res.status(500).json({ 
        error: 'Failed to track conversion' 
      });
    }

    // TODO: Send notification email to affiliate about commission earned
    // TODO: Send notification email to you about new conversion

    res.status(200).json({ 
      success: true, 
      message: 'Conversion tracked',
      conversion_id: conversion.id,
      commission_amount: commissionAmount
    });

  } catch (error) {
    console.error('Conversion tracking error:', error);
    res.status(500).json({ 
      error: { message: error.message || 'An error occurred tracking conversion' } 
    });
  }
}

