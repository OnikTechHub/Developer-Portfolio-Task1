// Main application logic for Onik Das - Full Stack Web Developer Portfolio

document.addEventListener('DOMContentLoaded', () => {
  // Theme Toggle
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');

  function getInitialTheme() {
    const saved = localStorage.getItem('portfolio-theme');
    if (saved === 'dark' || saved === 'light') return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function setTheme(theme, animate = false) {
    const isDark = theme === 'dark';
    document.documentElement.classList.toggle('dark', isDark);
    document.documentElement.classList.toggle('light', !isDark);

    if (themeIcon) {
      themeIcon.className = isDark
        ? 'fa-solid fa-sun text-amber-400 text-sm'
        : 'fa-solid fa-moon text-slate-700 text-sm';
    }

    if (themeToggleBtn) {
      themeToggleBtn.setAttribute('title', isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode');
      themeToggleBtn.setAttribute('aria-label', isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode');
    }

    if (animate && themeIcon) {
      themeIcon.classList.add('rotate-180', 'transition-transform', 'duration-300');
      setTimeout(() => themeIcon.classList.remove('rotate-180', 'transition-transform', 'duration-300'), 300);
    }

    try {
      localStorage.setItem('portfolio-theme', theme);
    } catch (e) {
      // LocalStorage access restricted in certain iframe environments
    }
  }

  setTheme(getInitialTheme());

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const isDark = document.documentElement.classList.contains('dark');
      setTheme(isDark ? 'light' : 'dark', true);
    });
  }

  // Mobile Menu
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuBtn && mobileMenu) {
    const icon = mobileMenuBtn.querySelector('i');

    const toggleMenu = (open) => {
      const willOpen = open !== undefined ? open : mobileMenu.classList.contains('hidden');
      mobileMenu.classList.toggle('hidden', !willOpen);
      if (icon) {
        icon.className = willOpen ? 'fa-solid fa-xmark text-lg' : 'fa-solid fa-bars text-lg';
      }
      mobileMenuBtn.setAttribute('aria-expanded', String(willOpen));
    };

    mobileMenuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMenu();
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => toggleMenu(false));
    });

    document.addEventListener('click', (e) => {
      if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        toggleMenu(false);
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') toggleMenu(false);
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth >= 768 && !mobileMenu.classList.contains('hidden')) {
        toggleMenu(false);
      }
    });
  }

  // Active Navigation Link Scroll Spy
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function updateActiveLink() {
    const scrollPos = window.pageYOffset + 120;
    const atBottom = window.innerHeight + window.pageYOffset >= document.documentElement.scrollHeight - 50;

    if (atBottom) {
      navLinks.forEach(link => {
        const isContact = link.getAttribute('href') === '#contact';
        link.classList.toggle('text-indigo-600', isContact);
        link.classList.toggle('dark:text-indigo-400', isContact);
        link.classList.toggle('font-semibold', isContact);
      });
      return;
    }

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          const match = link.getAttribute('href') === `#${id}`;
          link.classList.toggle('text-indigo-600', match);
          link.classList.toggle('dark:text-indigo-400', match);
          link.classList.toggle('font-semibold', match);
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveLink, { passive: true });
  updateActiveLink();

  // Project Category Filters
  const filterBtns = document.querySelectorAll('.project-filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const filter = btn.getAttribute('data-filter');

      filterBtns.forEach(b => {
        b.className = 'project-filter-btn px-4 py-2 rounded-xl text-xs sm:text-sm font-medium bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-indigo-500 transition-colors cursor-pointer';
      });
      btn.className = 'project-filter-btn px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-indigo-600 text-white shadow-sm transition-colors cursor-pointer';

      projectCards.forEach(card => {
        const categories = (card.getAttribute('data-category') || '').split(' ');
        const matches = filter === 'all' || categories.includes(filter);
        card.classList.toggle('hidden', !matches);
      });
    });
  });

  // Project Details Dataset & Modal
  const projectsData = {
    '1': {
      title: 'Prompt-FlowAI',
      category: 'AI Content Generation Platform',
      image: 'assets/project-1.png',
      badge: 'Full Stack / AI Platform',
      overview: "Prompt-FlowAI is a modern AI-powered content generation platform that helps users create high-quality content, enhance prompts, and streamline their AI workflow. Features secure authentication with Google OAuth and JWT, AI-powered content generation using Google's Gemini API, reusable prompt templates, content history management, and an intuitive dashboard.",
      highlights: [
        "AI-powered content generation using Google's Gemini API",
        'Secure multi-method authentication with Google OAuth & JWT',
        'Reusable prompt template library with real-time prompt enhancement',
        'Persistent content history with full search and export capabilities',
        'Responsive analytics dashboard with usage metrics and visualizations'
      ],
      techStack: [
        'Next.js', 'Node.js', 'Express.js', 'JavaScript', 'MongoDB',
        'Google Gemini API', 'Google OAuth', 'JWT', 'TanStack Query',
        'Tailwind CSS', 'DaisyUI', 'Recharts', 'React Hot Toast',
        'Framer Motion', 'Vercel'
      ],
      liveDemo: 'https://prompt-flow-three-alpha.vercel.app/',
      github: 'https://github.com/OnikTechHub/Prompt-Flow'
    },
    '2': {
      title: 'Food Flow',
      category: 'Multi-Role Food Delivery Ecosystem',
      image: 'assets/project-2.png',
      badge: 'Full Stack / Web Application',
      overview: 'Food Flow is an advanced, AI-powered full-stack food delivery ecosystem designed to facilitate seamless interactions between Customers, Restaurants, Delivery Riders, and Platform Admins. Powered by Next.js, real-time Socket.io communication, and secure Stripe payments, featuring multi-role dashboards, real-time GPS order tracking via Leaflet maps, automated PDF invoice generation, and AI tools.',
      highlights: [
        'Multi-role role-based dashboards (Customer, Restaurant, Rider, Admin)',
        'Real-time live Socket.io communication and order status synchronization',
        'Live GPS order route tracking with interactive Leaflet maps',
        'Secure online payments and checkout powered by Stripe API',
        'Automated PDF invoice generation and order receipt downloads'
      ],
      techStack: [
        'Next.js', 'React', 'TypeScript', 'Node.js', 'Express.js',
        'MongoDB', 'Mongoose', 'Google Gemini AI API', 'Socket.io',
        'Stripe', 'Better Auth', 'React Hook Form', 'Zod',
        'jsPDF', 'JWT', 'Tailwind CSS', 'Hero UI', 'Framer Motion'
      ],
      liveDemo: 'https://fooddeliveryplatform.vercel.app/',
      github: 'https://github.com/khalid66527/food_flow-client'
    },
    '3': {
      title: 'RecipeHub',
      category: 'Culinary Platform & Recipe Generator',
      image: 'assets/project-3.png',
      badge: 'Full Stack / AI Culinary App',
      overview: 'RecipeHub is an advanced culinary ecosystem designed to bridge the gap between food enthusiasts, home cooks, and professional chefs with secure user authentication, subscription monetization, and an interactive admin dashboard. Features an intelligent Smart Recipe Generator and Smart Hybrid AI Assistant.',
      highlights: [
        'Intelligent Smart Recipe Generator with ingredient-based matching',
        'Smart Hybrid AI Assistant powered by Google Gemini AI',
        'Tiered subscription monetization with secure Stripe payment flows',
        'Automated email notifications via Resend API and dynamic PDF recipe exports',
        'Comprehensive chef management and administrative analytics dashboard'
      ],
      techStack: [
        'Next.js 15', 'React 19', 'JavaScript', 'Node.js', 'Express.js',
        'MongoDB', 'Mongoose', 'Google Gemini AI API', 'Tailwind CSS',
        'DaisyUI', 'HeroUI', 'Framer Motion', 'Better Auth',
        'Stripe Payments', 'Resend API', 'TanStack Query', 'JWT',
        'html2pdf.js', 'React Hot Toast'
      ],
      liveDemo: 'https://recipe-hub-web-omega.vercel.app/',
      github: 'https://github.com/OnikTechHub/RecipeHub-Client'
    }
  };

  const projectModal = document.getElementById('project-modal');
  const modalCloseBtn = document.getElementById('modal-close');
  const modalContent = document.getElementById('modal-content');

  function openProjectModal(id) {
    const project = projectsData[id];
    if (!project || !projectModal || !modalContent) return;

    modalContent.innerHTML = `
      <div class="space-y-5 sm:space-y-6">
        <div class="relative aspect-video rounded-xl overflow-hidden bg-slate-900 border border-slate-200 dark:border-slate-800">
          <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover">
          <span class="absolute bottom-2.5 left-2.5 sm:bottom-3 sm:left-3 px-2.5 py-1 sm:px-3 sm:py-1 rounded-md text-[10px] sm:text-xs font-mono font-semibold uppercase bg-indigo-600 text-white shadow">
            ${project.badge}
          </span>
        </div>

        <div>
          <h2 id="modal-title" class="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white break-words">
            ${project.title}
          </h2>
          <p class="text-xs font-mono font-medium text-indigo-600 dark:text-indigo-400 mt-1">
            ${project.category}
          </p>
          <p class="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            ${project.overview}
          </p>
        </div>

        <div>
          <h3 class="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200 mb-2">
            Key Architecture Highlights
          </h3>
          <ul class="space-y-2">
            ${project.highlights.map(h => `
              <li class="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-300 leading-normal">
                <span class="w-4 h-4 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0 mt-0.5 text-[10px]">
                  <i class="fa-solid fa-check"></i>
                </span>
                <span class="break-words">${h}</span>
              </li>
            `).join('')}
          </ul>
        </div>

        <div>
          <h3 class="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200 mb-2">
            Technologies Used
          </h3>
          <div class="flex flex-wrap gap-1.5 sm:gap-2">
            ${project.techStack.map(tech => `
              <span class="px-2.5 py-1 rounded-lg text-[11px] sm:text-xs font-mono bg-slate-100 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 border border-slate-200 dark:border-slate-700">
                ${tech}
              </span>
            `).join('')}
          </div>
        </div>

        <div class="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-2.5 sm:gap-3">
          <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="inline-flex justify-center items-center gap-2 px-4 py-3 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
            <i class="fa-brands fa-github text-sm"></i>
            <span>GitHub Repository</span>
          </a>
          <a href="${project.liveDemo}" target="_blank" rel="noopener noreferrer" class="inline-flex justify-center items-center gap-2 px-5 py-3 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors shadow">
            <span>Launch Live Demo</span>
            <i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
          </a>
        </div>
      </div>
    `;

    projectModal.classList.remove('hidden');
    projectModal.classList.add('flex');
    document.body.classList.add('overflow-hidden');
  }

  function closeProjectModal() {
    if (!projectModal) return;
    projectModal.classList.add('hidden');
    projectModal.classList.remove('flex');
    document.body.classList.remove('overflow-hidden');
  }

  document.querySelectorAll('.modal-trigger-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openProjectModal(btn.getAttribute('data-project-id'));
    });
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeProjectModal);

  if (projectModal) {
    projectModal.addEventListener('click', (e) => {
      if (e.target === projectModal) closeProjectModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && projectModal && !projectModal.classList.contains('hidden')) {
      closeProjectModal();
    }
  });

  // Contact Form Feedback
  function showToast(title, message) {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      container.className = 'fixed top-24 right-4 sm:right-8 z-50 flex flex-col gap-3 max-w-sm w-full pointer-events-none';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'pointer-events-auto flex items-start justify-between gap-3 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-emerald-500/40 shadow-xl transition-all duration-300';
    toast.innerHTML = `
      <div class="flex items-start gap-3">
        <span class="w-8 h-8 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0 mt-0.5 text-sm">
          <i class="fa-solid fa-check"></i>
        </span>
        <div>
          <h4 class="text-sm font-bold text-slate-900 dark:text-white">${title}</h4>
          <p class="text-xs text-slate-600 dark:text-slate-300 mt-0.5 leading-relaxed">${message}</p>
        </div>
      </div>
      <button type="button" aria-label="Dismiss Notification" class="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors p-1">
        <i class="fa-solid fa-xmark text-sm"></i>
      </button>
    `;

    container.appendChild(toast);

    const dismiss = () => {
      toast.classList.add('opacity-0', '-translate-y-2');
      setTimeout(() => toast.remove(), 250);
    };

    toast.querySelector('button').addEventListener('click', dismiss);
    setTimeout(dismiss, 5000);
  }

  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

  if (contactForm && formStatus) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const subject = document.getElementById('subject').value.trim();
      const message = document.getElementById('message').value.trim();
      const submitBtn = contactForm.querySelector('button[type="submit"]');

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!name || !email || !subject || !message) {
        formStatus.innerHTML = `
          <div class="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-rose-50 text-rose-600 dark:bg-rose-950/40 dark:text-rose-400 border border-rose-200 dark:border-rose-900 text-xs font-medium">
            <i class="fa-solid fa-circle-exclamation"></i>
            <span>Please fill out all required fields.</span>
          </div>
        `;
        return;
      }

      if (!emailRegex.test(email)) {
        formStatus.innerHTML = `
          <div class="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-rose-50 text-rose-600 dark:bg-rose-950/40 dark:text-rose-400 border border-rose-200 dark:border-rose-900 text-xs font-medium">
            <i class="fa-solid fa-circle-exclamation"></i>
            <span>Please provide a valid email address.</span>
          </div>
        `;
        return;
      }

      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin text-sm"></i> <span>Sending...</span>';
      formStatus.innerHTML = '';

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;

        formStatus.innerHTML = `
          <div class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 text-xs font-medium">
            <i class="fa-solid fa-circle-check text-emerald-500"></i>
            <span>Thank you, <strong>${name}</strong>! Your message has been sent to Onik Das.</span>
          </div>
        `;

        showToast('Message Sent', `Thank you, ${name}! Your inquiry has been received.`);
        contactForm.reset();

        setTimeout(() => {
          formStatus.innerHTML = '';
        }, 6000);
      }, 500);
    });
  }

  // Dynamic Year
  const yearEl = document.getElementById('current-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
