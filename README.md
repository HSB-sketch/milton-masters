# Milton Masters - Badminton Tournament Website

A modern Next.js website for Milton Masters annual badminton tournament at SU Badminton Club in Mississauga.

## Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Tournament categories and schedule
- ✅ Live scoring with Challonge integration
- ✅ Registration information
- ✅ Winners/champions section
- ✅ Venue details and contact information
- ✅ Fast performance with Next.js + Tailwind CSS

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```
   Visit: http://localhost:3000

3. **Build for production:**
   ```bash
   npm run build
   npm start
   ```

## File Structure

```
milton-masters/
├── app/
│   ├── components/
│   │   ├── Navigation.tsx    # Navigation bar
│   │   └── Footer.tsx        # Footer component
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Home page
│   └── globals.css           # Global styles
├── public/                   # Static files
├── package.json             # Dependencies
├── tailwind.config.js       # Tailwind configuration
├── tsconfig.json            # TypeScript config
├── next.config.js           # Next.js config
└── postcss.config.js        # PostCSS config
```

## Customization

### Update Contact Information
Edit `app/page.tsx` and search for:
- `416-670-6373` → Your phone
- `vinuge@gmail.com` → Your email
- `Vinu George` → Your name

### Update Tournament Details
Edit the hero section and tournament categories in `app/page.tsx`:
- Date: May 18, 2026
- Venue: SU Badminton Club
- Categories: 40+, 50+, 60+, Open, Mixed Doubles

### Update Challonge Link
Search for `challonge.com/i67fngvr` and replace with your tournament link.

## Deployment

### Deploy to Vercel (Recommended)

1. Push to GitHub
2. Connect repo to Vercel
3. Vercel auto-deploys on every push

### Deploy to Other Hosts

Build the project:
```bash
npm run build
```

## Tech Stack

- **Framework:** Next.js 14+
- **Styling:** Tailwind CSS
- **Language:** TypeScript/JavaScript
- **Deployment:** Vercel

## Support

Contact: Vinu George
📞 416-670-6373
✉️ vinuge@gmail.com
