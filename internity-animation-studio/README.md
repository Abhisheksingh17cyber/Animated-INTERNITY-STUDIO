# 🐝 INTERNITY Animation Studio

A premium, agency-level animated website built with **Next.js 14**, **Tailwind CSS v4**, **GSAP**, and **Framer Motion** — featuring a stunning honeybee theme with immersive animations and interactive experiences.

![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.0-38B2AC)
![GSAP](https://img.shields.io/badge/GSAP-3.12-88CE02)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-11-purple)

---

## ✨ Features

### 🎨 Design & Theme
- **Honeybee-inspired** color palette (golden honey, amber accents, dark backgrounds)
- **Honeycomb SVG** background patterns throughout the site
- **Custom honeybee cursor** with spring physics and trail effect
- Premium dark-mode aesthetic with golden accents

### 🎬 Animations
- **GSAP ScrollTrigger** scroll-driven animations
- **Framer Motion** page transitions with hexagonal honeycomb grid
- **Lenis** smooth scrolling for buttery-smooth experience
- **Parallax** hero section with floating hexagons
- **Text reveal** animations using SplitType
- **Horizontal scroll** portfolio gallery with pinning
- **Stagger animations** on service cards and portfolio items

### 🎮 Interactive Elements
- **Bee Catching Game** — Click flying bees to score points before time runs out!
- **Animated contact form** with floating labels and submit effects
- **Portfolio filtering** with category tabs
- **FAQ accordion** on contact page

### 📱 Pages
| Page | Description |
|------|-------------|
| **Home** | Hero, Services, Portfolio (horizontal scroll), About, Contact, Footer |
| **Portfolio** | Extended gallery with filtering, categories, and "load more" |
| **Services** | Detailed services with process timeline and CTA |
| **About** | Company story, SVG honeycomb visual, stats, values, team |
| **Contact** | Full contact form, info cards, social links, FAQ accordion |

### 🔧 Admin Dashboard
| Page | Features |
|------|----------|
| **Dashboard** | Stats overview, traffic chart, recent activity, projects table |
| **Portfolio** | Full CRUD management with search, filter, and modal editor |
| **Messages** | Inbox with read/unread, star, archive, reply functionality |
| **Analytics** | Traffic charts, sources, top pages, devices, countries |
| **Settings** | Profile, notifications, security, appearance, site settings |

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18+ 
- **npm** or **yarn**

### Installation

```bash
# Clone the repository
git clone https://github.com/Abhisheksingh17cyber/Animated-INTERNITY-STUDIO.git
cd Animated-INTERNITY-STUDIO/internity-animation-studio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
npm start
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| [Next.js 14](https://nextjs.org/) | React framework (App Router) |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |
| [Tailwind CSS v4](https://tailwindcss.com/) | Utility-first CSS with `@theme` |
| [GSAP](https://gsap.com/) | High-performance scroll animations |
| [Framer Motion](https://www.framer.com/motion/) | React animation library |
| [Lenis](https://lenis.studiofreight.com/) | Smooth scrolling |
| [Zustand](https://zustand-demo.pmnd.rs/) | Lightweight state management |
| [Lucide React](https://lucide.dev/) | Beautiful icons |
| [SplitType](https://github.com/lukePeavey/SplitType) | Text splitting for animations |

---

## 📁 Project Structure

```
internity-animation-studio/
├── src/
│   ├── animations/          # Framer Motion variants
│   ├── app/
│   │   ├── admin/           # Admin dashboard pages
│   │   │   ├── analytics/
│   │   │   ├── messages/
│   │   │   ├── portfolio/
│   │   │   └── settings/
│   │   ├── about/
│   │   ├── contact/
│   │   ├── portfolio/
│   │   ├── services/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── ClientLayout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── cursor/           # Custom honeybee cursor
│   │   ├── effects/          # Flying bees, honeycomb BG, loader
│   │   ├── game/             # Bee catching game
│   │   └── navigation/       # Navbar
│   ├── hooks/                # Custom React hooks
│   ├── lib/                  # Utilities & constants
│   ├── providers/            # Smooth scroll & page transitions
│   ├── sections/             # Homepage sections
│   ├── store/                # Zustand stores
│   └── types/                # TypeScript types
├── package.json
├── tsconfig.json
├── next.config.ts
└── tailwind.config.ts
```

---

## 🎯 Key Animation Techniques

### GSAP ScrollTrigger
- Parallax hero backgrounds with `y` transforms
- Horizontal scroll portfolio with pinned containers
- Text reveal with character-level animations via SplitType
- Section-level stagger reveals

### Framer Motion
- Page transitions using `AnimatePresence` + hexagonal grid overlay
- Spring-based cursor physics (`useSpring`)
- Hover/tap micro-interactions across all interactive elements
- Stagger containers for list animations

### Lenis Smooth Scrolling
- Integrated via `SmoothScrollProvider` wrapping the app
- Buttery-smooth native scroll replacement

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](../LICENSE) file for details.

---

## 👤 Author

**Abhishek Singh** — [@Abhisheksingh17cyber](https://github.com/Abhisheksingh17cyber)

---

<p align="center">
  Built with 🐝 by INTERNITY Animation Studio
</p>
