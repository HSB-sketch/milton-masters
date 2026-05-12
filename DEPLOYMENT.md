# Milton Masters Website - Complete Deployment Guide

## 📋 Overview

You now have a complete, production-ready Next.js website for Milton Masters Badminton Tournament. This guide will help you deploy it to the internet using GitHub and Vercel.

**What you'll do:**
1. Create a GitHub repository
2. Push your code to GitHub
3. Connect to Vercel for automatic deployment
4. Connect your domain (miltonmasters.ca) to Vercel
5. Go live!

---

## Step 1: Prepare Your Local Project

### 1.1 Initialize Git in your project folder

If you haven't already, initialize Git:

```bash
cd /path/to/milton-masters
git init
git add .
git commit -m "Initial commit: Milton Masters website v1.0"
```

---

## Step 2: Create GitHub Repository

### 2.1 Create a new repository on GitHub

1. Go to [github.com/new](https://github.com/new)
2. **Repository name**: `milton-masters`
3. **Description**: "Official website for Milton Masters Annual Badminton Tournament"
4. Choose **Public** (recommended for visibility) or **Private**
5. Click **Create repository**

### 2.2 Push your code to GitHub

GitHub will show you the commands. Run these in your terminal:

```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/milton-masters.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

**Verification**: Visit your GitHub repository URL to confirm all files are uploaded.

---

## Step 3: Deploy to Vercel

### 3.1 Sign up / Login to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **Sign Up** (or **Sign In** if you have an account)
3. **Recommended**: Sign up with GitHub for easy connection
4. Authorize Vercel to access your GitHub account

### 3.2 Import your GitHub project

1. After signing in, click **Add New...** > **Project**
2. Select **Import Git Repository**
3. Find `milton-masters` repository in the list
4. Click **Import**

### 3.3 Configure project settings

On the "Configure Project" screen:
- **Framework Preset**: Leave as `Next.js` (auto-detected)
- **Build Settings**: Leave default
- **Environment Variables**: Leave empty for now (optional: add later)
- Click **Deploy**

**Wait for deployment** (usually 2-5 minutes)

### 3.4 Verification

After deployment completes:
- You'll see a **Domains** section
- Default URL: `milton-masters-xyz.vercel.app`
- Your site is now live! 🎉

---

## Step 4: Connect Your Custom Domain

### 4.1 Add domain to Vercel

1. In your Vercel project, go to **Settings** > **Domains**
2. Click **Add Domain**
3. Enter: `miltonmasters.ca`
4. Click **Add**

You'll see Vercel's nameservers (it will look like):
```
ns1.vercel-dns.com
ns2.vercel-dns.com
```

### 4.2 Update nameservers in Porkbun

1. Go to [porkbun.com](https://porkbun.com) and login
2. Go to **Account** > **Domains**
3. Click on `miltonmasters.ca`
4. Click **Manage** > **Nameservers**
5. Select **Custom Nameservers**
6. Add Vercel's nameservers:
   - `ns1.vercel-dns.com`
   - `ns2.vercel-dns.com`
7. Save changes

### 4.3 Wait for DNS propagation

DNS changes take **24-48 hours** to propagate globally.

**Check status:**
- Try visiting `miltonmasters.ca` (might show 404 initially)
- Use [whatsmydns.net](https://whatsmydns.net) to check DNS propagation
- Once propagated, your site will appear at the custom domain

---

## Step 5: Verification Checklist

- [ ] Code pushed to GitHub
- [ ] Project deployed on Vercel
- [ ] Can access site via Vercel URL (milton-masters-xyz.vercel.app)
- [ ] Custom domain added to Vercel
- [ ] Nameservers updated in Porkbun
- [ ] DNS propagated (check after 24 hours)
- [ ] Can access site via `miltonmasters.ca`
- [ ] All pages load correctly
- [ ] Forms work (test registration and contact forms)
- [ ] Mobile view responsive

---

## Updating Your Website

### Making Changes Locally

After any changes to your code:

```bash
git add .
git commit -m "Description of changes"
git push origin main
```

**Vercel will automatically redeploy** within 2-5 minutes.

### Updating Content

Edit these files to update tournament info:

- **Home page**: `/app/page.tsx`
- **Tournament details**: `/app/tournament/page.tsx`
- **Categories/schedule**: Update dates and times in tournament page
- **Winners**: `/app/winners/page.tsx`
- **Contact info**: `/app/contact/page.tsx` and `/components/Footer.tsx`
- **Colors**: `/tailwind.config.js`

---

## Common Updates

### Update Tournament Date

1. Edit `/app/tournament/page.tsx`
2. Find: `May 18, 2026`
3. Replace with new date
4. Push to GitHub
5. Vercel auto-deploys

### Add Tournament Winners

1. Edit `/app/winners/page.tsx`
2. Update the `winners2025` array with team names
3. Add new tournament year section
4. Push to GitHub

### Change Contact Information

1. Edit `/app/contact/page.tsx`
2. Update phone, email, etc.
3. Also update `/components/Footer.tsx`
4. Push to GitHub

### Update Colors & Design

1. Edit `/tailwind.config.js` (colors section)
2. Edit `/app/globals.css` (custom styles)
3. Push to GitHub

---

## Optional: Add Form Submission Handling

Currently, forms log data to browser console. To actually receive submissions:

### Option 1: Email via Sendgrid (Recommended)

1. Sign up for [Sendgrid](https://sendgrid.com) (free tier available)
2. Get your API key
3. In Vercel project settings, add environment variable:
   - Key: `SENDGRID_API_KEY`
   - Value: Your API key
4. Update form submission code to use Sendgrid API

### Option 2: Use Google Forms

Create a Google Form and embed it, or use Formspree:

1. Go to [formspree.io](https://formspree.io)
2. Create free account
3. Create form and get form ID
4. Update form action in code

### Option 3: Database (Supabase)

1. Create free account at [supabase.com](https://supabase.com)
2. Create database
3. Add table for submissions
4. Update form to POST to your database

---

## Performance Tips

- ✅ Site is already optimized
- ✅ Uses Next.js automatic code splitting
- ✅ CSS is minified with Tailwind
- ✅ Images are lazy-loaded
- ✅ Mobile responsive

**Check speed:**
- Go to [pagespeed.web.dev](https://pagespeed.web.dev)
- Enter your domain
- Target score: 90+

---

## Security Best Practices

- ✅ HTTPS enabled automatically (Vercel)
- ✅ Next.js provides built-in security headers
- ✅ No sensitive data in code
- ✅ Environment variables for API keys

---

## Troubleshooting

### Site shows "404 Not Found" error

**Problem**: Domain not yet propagated
**Solution**: Wait 24-48 hours or check at [whatsmydns.net](https://whatsmydns.net)

### Forms not working

**Problem**: Forms don't send anywhere (by design for now)
**Solution**: Add email integration or database (see "Optional" section)

### Changes not appearing

**Problem**: GitHub push not triggering redeploy
**Solution**: 
1. Check GitHub has latest code: `git push`
2. Check Vercel project log for build errors
3. Hard refresh browser (Ctrl+Shift+R)

### Domain shows wrong site

**Problem**: Nameservers still pointing to old host
**Solution**:
1. Verify nameservers in Porkbun
2. Wait longer (DNS propagation)
3. Use [whatsmydns.net](https://whatsmydns.net) to check

---

## Next Steps After Launch

1. **Test Everything**
   - Visit miltonmasters.ca
   - Try all pages and links
   - Test on mobile devices
   - Fill out forms to verify they work

2. **Add Content**
   - Upload tournament photos
   - Add past winners info
   - Update tournament schedule for next year

3. **Promote**
   - Share link with badminton community
   - Post on social media
   - Add to WhatsApp group
   - Update old website to point to new site

4. **Monitor**
   - Check Vercel dashboard for errors
   - Monitor uptime
   - Check analytics (optional)

5. **Iterate**
   - Gather feedback
   - Improve design
   - Add new features
   - Keep content updated

---

## Support Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Vercel Docs**: https://vercel.com/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **GitHub Help**: https://docs.github.com

---

## Contact for Help

- **Vinu George**: 416-670-6373 | vinuge@gmail.com
- **Website Repo**: https://github.com/YOUR_USERNAME/milton-masters

---

**Congratulations!** Your Milton Masters website is now live! 🏆

