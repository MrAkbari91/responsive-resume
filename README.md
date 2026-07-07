# 🌟 Dhruv Akbari — Premium Interactive Web Resume

<div align="center">
  
  [![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
  [![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://www.netlify.com/)

  A modern, highly professional, responsive web resume website optimized for search engines and high conversion. Live on Netlify.
  
  [Live Demo](https://dhruv-akbari-resume.netlify.app) • [Gitfolio Portfolio](https://dhruvakbarigitfolio.netlify.app)
  
</div>

---

## ✨ Features & Highlights

- **🌗 Flawless Dark/Light Mode**: Transition animations with a custom, lightweight, blocking `<script>` injected into Layout Head to prevent theme flashing (FOUC).
- **🛡️ Source Code Security**: Embedded client-side interceptors that block context menu right-clicks, F12 developer console, Ctrl+Shift+I/J/C, Ctrl+U, and Ctrl+S to prevent unauthorized source code inspection.
- **📄 WYSIWYG PDF / Printing Export**: Disabled standard flat styling overrides to allow the resume's multi-column layout, color gradients, shadows, and borders to print/export exactly as seen on screen.
- **📈 Advanced SEO & Schema**: Built-in dynamic sitemaps (`sitemap.xml`), robots crawls control (`robots.txt`), Google Tag Manager, OpenGraph visual card previews, and structured Schema.org JSON-LD profiles.
- **💼 Interactive Certifications**: Collapsible verification cards displaying verified Hackerrank certifications in integrated iframes with an overlay toggle.
- **📸 Responsive Profile Avatar**: GitHub profile monogram wrapper with squircle cropping, online pulse status indicators, and automatic mobile centering.

---

## 🛠️ Folder & Component Architecture

This repository adopts a strict **DRY (Don't Repeat Yourself)** structure, splitting presentation layouts, common UI controllers, and profile content:

```text
e:/Dhruv/code/html/responsive-resume
├── public/                       # Static Assets & Icons
└── src/
    ├── app/                      # Application Layer (App Router)
    │   ├── layout.tsx            # Global Head, Analytics, Themes & JSON-LD
    │   ├── page.tsx              # Main Entry Grid Layout & Security Listeners
    │   ├── not-found.tsx         # Interactive Terminal-Themed 404 Page
    │   ├── sitemap.ts            # Dynamic sitemap.xml generator
    │   └── robots.ts             # Dynamic robots.txt configuration
    │
    ├── components/
    │   ├── ui/                   # Shared Reusable Visual Widgets
    │   │   ├── SkillBadge.tsx    # Technical pill tags with FontAwesome icons
    │   │   └── CalendarBadge.tsx # Standardized calendar timeline chip
    │   │
    │   └── sections/             # Modular Resume Layout Blocks
    │       ├── Hero.tsx          # Dynamic Profile Head Banner
    │       ├── Summary.tsx       # About Me Section
    │       ├── Experience.tsx    # Job History Timeline Grid
    │       ├── Certifications.tsx# COLLAPSIBLE Hackerrank verification
    │       ├── Contact.tsx       # Sidebar contact card links
    │       └── ...               # Skills, Education, Languages & Footer
    │
    └── data/
        └── resumeData.ts         # Single Source of Truth for Resume Data
```

---

## ⚙️ How to Update Content (100% DRY)

You do **not** need to touch any JSX/HTML or CSS files to update your resume content. All records, details, contact addresses, experience items, and categories are stored in a single config:

👉 **[src/data/resumeData.ts](file:///e:/Dhruv/code/html/responsive-resume/src/data/resumeData.ts)**

To update, simply modify the values in the JSON object:
```typescript
export const resumeData = {
  personalInfo: {
    name: "Dhruv Akbari",
    title: "Senior Full Stack Developer",
    phone: "+91 84606 21361",
    // Add info here...
  },
  // All experiences, skills, education categories follow
};
```

---

## 🖥️ Reusing Common UI Widgets

### 1. SkillBadge
Renders a consistent pill with standard rounding, transitions, borders, and custom hover states:
```tsx
import SkillBadge from "@/components/ui/SkillBadge";

<SkillBadge 
  name="Next.js" 
  iconClass="fab fa-react" 
  hoverClass="hover:bg-black dark:hover:bg-slate-800" 
/>
```

### 2. CalendarBadge
Renders employment/education dates with standard formatting and calendar icons supporting indigo, sky, rose, amber, and emerald themes:
```tsx
import CalendarBadge from "@/components/ui/CalendarBadge";

<CalendarBadge 
  duration="April 2026 — Present" 
  accentClass="indigo" 
/>
```

---

## 🚀 Commands & Development

Ensure [Node.js](https://nodejs.org/) or [Bun](https://bun.sh/) is installed.

### Install Dependencies
```bash
npm install
```

### Run Dev Server
```bash
npm run dev
# or
bun run dev
```

### Compile Production Build
```bash
npm run build
```

---

## 🌍 Deployment

The site is built to compile statically and is fully optimized for single-click deployment on **Netlify**, **Vercel**, or **GitHub Pages**:

- **Build Command**: `next build`
- **Publish Directory**: `.next` or `out` (for export configurations)
