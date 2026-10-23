# Onik Das — Full Stack Web Developer Portfolio

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Vercel-black?style=for-the-badge&logo=vercel)](https://developer-portfolio-delta-steel.vercel.app/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript_ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

A modern, high-performance developer portfolio built from the ground up using **strictly semantic HTML5, pure Tailwind CSS (via CDN), and modular ES6+ JavaScript**. Designed to meet professional engineering standards with zero custom CSS dependencies.

---

## 🚀 Live Demo

- **Production URL**: [https://developer-portfolio-delta-steel.vercel.app/](https://developer-portfolio-delta-steel.vercel.app/)
- **GitHub Repository**: [https://github.com/OnikTechHub/Developer-Portfolio-Task1](https://github.com/OnikTechHub/Developer-Portfolio-Task1)

---

## 🌟 Key Features

- **Strict Semantic HTML5 Structure**: Accessible layout using `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, and `<footer>` elements.
- **Pure Tailwind CSS (Zero Custom CSS)**: Modern visual aesthetics (dark/light themes, subtle gradients, glassmorphism, responsive grid layouts) styled exclusively via Tailwind utility classes.
- **Dynamic Dark / Light Theme**: Instant mode toggle with automatic system preference detection and `localStorage` persistence.
- **Active Scroll Spy & Smooth Navigation**: Responsive navbar with real-time active link highlight and mobile drawer navigation.
- **Interactive Project Showcase**:
  - Filterable by categories (*All*, *Full Stack*, *AI Platforms*, *Web Apps*).
  - Production screenshots and direct external links to Live Demos and GitHub repositories.
  - Interactive project detail modal with architecture highlights, key features, and tech stacks.
- **Direct Resume Download**: Fast one-click download for `OnikDas_Resume.pdf`.
- **Contact Form Validation**: Interactive client-side validation with responsive feedback alert.

---

## 🛠️ Featured Projects Showcase

| Project | Description | Live Demo | Repository |
| :--- | :--- | :--- | :--- |
| **Prompt-FlowAI** | AI-powered content generation & prompt engineering platform with Google Gemini API & OAuth. | [Live Demo](https://prompt-flow-three-alpha.vercel.app/) | [GitHub](https://github.com/OnikTechHub/Prompt-Flow) |
| **Food Flow** | Multi-role food delivery ecosystem with real-time tracking, Stripe checkout, & automated invoices. | [Live Demo](https://fooddeliveryplatform.vercel.app/) | [GitHub](https://github.com/khalid66527/food_flow-client) |
| **RecipeHub** | Community culinary platform with secure authentication, cloud image uploads, & PDF recipe exports. | [Live Demo](https://recipe-hub-web-omega.vercel.app/) | [GitHub](https://github.com/OnikTechHub/RecipeHub-Client) |

---

## 📂 Project Architecture

```plaintext
Developer-Portfolio-Task1/
│
├── index.html                 # Main semantic HTML5 document
├── vercel.json                # Vercel deployment configuration & routing
├── README.md                  # Comprehensive documentation & setup guide
├── LICENSE                    # MIT open-source license
│
├── assets/                    # Static media assets & resume document
│   ├── avatar.png             # Developer profile portrait
│   ├── project-1.png          # Prompt-FlowAI platform screenshot
│   ├── project-2.png          # Food Flow ecosystem screenshot
│   ├── project-3.png          # RecipeHub platform screenshot
│   └── OnikDas_Resume (1).pdf # Downloadable resume PDF
│
├── css/
│   └── style.css              # Empty 0-byte file (100% Tailwind utility classes)
│
├── js/
│   └── main.js                # Vanilla ES6+ application logic (theme, modal, filters, nav)
│
└── .vscode/
    └── settings.json          # Workspace Live Server configuration
```

---

## 💻 Local Setup & Development

Because this project is built entirely with vanilla web standards, it requires no Node build steps or package installations.

### Method 1: VS Code Live Server (Recommended)
1. Clone the repository:
   ```bash
   git clone https://github.com/OnikTechHub/Developer-Portfolio-Task1.git
   cd Developer-Portfolio-Task1
   ```
2. Open the project in VS Code:
   ```bash
   code .
   ```
3. Right-click `index.html` and select **"Open with Live Server"** (runs on port configured in `.vscode/settings.json`, e.g., `http://127.0.0.1:5501`).

### Method 2: Python Local Server
```bash
python -m http.server 3000
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Method 3: Node `npx serve`
```bash
npx serve .
```

---

## 🚀 Deployment to Vercel

The repository is pre-configured with `vercel.json` for seamless static deployment on [Vercel](https://vercel.com):

1. **Via Vercel Web Dashboard**:
   - Push your changes to your GitHub repository.
   - Go to [Vercel Dashboard](https://vercel.com/dashboard) $\rightarrow$ **Add New Project**.
   - Import `Developer-Portfolio-Task1`.
   - Keep Framework Preset as **Other** (Root directory: `./`).
   - Click **Deploy**.

2. **Via Vercel CLI**:
   ```bash
   npm i -g vercel
   vercel
   ```

---

## 👨‍💻 Author

**Onik Das**  
*Full Stack Web Developer*  
- **GitHub**: [@OnikTechHub](https://github.com/OnikTechHub)  
- **LinkedIn**: [Onik Das](https://www.linkedin.com/in/onik-das/)  
- **Email**: [onikdas.dev@gmail.com](mailto:onikdas.dev@gmail.com)  
- **Location**: চট্টগ্রাম, বাংলাদেশ (Chattogram, Bangladesh)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).