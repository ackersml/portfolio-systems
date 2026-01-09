// Vercel Serverless Function for Affiliate Applications
// Processes affiliate applications and stores in Supabase

import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const resendApiKey = process.env.RESEND_API_KEY;
const adminEmail = process.env.ADMIN_EMAIL || 'ackers.ml@gmail.com';
const fromEmail = process.env.FROM_EMAIL || 'noreply@michelleackers.com';

const supabase = createClient(supabaseUrl, supabaseServiceKey);
const resend = resendApiKey ? new Resend(resendApiKey) : null;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const {
      name,
      instagram,
      email,
      why,
      has_network,
      followers,
      sharing_method,
      experience,
      payment_method
    } = req.body;

    // Validate required fields
    if (!name || !instagram || !email || !why || !has_network || !sharing_method || !payment_method) {
      return res.status(400).json({ 
        error: 'Missing required fields' 
      });
    }

    // Check if email already exists
    const { data: existingAffiliate } = await supabase
      .from('affiliates')
      .select('email')
      .eq('email', email)
      .single();

    if (existingAffiliate) {
      return res.status(400).json({ 
        error: 'An application with this email already exists' 
      });
    }

    // Generate unique affiliate code
    // Try to generate, if it fails, generate manually
    let affiliateCode;
    let attempts = 0;
    const maxAttempts = 10;
    
    while (attempts < maxAttempts) {
      // Generate code like AFF123456
      const randomNum = Math.floor(Math.random() * 999999);
      affiliateCode = 'AFF' + randomNum.toString().padStart(6, '0');
      
      // Check if code exists
      const { data: existing } = await supabase
        .from('affiliates')
        .select('affiliate_code')
        .eq('affiliate_code', affiliateCode)
        .single();
      
      if (!existing) {
        break; // Code is unique
      }
      
      attempts++;
    }
    
    if (attempts >= maxAttempts) {
      return res.status(500).json({ 
        error: 'Failed to generate unique affiliate code' 
      });
    }

    // Insert affiliate application
    const { data: affiliate, error: insertError } = await supabase
      .from('affiliates')
      .insert({
        name,
        instagram_handle: instagram.replace('@', ''),
        email,
        affiliate_code: affiliateCode,
        status: 'pending',
        has_network: has_network === 'yes',
        follower_count: followers ? parseInt(followers) : null,
        sharing_method,
        previous_experience: experience === 'yes',
        payment_method,
        why_interested: why
      })
      .select()
      .single();

    if (insertError) {
      console.error('Error inserting affiliate:', insertError);
      return res.status(500).json({ 
        error: 'Failed to submit application' 
      });
    }

    // Send emails (non-blocking - don't fail if email fails)
    if (resend) {
      try {
        // Send notification email to admin
        await resend.emails.send({
          from: fromEmail,
          to: adminEmail,
          subject: `New Affiliate Application: ${name}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #6B8E5A;">New Affiliate Application</h2>
              <p>A new affiliate application has been submitted:</p>
              <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
                <tr>
                  <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Name:</strong></td>
                  <td style="padding: 8px; border-bottom: 1px solid #eee;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Email:</strong></td>
                  <td style="padding: 8px; border-bottom: 1px solid #eee;">${email}</td>
                </tr>
                <tr>
                  <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Instagram:</strong></td>
                  <td style="padding: 8px; border-bottom: 1px solid #eee;">@${instagram.replace('@', '')}</td>
                </tr>
                <tr>
                  <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Affiliate Code:</strong></td>
                  <td style="padding: 8px; border-bottom: 1px solid #eee;"><code style="background: #f5f5f5; padding: 4px 8px; border-radius: 4px;">${affiliateCode}</code></td>
                </tr>
                <tr>
                  <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Has Network:</strong></td>
                  <td style="padding: 8px; border-bottom: 1px solid #eee;">${has_network === 'yes' ? 'Yes' : 'No'}</td>
                </tr>
                ${followers ? `
                <tr>
                  <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Followers:</strong></td>
                  <td style="padding: 8px; border-bottom: 1px solid #eee;">${followers}</td>
                </tr>
                ` : ''}
                <tr>
                  <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Sharing Method:</strong></td>
                  <td style="padding: 8px; border-bottom: 1px solid #eee;">${sharing_method.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}</td>
                </tr>
                <tr>
                  <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Payment Method:</strong></td>
                  <td style="padding: 8px; border-bottom: 1px solid #eee;">${payment_method.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}</td>
                </tr>
                <tr>
                  <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Why Interested:</strong></td>
                  <td style="padding: 8px; border-bottom: 1px solid #eee;">${why}</td>
                </tr>
              </table>
              <p style="margin-top: 20px;">
                <a href="https://supabase.com/dashboard/project/${supabaseUrl.split('//')[1].split('.')[0]}/editor" 
                   style="background: #6B8E5A; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
                  Review in Supabase Dashboard
                </a>
              </p>
            </div>
          `,
        });

        // Send confirmation email to applicant
        await resend.emails.send({
          from: fromEmail,
          to: email,
          subject: 'Affiliate Application Received',
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #6B8E5A;">Thank You for Your Application!</h2>
              <p>Hi ${name},</p>
              <p>We've received your affiliate program application. Here are your details:</p>
              <table style="width: 100%; border-collapse: collapse; margin: 20px 0; background: #f9f9f9; padding: 16px; border-radius: 8px;">
                <tr>
                  <td style="padding: 8px;"><strong>Your Affiliate Code:</strong></td>
                  <td style="padding: 8px;"><code style="background: white; padding: 4px 8px; border-radius: 4px; font-size: 16px;">${affiliateCode}</code></td>
                </tr>
              </table>
              <p><strong>What happens next?</strong></p>
              <ul style="line-height: 1.8;">
                <li>We'll review your application within 24 hours</li>
                <li>If approved, you'll receive an email with your unique affiliate link and dashboard access</li>
                <li>You'll get marketing materials and templates to help you get started</li>
              </ul>
              <p>If you have any questions, feel free to reach out to us at ${adminEmail}.</p>
              <p style="margin-top: 30px; color: #666; font-size: 14px;">
                Best regards,<br>
                Michelle Ackers
              </p>
            </div>
          `,
        });
      } catch (emailError) {
        console.error('Error sending emails:', emailError);
        // Don't fail the request if email fails
      }
    } else {
      console.warn('Resend API key not configured - emails not sent');
    }

    res.status(200).json({ 
      success: true,
      message: 'Application submitted successfully',
      affiliate_code: affiliateCode // For testing, remove in production
    });

  } catch (error) {
    console.error('Affiliate application error:', error);
    res.status(500).json({ 
      error: { message: error.message || 'An error occurred processing your application' } 
    });
  }
}

