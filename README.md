# Portfolio Website

A modern, minimal portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🌓 Dark/Light mode toggle
- 📱 Fully responsive design
- ⚡ Fast and optimized with Next.js 14+
- 🎨 Clean, professional, minimal design
- 🎯 SEO optimized
- 🎭 Smooth animations with Framer Motion
- 📊 Dynamic project pages
- 📧 Contact form

## Tech Stack

- **Framework:** Next.js 15+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** React Icons
- **Fonts:** Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Home page
│   │   ├── projects/          # Projects pages
│   │   ├── experience/        # Experience page
│   │   └── contact/           # Contact page
│   ├── components/            # React components
│   │   ├── layout/           # Layout components (Navbar, Footer)
│   │   ├── sections/         # Page sections
│   │   └── ui/               # Reusable UI components
│   ├── contexts/             # React contexts (Theme)
│   └── data/                 # Data files (projects, skills, experience)
├── public/                   # Static assets
│   ├── projects/            # Project screenshots
│   └── resume.pdf           # Resume file
└── tailwind.config.ts       # Tailwind configuration
```

## Customization

### Update Personal Information

1. **Hero Section:** Edit `src/components/sections/Hero.tsx`
2. **About Section:** Edit `src/components/sections/About.tsx`
3. **Projects:** Edit `src/data/projects.ts`
4. **Experience:** Edit `src/data/experience.ts`
5. **Skills:** Edit `src/data/skills.ts`
6. **Social Links:** Update URLs in `src/components/layout/Footer.tsx` and `Hero.tsx`

### Add Project Screenshots

1. Create folders in `public/projects/` for each project (use project slug as folder name)
2. Add images as `1.png`, `2.png`, etc.
3. Update image paths in `src/data/projects.ts`

### Add Resume

Place your resume PDF in `public/resume.pdf`

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with default settings

The site will be automatically deployed and you'll receive a production URL.

## License

MIT License - feel free to use this template for your own portfolio!

## Author

Muhammad Hammad Irfan
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [yourusername](https://linkedin.com/in/yourusername)
