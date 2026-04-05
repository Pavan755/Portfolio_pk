# 🚀Portfolio Site

A modern, responsive portfolio website built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**. Showcase your projects, skills, and experience to potential recruiters and employers.

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

### **Deploy to GitHub Pages (Automated)**

This repository is configured with GitHub Actions for automatic deployment to GitHub Pages.

1. **Ensure your code is pushed to main:**
   ```bash
   git add .
   git commit -m "Deploy portfolio"
   git push origin main
   ```

2. **GitHub Actions will automatically:**
   - Install dependencies
   - Build your project
   - Deploy to GitHub Pages
   - ✅ Your site is live at: `https://Pavan755.github.io/Portfolio_pk/`

3. **Track deployment status:**
   - Go to your repository → **Actions** tab
   - Watch the workflow run in real-time
   - See deployment success/failure logs

**Note:** The first deployment may take 1-2 minutes. Subsequent deployments are faster.

---

### **Deploy to Vercel (Alternative - Recommended for custom domains)**

Vercel provides free hosting with better performance and custom domain support.

1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click "New Project"
4. Select your `Portfolio_pk` repository
5. Change build settings:
   - **Root Directory:** `app`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
6. Click "Deploy"
7. ✅ Your site is live at: `https://your-project.vercel.app`

---

### **Deploy to Netlify (Alternative)**

1. Go to [netlify.com](https://netlify.com)
2. Connect your GitHub repository
3. Set build settings:
   - **Base directory:** `app`
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Click "Deploy"
5. Get your live URL

---

### **Custom Domain (Optional)**

1. Buy a domain from **Namecheap**, **GoDaddy**, or **Cloudflare**
2. Point domain to your deployment platform:
   - **GitHub Pages:** Add CNAME record
   - **Vercel/Netlify:** Follow platform-specific instructions
3. Enable HTTPS (auto-configured on all platforms)

---

## 📧 How Recruiters Can Use This

### **Share Your Live Portfolio**
- **Live Demo:** `https://Pavan755.github.io/Portfolio_pk/` (GitHub Pages)
- **GitHub Repository:** [Portfolio_pk](https://github.com/Pavan755/Portfolio_pk)
- **Alternative Hosting:** Deploy on [Vercel](https://vercel.com) or [Netlify](https://netlify.com) for custom domains

### **Getting the Code**

Recruiters can:
1. **Clone the repository:**
   ```bash
   git clone https://github.com/Pavan755/Portfolio_pk.git
   cd Portfolio_pk/app
   npm install
   npm run dev
   ```
   - Opens at `http://localhost:5173/`
   - Perfect for testing locally before deploying

2. **Or download as ZIP** from the GitHub repository and follow the same steps above

3. **Review the code:**
   - Check `src/App.tsx` for main component
   - Explore `src/components/` for all UI implementations
   - See `tailwind.config.js` for styling customizations

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

- **GitHub:** [Pavan755](https://github.com/Pavan755)
- **Repository:** [Portfolio_pk](https://github.com/Pavan755/Portfolio_pk)
- **Live Demo:** [your-deployed-url.vercel.app]

---

## 🤝 Contributing

Feel free to fork this repository, make improvements, and submit pull requests!

---

**Made with ❤️ by Pavan**
