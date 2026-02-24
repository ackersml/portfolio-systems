# GoDaddy DNS settings for cornerstonedevs.com (Vercel)

Use these in **GoDaddy → Domain → DNS** (or “Manage DNS”) for **cornerstonedevs.com**.

## 1. Add the domain in Vercel first

1. Open [Vercel Dashboard](https://vercel.com/dashboard) → your project.
2. **Settings** → **Domains**.
3. Add:
   - `cornerstonedevs.com`
   - `www.cornerstonedevs.com`
4. Vercel will show the exact records to use; prefer those if they differ from below.

## 2. Records to add in GoDaddy

### Root domain (cornerstonedevs.com)

| Type | Name | Value | TTL |
|------|------|--------|-----|
| **A**  | `@` | `76.76.21.21` | 600 (or 1 Hour) |

- **Name:** `@` (or leave blank if GoDaddy uses “@” for root).
- **Value:** `76.76.21.21` (Vercel’s IP for apex).

### www subdomain

| Type   | Name | Value                 | TTL  |
|--------|------|------------------------|------|
| **CNAME** | `www` | `cname.vercel-dns.com` | 600 (or 1 Hour) |

- **Name:** `www`.
- **Value:** `cname.vercel-dns.com` (no `https://`, no trailing dot unless GoDaddy adds it).

## 3. Remove conflicting records

- Delete any other **A** or **CNAME** for `@` or `www` that point elsewhere (e.g. GoDaddy parking, old host).
- Keep **MX**, **TXT** (e.g. email, verification) unless Vercel or your email provider say otherwise.

## 4. After saving in GoDaddy

- Propagation often takes **5–30 minutes**, sometimes up to **24–48 hours**.
- In Vercel **Domains**, wait until both `cornerstonedevs.com` and `www.cornerstonedevs.com` show as **Valid** (green).
- Check: [https://www.whatsmydns.net](https://www.whatsmydns.net/) for `cornerstonedevs.com` (A → `76.76.21.21`) and `www.cornerstonedevs.com` (CNAME → `cname.vercel-dns.com`).

## Summary (copy-paste reference)

- **A** — Name: `@` — Value: `76.76.21.21`
- **CNAME** — Name: `www` — Value: `cname.vercel-dns.com`
