# Phoenix Crest Marketing

🚀 **Premium Digital Marketing Agency Website**

A cutting-edge, interactive portfolio website showcasing Phoenix Crest's marketing excellence through innovative web technologies and stunning visual experiences.

![Phoenix Crest Hero](https://img.shields.io/badge/Status-Live-brightgreen) ![React](https://img.shields.io/badge/React-18.3.1-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-Latest-blue) ![Tailwind](https://img.shields.io/badge/TailwindCSS-3.x-cyan)

## ✨ Features

### 🎨 **Visual Excellence**
- **Aurora Background Animation** - Dynamic particle system with theme-aware lighting effects
- **Glass Morphism Design** - Premium frosted glass components with backdrop blur
- **Responsive Orbital Timeline** - Interactive 3D timeline showcasing company milestones
- **Smooth Parallax Scrolling** - Engaging scroll-based animations throughout

### 🌙 **Advanced Theme System**
- **Dark/Light Mode Toggle** - Seamless theme switching with system preference detection
- **Persistent Theme Storage** - User preferences saved across sessions
- **Semantic Color System** - Consistent design tokens across all components

### 🔥 **Interactive Components**
- **Tubelight Navbar** - Animated glass-effect navigation with smooth transitions
- **Orbital Timeline** - Click-to-explore company journey with connected story nodes
- **Animated Testimonials** - Infinite scrolling columns with staggered motion
- **Scroll Expansion Hero** - Interactive scroll-to-reveal content sections

### 📱 **Mobile-First Design**
- **Fully Responsive** - Optimized for all devices from mobile to desktop
- **Touch-Friendly** - Enhanced interactions for mobile and tablet users
- **Progressive Enhancement** - Core functionality works across all browsers

## 🛠 Tech Stack

### **Frontend Framework**
- ⚛️ **React 18.3.1** - Modern React with hooks and concurrent features
- 🔷 **TypeScript** - Type-safe development with full IntelliSense
- ⚡ **Vite** - Lightning-fast build tool and development server

### **Styling & UI**
- 🎨 **Tailwind CSS** - Utility-first CSS framework with custom design system
- 🧩 **shadcn/ui** - High-quality React component library
- 🎭 **Framer Motion** - Production-ready motion library for complex animations

### **Routing & Navigation**
- 🛣️ **React Router DOM** - Client-side routing with dynamic navigation
- 🔗 **Dynamic Route Management** - Programmatic navigation and history management

### **Development Tools**
- 📦 **Bun** - Fast JavaScript runtime and package manager
- 🔧 **ESLint** - Code quality and consistency enforcement
- 📝 **PostCSS** - CSS processing with modern features

## 🚀 Getting Started

### **Prerequisites**
```bash
node >= 18.0.0
bun >= 1.0.0 (recommended) or npm >= 8.0.0
```

### **Installation**
```bash
# Clone the repository
git clone https://github.com/cmd-gi/Phoenix-Marketing.git
cd Phoenix-Marketing

# Install dependencies (using Bun - recommended)
bun install

# Or using npm
npm install
```

### **Development**
```bash
# Start development server
bun run dev

# Or with npm
npm run dev
```

Visit `http://localhost:5173` to see the website in action.

### **Build for Production**
```bash
# Build the project
bun run build

# Preview production build
bun run preview
```

## 📁 Project Structure

```
Phoenix-Marketing/
├── public/
│   ├── favicon.ico
│   ├── phoenix-crest.png
│   └── assets/
├── src/
│   ├── components/
│   │   ├── ui/                    # shadcn/ui components
│   │   │   ├── aurora-background.tsx
│   │   │   ├── phoenix-navbar.tsx
│   │   │   ├── radial-orbital-timeline.tsx
│   │   │   └── ...
│   │   ├── Layout.tsx
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── About.tsx             # Features orbital timeline
│   │   ├── Services.tsx
│   │   ├── Work.tsx
│   │   └── Contact.tsx
│   ├── hooks/
│   │   ├── use-mobile.tsx
│   │   ├── use-responsive.ts
│   │   └── use-toast.ts
│   ├── lib/
│   │   └── utils.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── components.json               # shadcn/ui configuration
├── tailwind.config.ts           # Tailwind customization
├── tsconfig.json               # TypeScript configuration
└── vite.config.ts              # Vite configuration
```

## 🎯 Key Pages & Features

### **🏠 Home Page**
- Hero section with animated background
- Service highlights with hover effects
- Client testimonials carousel
- Call-to-action sections

### **📖 About Page** ⭐
- **Parallax Hero Section** - Smooth scroll-based animations
- **Interactive Orbital Timeline** - Click nodes to explore company milestones
- **Responsive Design** - Optimized for all screen sizes
- **Connected Stories** - Related milestones pulse and connect when selected

### **💼 Services Page**
- Service offerings with detailed descriptions
- Interactive service cards
- Pricing information and packages

### **🎨 Work Page**
- Portfolio showcase
- Case studies and success stories
- Client testimonials and results

### **📞 Contact Page**
- Contact form with validation
- Company information and location
- Social media integration

## 🎨 Design System

### **Color Palette**
```css
/* Dark Mode (Default) */
--background: 0 0% 3.9%;
--foreground: 0 0% 98%;
--primary: 0 0% 98%;
--secondary: 0 0% 14.9%;
--muted: 0 0% 63.9%;

/* Light Mode */
--background: 0 0% 100%;
--foreground: 0 0% 3.9%;
--primary: 0 0% 9%;
--secondary: 0 0% 96.1%;
```

### **Typography**
- **Primary Font**: Inter (Google Fonts)
- **Monospace Font**: JetBrains Mono
- **Font Weights**: 100-900 variable
- **Responsive Scaling**: Fluid typography across breakpoints

### **Animation System**
- **Micro-interactions**: Hover states and button animations
- **Page Transitions**: Smooth route changes
- **Scroll Animations**: Progressive content revelation
- **Loading States**: Skeleton components and spinners

## 📱 Responsive Breakpoints

```css
/* Mobile First Approach */
sm: '640px'   /* Small tablets */
md: '768px'   /* Tablets */
lg: '1024px'  /* Laptops */
xl: '1280px'  /* Desktops */
2xl: '1536px' /* Large screens */
```

## 🔧 Configuration

### **Environment Variables**
Create a `.env` file in the root directory:
```env
VITE_APP_TITLE=Phoenix Crest Marketing
VITE_API_URL=https://api.phoenixcrest.com
```

### **Tailwind Customization**
The `tailwind.config.ts` includes custom:
- Color scheme with CSS variables
- Typography scale and font families
- Animation keyframes and utilities
- Component-specific styles

## 🚀 Deployment

### **Vercel (Recommended)**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### **Netlify**
```bash
# Build command
bun run build

# Publish directory
dist
```

### **Manual Deployment**
```bash
# Build the project
bun run build

# Upload the 'dist' folder to your web server
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit changes**: `git commit -m 'Add amazing feature'`
4. **Push to branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### **Development Guidelines**
- Follow TypeScript best practices
- Use semantic commit messages
- Maintain responsive design principles
- Test across multiple browsers and devices

## 📄 License

This project is proprietary and confidential. All rights reserved by Phoenix Crest Marketing.

## 📞 Contact & Support

**Phoenix Crest Marketing**
- 🌐 Website: [phoenixcrest.com](https://phoenixcrest.com)
- 📧 Email: info@phoenixcrest.com
- 🐙 GitHub: [@cmd-gi](https://github.com/cmd-gi)
- 💼 LinkedIn: [Phoenix Crest Marketing](https://linkedin.com/company/phoenixcrest)

## ⭐ Acknowledgments

- **shadcn/ui** for the beautiful component library
- **Framer Motion** for smooth animations
- **Tailwind CSS** for the utility-first approach
- **React Team** for the amazing framework
- **Vite Team** for the blazing fast build tool

---

**Built with ❤️ by Phoenix Crest Marketing Team**

*Elevating brands through strategic excellence and innovative web experiences.*