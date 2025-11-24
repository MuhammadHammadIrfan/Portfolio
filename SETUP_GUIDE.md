# Quick Setup Guide

## ⚡ Immediate Next Steps

### 1. Update Your Information

Run these commands to quickly find and replace placeholder text:

```bash
# Update social links (replace with your actual URLs)
# Files to edit:
# - src/components/sections/Hero.tsx
# - src/components/layout/Footer.tsx
# - src/components/sections/Contact.tsx
```

**Find and Replace:**
- `https://github.com/yourusername` → Your GitHub URL
- `https://linkedin.com/in/yourusername` → Your LinkedIn URL
- `your.email@example.com` → Your actual email

### 2. Add Your Resume

```bash
# Add your resume PDF
# Place it at: public/resume.pdf
```

### 3. Replace Project Screenshots

```bash
# Add real screenshots to:
# public/projects/umeedlearn/1.png, 2.png, 3.png
# public/projects/kidneycare/1.png, 2.png
# public/projects/edusync/1.png, 2.png, 3.png
# public/projects/lingomate/1.png, 2.png
```

### 4. Test Locally

```bash
cd "d:\Web Dev\Portfolio"
npm run dev
```

Visit http://localhost:3000 and verify:
- [ ] All sections load correctly
- [ ] Dark/light mode toggle works
- [ ] Project cards link to detail pages
- [ ] Images display in carousel
- [ ] Mobile menu works
- [ ] All social links are correct

### 5. Deploy to Vercel

```bash
# Initialize git (if not done)
git init
git add .
git commit -m "Initial commit: Portfolio website"

# Create a new repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

Then:
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Click "Deploy"

---

## 🔧 Optional Enhancements

### Add Contact Form Backend

Choose one option:

**Option 1: EmailJS (Easiest)**
```bash
npm install @emailjs/browser
```
Update `src/components/sections/Contact.tsx` with EmailJS integration.

**Option 2: Formspree**
Update form action to point to your Formspree endpoint.

**Option 3: API Route**
Create `src/app/api/contact/route.ts` with email sending logic.

### Add Analytics

```bash
npm install @vercel/analytics
```

Add to `src/app/layout.tsx`:
```typescript
import { Analytics } from '@vercel/analytics/react';

// In the return statement:
<Analytics />
```

---

## 📱 Testing Checklist

### Desktop (1920px)
- [ ] All sections visible
- [ ] Navbar sticky and functional
- [ ] Hover effects work on cards
- [ ] Theme toggle works
- [ ] Smooth scrolling works

### Tablet (768px)
- [ ] Layout adjusts properly
- [ ] Grid becomes 2 columns
- [ ] Navigation still accessible

### Mobile (375px)
- [ ] Hamburger menu appears
- [ ] All content readable
- [ ] Forms are usable
- [ ] Images scale properly

---

## 🚀 Performance Tips

1. **Optimize Images:**
   ```bash
   # Use tools like TinyPNG or Squoosh to compress images
   # Aim for <200KB per image
   ```

2. **Enable Caching:**
   Vercel handles this automatically

3. **Monitor Performance:**
   - Use Lighthouse in Chrome DevTools
   - Aim for 90+ scores in all categories

---

## 📝 Content Updates

### Adding a New Project

1. Add project data to `src/data/projects.ts`:
```typescript
{
  slug: 'new-project',
  title: 'New Project',
  category: 'AI + Full Stack',
  shortDescription: '...',
  longDescription: '...',
  problem: '...',
  techStack: ['Next.js', 'TypeScript'],
  skills: ['Full-stack Development'],
  challenges: '...',
  learnings: '...',
  githubUrl: '...',
  liveUrl: '...',
  images: ['/projects/new-project/1.png'],
  featured: true,
}
```

2. Add images to `public/projects/new-project/`

3. The project will automatically appear on the site!

---

## 🎨 Customization

### Change Primary Color

Find and replace throughout the codebase:
- `blue-500` → `purple-500` (or any Tailwind color)
- `text-blue-500` → `text-purple-500`
- `bg-blue-500` → `bg-purple-500`

### Modify Fonts

Update `src/app/layout.tsx`:
```typescript
import { Poppins } from "next/font/google";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});
```

---

## 💬 Support

If you encounter any issues:

1. Check the browser console for errors
2. Verify all file paths are correct
3. Ensure all dependencies are installed: `npm install`
4. Clear Next.js cache: `rm -rf .next`
5. Restart the dev server

---

## ✅ Final Checklist Before Going Live

- [ ] All placeholder text replaced
- [ ] Real project screenshots added
- [ ] Resume PDF uploaded
- [ ] Social links updated
- [ ] Contact form tested
- [ ] Tested on mobile, tablet, desktop
- [ ] Dark/light mode works everywhere
- [ ] All links work (no 404s)
- [ ] SEO meta tags updated
- [ ] Favicon added (optional)
- [ ] Google Analytics added (optional)

---

**You're all set! 🎉**

Your portfolio is production-ready. Just update the content and deploy!
