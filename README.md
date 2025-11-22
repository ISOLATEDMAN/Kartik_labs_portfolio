# 🎨 Kartikeya's Portfolio

A modern, interactive portfolio website showcasing my work as a Full Stack Developer and Product Engineer. Built with Next.js 16, featuring smooth animations, a dynamic music player, and an adorable cursor-following cat companion.

![Portfolio Preview](https://img.shields.io/badge/Next.js-16.0.3-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

- 🎵 **Interactive Music Player** - Background music with play/pause controls
- 🐱 **Cursor Follower** - Animated cat that follows your cursor using oneko.js
- 🎨 **Smooth Animations** - Framer Motion powered scroll animations and transitions
- 🌗 **Dark Mode** - Toggle between light and dark themes
- 📱 **Fully Responsive** - Optimized for all screen sizes
- ⚡ **Fast Performance** - Built with Next.js 16 and Turbopack
- 🎭 **Modern UI** - Clean design with glassmorphism effects

## 🚀 Tech Stack

- **Framework:** Next.js 16.0.3 with App Router
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion 12
- **Icons:** Lucide React & Tabler Icons
- **Theme:** next-themes
- **Components:** Radix UI primitives

## 📦 Getting Started

### Prerequisites

- Node.js 20+ installed
- pnpm (recommended) or npm/yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ISOLATEDMAN/Kartik_labs_portfolio.git
   cd Kartik_labs_portfolio
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Run the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
pnpm build
pnpm start
```

## 📁 Project Structure

```
kartikdev/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main page component
├── components/
│   ├── scroll-animation.tsx # Animation components
│   ├── theme-toggle.tsx     # Dark mode toggle
│   ├── typewrites.tsx       # Typewriter effect
│   ├── work-item.tsx        # Work experience cards
│   ├── project-list-item.tsx # Project cards
│   └── ui/                  # Reusable UI components
├── public/
│   ├── music/               # Background music files
│   ├── images/              # Images and logos
│   └── oneko.gif            # Cursor cat sprite
└── package.json
```

## 🎯 Key Components

### Music Player
- Autoplay functionality with browser compatibility
- Play/Pause toggle in navbar
- Looping background music

### Oneko Cat
- Classic pixel art cat sprite
- Follows cursor movement
- Pure JavaScript implementation

### Animations
- Scroll-triggered fade-in effects
- Slide animations for content
- Smooth transitions throughout

## 🛠️ Development Scripts

```bash
pnpm dev      # Start development server
pnpm build    # Build for production
pnpm start    # Start production server
pnpm lint     # Run ESLint
```

## 🌐 Deployment

This project is ready to deploy on:

- **Vercel** (Recommended)
  
  [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ISOLATEDMAN/Kartik_labs_portfolio)

- **Netlify**
- **Railway**
- Any Node.js hosting platform

## 📝 Customization

### Update Content
Edit `app/page.tsx` to modify:
- Personal information
- Work experience
- Projects
- Achievements
- Education

### Change Music
Replace `/public/music/videoplayback.webm` with your preferred audio file

### Styling
Modify `app/globals.css` and Tailwind classes to customize the look and feel

## 🐛 Known Issues

- Music autoplay may be blocked by browser policies on first load (click anywhere to start)
- Cat sprite requires browser cache clear after updates

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Connect

- **Portfolio:** [Live Demo](https://kartik-labs-portfolio.vercel.app)
- **GitHub:** [@ISOLATEDMAN](https://github.com/ISOLATEDMAN)
- **LinkedIn:** [Kartikeya Samudrala](https://www.linkedin.com/in/kartikeya-samudrala-59164b252/)
- **Twitter:** [@KARTIKEYA_S_1](https://x.com/KARTIKEYA_S_1)
- **Email:** samudralakartikeya@gmail.com

---

<p align="center">Made with ❤️ by Kartikeya</p>
<p align="center"><i>Never forget, why you started</i></p>
