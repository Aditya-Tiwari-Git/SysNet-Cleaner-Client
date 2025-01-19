// Data for features, pricing, and testimonials
const featuresData = [
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>',
    title: "Smart Cleanup",
    description:
      "AI-powered system analysis and cleaning with predictive maintenance alerts.",
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
    title: "Privacy Guard",
    description: "Advanced protection against tracking and data collection.",
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
    title: "Secure Deletion",
    description: "Military-grade file shredding for complete data security.",
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>',
    title: "Performance Analytics",
    description: "Real-time system monitoring and optimization suggestions.",
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>',
    title: "Cloud Backup",
    description: "Automatic backup of important files to secure cloud storage.",
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
    title: "Custom Rules",
    description: "Create personalized cleanup and optimization rules.",
  },
];

const pricingData = [
  {
    name: "Free",
    price: "$0",
    features: [
      "Basic system cleanup",
      "Manual optimization",
      "Community support",
      "1 device license",
    ],
    buttonText: "Download Free",
    highlighted: false,
    buttonLink: "#contact",
  },
  {
    name: "Pro",
    price: "$29.99",
    features: [
      "Advanced system cleanup",
      "Automatic optimization",
      "Priority support",
      "3 device licenses",
      "Real-time monitoring",
      "Secure file deletion",
    ],
    buttonText: "Contact Sales",
    highlighted: true,
    buttonLink: "#contact",
  },
  // {
  //     name: 'Enterprise',
  //     price: 'Custom',
  //     features: [
  //         'Custom solutions',
  //         'Dedicated support',
  //         'Unlimited devices',
  //         'API access',
  //         'Custom integrations',
  //         'Training sessions'
  //     ],
  //     buttonText: 'Contact Sales',
  //     highlighted: false
  // }
];

const testimonialsData = [
  {
    name: "John Doe",
    role: "IT Professional",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100&q=80",
    text: "OptiClean has transformed how I maintain my company's systems. The automation features save hours of manual work.",
  },
  {
    name: "Sarah Smith",
    role: "Software Developer",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80",
    text: "The performance improvements are remarkable. My development environment runs smoother than ever.",
  },
  {
    name: "Mike Johnson",
    role: "System Administrator",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100&q=80",
    text: "Best system optimization tool I've used in my 15 years of experience. The interface is intuitive and the results are impressive.",
  },
];
