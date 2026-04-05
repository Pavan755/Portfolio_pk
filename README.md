# 🚀 Kimi Agent Portfolio Site

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

### **Deploy to Vercel (Recommended)**

Vercel provides free hosting with automatic deployments.

1. **Push to GitHub** (if not done already):
   ```bash
   git add .
   git commit -m "Deploy portfolio"
   git push origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub
   - Click "New Project"
   - Select your `Portfolio_pk` repository
   - Vercel auto-detects Vite settings
   - Click "Deploy"
   - ✅ Your site is live! (URL: `your-project.vercel.app`)

### **Deploy to Netlify**

Similar process:
1. Go to [netlify.com](https://netlify.com)
2. Connect your GitHub repository
3. Click "Deploy" (auto-configures for Vite)
4. Get your live URL

### **Custom Domain (Optional)**

1. Buy a domain from **Namecheap**, **GoDaddy**, or **Cloudflare**
2. Add DNS records (instructions provided by Vercel/Netlify)
3. Connect domain in deployment platform settings

---

## 📧 How Recruiters Can Use This

### **Share Your Live Portfolio**
- **Deployed URL:** Share the live link (e.g., `https://your-project.vercel.app`)
- **GitHub Repository:** [Portfolio_pk](https://github.com/Pavan755/Portfolio_pk)
- **Custom Domain:** Add your personal domain for a professional touch

### **Getting the Code**

Recruiters can:
1. **Clone the repository:**
   ```bash
   git clone https://github.com/Pavan755/Portfolio_pk.git
   cd Portfolio_pk/app
   npm install
   npm run dev
   ```

2. **Or download as ZIP** and follow the installation steps above

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
