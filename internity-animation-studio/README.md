# 🐝 INTERNITY Animation Studio Website

A **premium agency-level honeybee-themed animation studio website** built with Next.js 14, featuring smooth scroll animations, custom cursor effects, flying bees, and an interactive bee-catching game.

---

## ✨ Features

### Core Features
- 🎨 **Honeybee/Honeycomb Theme** - Complete visual design centered around honeybees and hexagonal patterns
- 🖱️ **Custom Honeybee Cursor** - Interactive bee-shaped cursor that follows mouse movements with spring physics
- 🐝 **Flying Bees Animation** - Background bees flying randomly throughout the website
- 🎮 **Bee Catching Game** - Interactive mini-game where users catch flying bees
- 🌊 **Smooth Scrolling** - Lenis smooth scroll implementation
- 🎭 **Page Transitions** - Honeycomb-themed entry animations between pages
- 📱 **Fully Responsive** - Mobile-first design optimized for all devices
- 📊 **Admin Dashboard** - Complete content management system

### Animations
- **GSAP ScrollTrigger** - Scroll-based animations, parallax, horizontal scroll
- **Framer Motion** - Page transitions, component animations, micro-interactions
- **Custom Effects** - Flying bees, honeycomb patterns, loading screens

---

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js 14 App Router
│   ├── page.tsx           # Home page
│   ├── portfolio/         # Portfolio page
│   ├── services/          # Services page
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   └── admin/             # Admin dashboard
│       ├── page.tsx       # Dashboard
│       ├── portfolio/     # Portfolio management
│       ├── messages/      # Messages inbox
│       ├── analytics/     # Analytics
│       └── settings/      # Settings
├── components/
│   ├── cursor/            # Honeybee cursor
│   ├── effects/           # Visual effects
│   ├── game/              # Bee catching game
│   └── navigation/        # Navbar
├── sections/              # Page sections
├── hooks/                 # Custom hooks
├── providers/             # Context providers
├── store/                 # Zustand state
├── animations/            # Motion variants
└── lib/                   # Utils & constants
```

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

---

## 🎨 Pages Overview

### Main Website
- **Home (/)** - Hero, Services, Portfolio horizontal scroll, About, Game, Contact
- **Portfolio (/portfolio)** - Full portfolio grid with all projects
- **Services (/services)** - Detailed services with process workflow
- **About (/about)** - Company story, team, values, statistics
- **Contact (/contact)** - Contact form with info cards and FAQs

### Admin Dashboard (/admin)
- **Dashboard** - Stats, traffic charts, recent activity
- **Portfolio** - Manage portfolio items (CRUD operations)
- **Messages** - Contact form submissions inbox
- **Analytics** - Visitor stats and traffic sources
- **Settings** - Profile, notifications, security, site settings

---

## 🎭 Key Animations

### GSAP
- Scroll-triggered text reveals
- Horizontal portfolio scroll with pinning
- Parallax effects on hero
- Stagger animations

### Framer Motion
- Honeycomb page transitions
- Spring physics for cursor
- Component mount animations
- Hover interactions

### Custom Effects
- **Flying Bees** - Randomized movement paths
- **Honeycomb Backgrounds** - SVG pattern overlays
- **Loading Screen** - Animated bee loader
- **Glowing Orbs** - Particle effects

---

## 🎮 Bee Catching Game

Interactive mini-game features:
- 30-second timer
- Score tracking
- Randomized bee positions
- Responsive touch/click controls
- Zustand state management

---

## 🎨 Color Palette

```css
--honey-light: #FFD700
--honey-primary: #F4A623
--honey-dark: #D4800D
--honey-accent: #FFF3D6
--neutral-black: #0A0A0A
--neutral-charcoal: #1A1A1A
--neutral-silver: #9CA3AF
--neutral-white: #FFFFFF
```

---

## 🔧 Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | Next.js 14 (App Router), TypeScript |
| **Styling** | Tailwind CSS |
| **Animations** | GSAP 3.12, Framer Motion 11, Lenis |
| **State** | Zustand |
| **Icons** | Lucide React |
| **Utils** | split-type, clsx, tailwind-merge |

---

## 📦 Key Dependencies

```json
{
  "gsap": "^3.12.5",
  "framer-motion": "^11.15.0",
  "@studio-freight/lenis": "^1.0.42",
  "zustand": "^5.0.3",
  "split-type": "^0.3.4",
  "lucide-react": "^0.469.0"
}
```

---

## 🌐 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import in Vercel
3. Deploy (auto-configured)

### Manual
```bash
npm run build
```
Deploy `.next` folder to any Node.js host.

---

## 📱 Browser Support

✅ Chrome, Firefox, Safari, Edge (latest)  
✅ iOS Safari, Chrome Mobile

---

## 🎯 Performance

- Next.js Image optimization
- Code splitting per route
- CSS purging with Tailwind
- Throttled event handlers
- GPU-accelerated animations
- Lazy loaded components

---

## 🔑 Admin Access

Navigate to `/admin` for the dashboard.

**⚠️ Note**: Demo implementation. Add authentication for production:
- NextAuth.js / Clerk
- Protected routes
- API endpoints
- Database integration

---

## 🎨 Customization

### Update Colors
Edit `src/lib/constants.ts`:
```typescript
export const COLORS = {
  honey: { ... }
};
```

### Update Portfolio
Edit `src/lib/constants.ts`:
```typescript
export const PORTFOLIO_ITEMS = [ ... ];
```

### Update Services
Edit `src/lib/constants.ts`:
```typescript
export const SERVICES = [ ... ];
```

---

## 🚧 Future Enhancements

- [ ] Authentication system
- [ ] CMS/Database integration
- [ ] Blog section
- [ ] Case study pages
- [ ] Internationalization (i18n)
- [ ] PWA features
- [ ] E2E testing

---

## 📄 License

MIT License

---

## 👨‍💻 Development

Built with Next.js 14, GSAP, Framer Motion, and Tailwind CSS.

**Made with 🐝 and honey**

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
