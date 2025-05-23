// Features Data
// const features = [
//   {
//     icon: "cpu",
//     title: "Real-time Monitoring",
//     description:
//       "Advanced system monitoring with instant performance insights and alerts",
//   },
//   {
//     icon: "hard-drive",
//     title: "Disk Optimization",
//     description:
//       "Smart disk cleanup and defragmentation for maximum storage efficiency",
//   },
//   {
//     icon: "zap",
//     title: "Memory Management",
//     description: "Intelligent RAM optimization for smoother multitasking",
//   },
//   {
//     icon: "settings",
//     title: "Registry Cleaner",
//     description:
//       "Safe and effective registry cleaning to prevent system errors",
//   },
//   {
//     icon: "clock",
//     title: "Startup Optimizer",
//     description: "Reduce boot time by managing startup programs",
//   },
//   {
//     icon: "shield",
//     title: "System Protection",
//     description: "Proactive system protection against performance degradation",
//   },
// ];

// System Requirements
const systemRequirements = [
  "Windows 10/11 (64-bit)",
  "Minimum 4GB RAM",
  "500MB free disk space",
  "Intel Core i3 or equivalent",
  "Internet connection for updates",
];

// Performance Metrics
const performanceMetrics = [
  "Up to 200% faster boot time",
  "Up to 300% improved system response",
  "Up to 50% reduced memory usage",
  "Real-time monitoring with <1% CPU usage",
  "Instant scan results within 30 seconds",
];

// FAQ Data
const faqs = [
  {
    question: "How does SysNet Cleaner improve system performance?",
    answer:
      "SysNet Cleaner uses advanced algorithms to analyze and optimize various aspects of your system, including memory usage, disk space, startup programs, and registry entries. It identifies and resolves performance bottlenecks in real-time.",
  },
  {
    question: "Is it safe to use SysNet Cleaner?",
    answer:
      "Yes, absolutely! SysNet Cleaner includes multiple safety features, including backup creation before making any changes and a restore point system. All optimizations are thoroughly tested and reversible.",
  },
  {
    question: "How often should I run the optimization?",
    answer:
      "We recommend running a full system optimization once a week. However, our real-time monitoring runs continuously to maintain optimal performance at all times.",
  },
  {
    question: "Will it slow down my computer while running?",
    answer:
      "No, SysNet Cleaner is designed to be lightweight and efficient, using less than 1% CPU resources during background monitoring and optimization processes.",
  },
];

// Render Features
// function renderFeatures() {
//   const featuresGrid = document.getElementById("features-grid");

//   features.forEach((feature) => {
//     const featureCard = document.createElement("div");
//     featureCard.className = "feature-card";

//     featureCard.innerHTML = `
//             <div class="feature-icon">
//                 <i data-feather="${feature.icon}" class="w-8 h-8 text-green-500"></i>
//             </div>
//             <h3 class="text-xl font-semibold mb-4">${feature.title}</h3>
//             <p class="text-gray-600">${feature.description}</p>
//         `;

//     featuresGrid.appendChild(featureCard);
//   });
// }

// Render System Requirements
function renderSystemRequirements() {
  const requirementsList = document.getElementById("system-requirements");

  systemRequirements.forEach((req) => {
    const li = document.createElement("li");
    li.className = "spec-item";
    li.innerHTML = `
            <i data-feather="check-circle" class="w-5 h-5 text-green-500 mr-3"></i>
            <span>${req}</span>
        `;
    requirementsList.appendChild(li);
  });
}

// Render Performance Metrics
function renderPerformanceMetrics() {
  const metricsList = document.getElementById("performance-metrics");

  performanceMetrics.forEach((metric) => {
    const li = document.createElement("li");
    li.className = "spec-item";
    li.innerHTML = `
            <i data-feather="trending-up" class="w-5 h-5 text-green-500 mr-3"></i>
            <span>${metric}</span>
        `;
    metricsList.appendChild(li);
  });
}

// Render FAQs
function renderFAQs() {
  const faqContainer = document.getElementById("faq-container");

  faqs.forEach((faq, index) => {
    const faqItem = document.createElement("div");
    faqItem.className = "faq-item";

    faqItem.innerHTML = `
            <div class="faq-question">
                <h3 class="font-semibold">${faq.question}</h3>
                <i data-feather="chevron-down" class="w-5 h-5 faq-toggle"></i>
            </div>
            <div class="faq-answer">
                <p class="text-gray-600">${faq.answer}</p>
            </div>
        `;

    faqContainer.appendChild(faqItem);

    // Add click event for accordion
    const question = faqItem.querySelector(".faq-question");
    question.addEventListener("click", () => {
      const isActive = faqItem.classList.contains("active");

      // Close all FAQs
      document.querySelectorAll(".faq-item").forEach((item) => {
        item.classList.remove("active");
      });

      // Open clicked FAQ if it wasn't active
      if (!isActive) {
        faqItem.classList.add("active");
      }
    });
  });
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  //   renderFeatures();
  renderSystemRequirements();
  renderPerformanceMetrics();
  renderFAQs();
  feather.replace();

  // Add scroll animations
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate__fadeInUp");
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".feature-card").forEach((card) => {
    observer.observe(card);
  });
});
