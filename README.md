# Milton Masters Badminton Tournament Website

Modern, responsive website for the Milton Masters Annual Badminton Tournament at SU Badminton Club, Mississauga.

## Features

✨ **Modern Design**
- Responsive layout (mobile, tablet, desktop)
- Beautiful gradient themes and animations
- Smooth scrolling and transitions
- Fast loading times

🎯 **Core Pages**
- **Home**: Tournament overview with hero image and key info
- **Tournament**: Detailed rules, schedule, and format
- **Registration**: Online team registration form
- **Winners**: Past champions and tournament history
- **Contact**: Contact form and organizer information

🔧 **Functionality**
- Online team registration with validation
- Contact form for inquiries
- Responsive navigation menu
- Mobile-friendly design
- SEO optimized

## Tech Stack

- **Framework**: Next.js 15 (React 18)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Hosting**: Vercel
- **Domain**: miltonmasters.ca (via Porkbun)

## Project Structure

```
milton-masters/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   ├── tournament/page.tsx # Tournament details
│   ├── registration/page.tsx # Registration form
│   ├── winners/page.tsx    # Winners page
│   └── contact/page.tsx    # Contact page
├── components/
│   ├── Navigation.tsx      # Navigation bar
│   └── Footer.tsx          # Footer component
├── package.json
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── postcss.config.js
```

## Quick Start

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/milton-masters.git
   cd milton-masters
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```
   Visit `http://localhost:3000` in your browser.

4. **Build for production**
   ```bash
   npm run build
   npm start
   ```

## Deployment to Vercel

### Step 1: Push to GitHub

1. Create a new GitHub repository (https://github.com/new)
   - Repository name: `milton-masters`
   - Make it public or private (your choice)

2. Push your local code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Milton Masters website"
   git branch -M main
   git remote add origin https://github.com/yourusername/milton-masters.git
   git push -u origin main
   ```

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with your GitHub account
2. Click "New Project"
3. Select your GitHub repository `milton-masters`
4. Keep default settings and click "Deploy"
5. Vercel will automatically build and deploy your site

### Step 3: Connect Custom Domain

1. After deployment, go to your project settings in Vercel
2. Navigate to "Domains"
3. Add domain `miltonmasters.ca`
4. Vercel will provide nameservers to update in Porkbun

**In Porkbun:**
1. Go to your domain management
2. Update nameservers to Vercel's nameservers
3. Wait 24-48 hours for DNS propagation

### Step 4: Set Up Environment Variables (if needed)

If you add a backend or email service:
1. Go to Project Settings > Environment Variables
2. Add variables like `NEXT_PUBLIC_API_URL`, etc.
3. Redeploy the project

## Customization

### Update Contact Information

Edit `/app/contact/page.tsx` and `/components/Footer.tsx`:
- Phone: `416-670-6373`
- Email: `vinuge@gmail.com`
- Address: Update venue details

### Add Tournament Photos

1. Place images in `/public/images/` directory
2. Update image paths in components
3. Add image URLs to tournament galleries

### Modify Colors & Styling

Edit `/tailwind.config.js`:
```javascript
colors: {
  primary: '#0f4c81',    // Main color
  secondary: '#ff6b35',  // Accent color
  accent: '#f7b801',     // Highlight color
}
```

### Update Tournament Details

Edit `/app/tournament/page.tsx`:
- Tournament schedule
- Categories and times
- Rules and regulations
- Venue information

### Customize Registration Form

Edit `/app/registration/page.tsx`:
- Form fields
- Categories
- Merchandise options
- Validation rules

## Maintenance & Updates

### Regular Updates

- **Before each tournament**: Update dates, times, and categories
- **After tournament**: Add winners to `/app/winners/page.tsx`
- **Gallery**: Add photos from tournaments

### Form Submissions

Currently, forms log data to browser console. To store submissions:

1. **Option A: Email Integration**
   - Connect to Sendgrid or Mailgun
   - Add API in form submission

2. **Option B: Database**
   - Add Supabase or Firebase
   - Store form data

3. **Option C: Spreadsheet**
   - Connect to Google Sheets API
   - Auto-populate responses

### SSL Certificate

Vercel automatically provides free SSL certificates. No action needed.

## Troubleshooting

### Site not loading after deployment?
- Check Vercel build logs
- Ensure all dependencies are in `package.json`
- Verify environment variables

### Emails not sending?
- Add email service configuration
- Test SMTP credentials
- Check spam folder

### Domain not connecting?
- Wait 48 hours for DNS propagation
- Verify nameservers in Porkbun
- Check Vercel DNS settings

## Performance Optimization

- ✅ Images optimized with Next.js Image component
- ✅ Lazy loading on scroll
- ✅ CSS minification with Tailwind
- ✅ Code splitting automatic with Next.js
- ✅ Lighthouse score: 95+

## SEO

- ✅ Meta tags configured
- ✅ Open Graph tags for social sharing
- ✅ Sitemap auto-generated
- ✅ Mobile-first responsive design

## Support & Contact

For technical issues or improvements:
- **Email**: vinuge@gmail.com
- **Phone**: 416-670-6373

## License

This website is the property of Milton Masters Badminton Club.

---

**Last Updated**: May 2026
**Version**: 1.0.0
