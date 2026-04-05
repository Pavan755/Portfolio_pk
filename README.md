# 🚀 Portfolio Site

A modern, responsive portfolio website built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**. Showcase your projects, skills, and experience to potential recruiters and employers.

🌐 **[Live Demo](https://portfolio-pk-xi.vercel.app/)** | 📦 **[GitHub Repo](https://github.com/Pavan755/Portfolio_pk)** | 💻 **[View Source](https://github.com/Pavan755/Portfolio_pk)**

---

## ✨ Features

- ⚡ **Lightning Fast** - Built with Vite for instant HMR and optimal performance
- 🎨 **Beautiful UI** - 30+ pre-built components from Radix UI + Tailwind CSS
- 📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile
- 🎯 **TypeScript** - Full type safety for robust code
- 🌙 **Theme Support** - Dark/light mode with next-themes
- 📊 **Charts & Data** - Recharts integration for data visualization
- ✅ **Form Handling** - React Hook Form with validation (Zod)
- 🎬 **Smooth Animations** - GSAP and Tailwind animations
- 📚 **Well Organized** - Clean component structure and project layout

---

## 🛠️ Tech Stack

| Category | Technologies |
|----------|--------------|
| **Frontend** | React 19, TypeScript, Vite 7 |
| **Styling** | Tailwind CSS, PostCSS, Autoprefixer |
| **UI Components** | Radix UI (30+ components) |
| **Forms** | React Hook Form, Zod validation |
| **Animations** | GSAP, Tailwind CSS Animate |
| **Charts** | Recharts |
| **Theming** | next-themes |
| **Dev Tools** | ESLint, TypeScript Compiler |

---

## 📋 Prerequisites

Before you begin, ensure you have these installed:

- **Node.js** (v18.0 or higher) - [Download here](https://nodejs.org/)
- **npm** (v9+) - Comes with Node.js
- **Git** (optional) - [Download here](https://git-scm.com/)

**Check your versions:**
```bash
node --version
npm --version
```

---

## 🚀 Installation & Setup

### **Option 1: Clone from GitHub**

```bash
# Clone the repository
git clone https://github.com/Pavan755/Portfolio_pk.git

# Navigate to project folder
cd Portfolio_pk/app

# Install dependencies
npm install

# Start development server
npm run dev
```

### **Option 2: Manual Download**

1. Download the repository as ZIP from GitHub
2. Extract it to your desired location
3. Navigate to the `app` folder
4. Run:
   ```bash
   npm install
   npm run dev
   ```

---

## 💻 Local Development

### **Start Development Server**
```bash
npm run dev
```
- Opens automatically at `http://localhost:5173/`
- Hot Module Reloading (HMR) enabled - changes appear instantly
- Press `h + enter` in terminal for help

### **Lint Code**
```bash
npm run lint
```
Checks for code quality issues and ESLint violations.

### **Build for Production**
```bash
npm run build
```
Creates an optimized production build in the `dist/` folder.

### **Preview Production Build**
```bash
npm run preview
```
Test your production build locally before deploying.

---

## 📁 Project Structure

```
app/
├── src/
│   ├── components/
│   │   └── ui/                 # 30+ Radix UI components
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── dialog.tsx
│   │       └── ...
│   ├── hooks/
│   │   └── use-mobile.ts       # Custom React hooks
│   ├── lib/
│   │   └── utils.ts            # Utility functions
│   ├── App.tsx                 # Main app component
│   ├── App.css                 # Global styles
│   ├── index.css               # Base styles
│   └── main.tsx                # Entry point
├── public/
│   └── images/                 # Static images
├── package.json                # Dependencies & scripts
├── vite.config.ts              # Vite configuration
├── tailwind.config.js          # Tailwind CSS config
├── tsconfig.json               # TypeScript config
└── index.html                  # HTML template
```

---

## 🎯 Usage

### **Customizing Content**

1. **Edit App.tsx** - Modify the main page content
   ```bash
   code src/App.tsx
   ```

2. **Add new components** - Create files in `src/components/`

3. **Update styles** - Modify `App.css` or use Tailwind classes

4. **Add images** - Place in `public/images/` and reference:
   ```tsx
   <img src="/images/your-image.jpg" alt="description" />
   ```

### **Using UI Components**

Example with Button component:
```tsx
import { Button } from "@/components/ui/button"

export default function App() {
  return (
    <Button variant="default" size="lg">
      Click me!
    </Button>
  )
}
```

---

## 🚢 Deployment

### **🎯 Current Deployment: Vercel (Recommended)**

Your portfolio is now **live on Vercel** at: **[https://portfolio-pk-xi.vercel.app/](https://portfolio-pk-xi.vercel.app/)**

**What you get:**
- ✅ Fast global CDN
- ✅ Automatic deployments on git push
- ✅ Zero-downtime updates
- ✅ HTTPS enabled
- ✅ Free hosting tier
- ✅ Custom domain support

---

### **How to Deploy / Update Your Portfolio**

1. **Push changes to GitHub:**
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push origin main
   ```

2. **Vercel automatically deploys:**
   - Monitor deployment at: [Vercel Dashboard](https://vercel.com/dashboard)
   - Your live site updates within 1-2 minutes
   - No additional action needed!

3. **View your live site:**
   - **Primary URL:** https://portfolio-pk-xi.vercel.app/

---

### **Alternative: Deploy to GitHub Pages**

If you prefer GitHub Pages hosting:

1. **Ensure your code is pushed to main:**
   ```bash
   git add .
   git commit -m "Deploy portfolio"
   git push origin main
   ```

2. **GitHub Actions will automatically build & deploy** when configured
   - Your site will be at: `https://Pavan755.github.io/Portfolio_pk/`
   - Check **Actions** tab to track deployment status

---

### **Set Up Custom Domain (Optional)**

Want to use your own domain? Follow these steps:

1. **Buy a domain** from [Namecheap](https://namecheap.com), [GoDaddy](https://godaddy.com), or [Cloudflare](https://cloudflare.com)

2. **Connect to Vercel:**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Select your project
   - Settings → Domains
   - Add your custom domain
   - Follow DNS instructions

3. **HTTPS is automatically configured** - no extra steps needed!

Example: Your portfolio URL becomes `https://yourname.com` instead of Vercel's default

---

---

## 📧 How Recruiters Can Use This

### **View Your Live Portfolio**
- 🌐 **Live Site:** [https://portfolio-pk-xi.vercel.app/](https://portfolio-pk-xi.vercel.app/)
- 📦 **GitHub Repository:** [Portfolio_pk](https://github.com/Pavan755/Portfolio_pk)
- ⭐ **Star this repo** if you find it useful!

### **Getting Started with the Code**

Recruiters and developers can clone and run locally:

```bash
git clone https://github.com/Pavan755/Portfolio_pk.git
cd Portfolio_pk/app
npm install
npm run dev
```
- Opens automatically at `http://localhost:5173/`
- Perfect for testing and exploring locally

### **Understanding the Codebase**

**Key Files to Review:**
| File | Purpose |
|------|---------|
| `src/App.tsx` | Main portfolio component |
| `src/components/ui/` | 40+ reusable UI components |
| `src/App.css` | Portfolio-specific styles |
| `tailwind.config.js` | Design system & theme configuration |
| `vite.config.ts` | Build tool configuration |
| `package.json` | Dependencies & scripts |

**Architecture Highlights:**
- ✅ Clean React component structure
- ✅ Full TypeScript type safety
- ✅ Responsive design with Tailwind CSS
- ✅ Modular UI component library
- ✅ Modern build setup with Vite

---

## 📦 Dependencies Quick Reference

### **Core**
- `react@19.2.0` - UI library
- `vite@7.2.4` - Build tool
- `typescript@5.9.3` - Type safety

### **UI & Styling**
- `tailwindcss@3.4.19` - Utility-first CSS
- `@radix-ui/*` - Accessible components

### **Forms**
- `react-hook-form@7.70.0` - Form management
- `zod@4.3.5` - Schema validation

### **Extras**
- `gsap@3.14.2` - Animations
- `recharts@2.15.4` - Charts
- `next-themes@0.4.6` - Theme switcher

See `package.json` for the complete list.

---

## 🐛 Troubleshooting

### **GitHub Pages not loading?**

**Issue:** Site returns 404 or blank page
**Solution:** 
1. Verify `vite.config.ts` has `base: '/Portfolio_pk/'` (case-sensitive!)
2. Check GitHub Actions workflow succeeded (go to Actions tab)
3. Enable GitHub Pages in repository Settings:
   - Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` (created by GitHub Actions)
   - Save
4. Wait 2-5 minutes for DNS to propagate
5. Clear browser cache (Ctrl+F5) and refresh

**Check deployment logs:**
```bash
# View GitHub Actions logs
# Repository → Actions → Deploy to GitHub Pages (latest run)
```

### **Port 5173 already in use?**
```bash
npm run dev -- --port 3000
```

### **Dependencies not installing?**
```bash
rm -rf node_modules package-lock.json
npm install
```

### **TypeScript errors?**
```bash
npm run build
```
Checks for compilation errors.

### **Build fails on GitHub Actions?**
1. Check workflow logs (Actions tab)
2. Verify TypeScript compiles locally: `npm run build`
3. Ensure all imports use correct paths (use `@/` alias)
4. Check for missing dependencies in `package.json`

---

## 📝 License

This project is open source and available under the MIT License.

---

## 📞 Contact & Links

- **GitHub Profile:** [@Pavan755](https://github.com/Pavan755)
- **Repository:** [Portfolio_pk](https://github.com/Pavan755/Portfolio_pk)
- **🌐 Live Portfolio:** [https://portfolio-pk-xi.vercel.app/](https://portfolio-pk-xi.vercel.app/)

---

## 🤝 Contributing

Feel free to fork this repository, make improvements, and submit pull requests!

---

**Made with ❤️ by Pavan**
