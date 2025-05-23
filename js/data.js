// Data for features, pricing, and testimonials
const featuresData = [
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>',
    title: "Smart Cleanup",
    description:
      "AI-powered system analysis and cleaning with predictive maintenance alerts involving artificial intelligence to monitor and optimize the performance of systems or equipment.",
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
    title: "Privacy Guard",
    description:
      "Advanced protection against tracking and data collection using tools and strategies to safeguard personal information and maintain privacy online.",
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
    title: "Secure Deletion",
    description:
      "Military-grade file shredding ensures complete data security by permanently deleting files using advanced algorithms that overwrite data multiple times, making it irretrievable. This process complies with strict security standards, protecting sensitive information from unauthorized recovery.",
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>',
    title: "Performance Analytics",
    description:
      "Real-time system monitoring tracks system performance, resource usage, and potential issues continuously. AI analyzes this data instantly to provide optimization suggestions, such as adjusting configurations or resolving inefficiencies, ensuring peak performance and reliability.",
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>',
    title: "Cloud Backup",
    description:
      "Automatic backup ensuring important files are regularly copied to secure cloud storage without manual intervention. This safeguards data against loss or damage, providing accessibility and recovery from any location.",
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
    title: "Custom Rules",
    description:
      "Personalized cleanup and optimizing rules allowing users to set custom criteria for managing files, applications, and system resources. This ensures targeted performance improvements and efficient use of storage tailored to individual needs.",
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
    buttonLink: "assets/SysNetCleaner_9April.zip",
  },
  {
    name: "Professional",
    price: "$29.99",
    features: [
      "Advanced system cleanup",
      "Automatic optimization",
      "Priority support",
      "3 device licenses",
      "Real-time monitoring",
      "Secure file deletion",
    ],
    buttonText: "Pay Now",
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
  //     buttonText: 'Pay Now',
  //     highlighted: false
  // }
];

const testimonialsData = [
  {
    name: "Barry Allen",
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
