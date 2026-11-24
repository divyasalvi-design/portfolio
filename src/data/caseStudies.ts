export type CaseStudy = {
  path: string;
  cat: string;
  title: string;
  lead: string;
  facts: [string, string][];
  problem: string;
  approach: string[];
  features: string[];
  decisions: string[];
  outcome: string;
  tools: string;
  gallery: [string, string, boolean?][];
};

export const CASE_STUDIES: Record<string, CaseStudy> = {
  evently: {
    path: "Selected Works / Evently",
    cat: "Event planning app · Personal project",
    title: "Evently",
    lead: "An all-in-one mobile app to plan, manage and celebrate events: finding trusted vendors, comparing prices, tracking budgets and chatting with vendors in one place.",
    facts: [
      ["Type", "Mobile app"],
      ["Project", "Personal"],
      ["Scope", "Research → UI"],
      ["Tagline", "Plan. Manage. Celebrate."],
    ],
    problem:
      "Planning an event means juggling vendors, quotes and budgets across apps, spreadsheets and phone calls. The research persona, a busy marketing executive who organises 3–5 events a year, named the core frustrations: finding reliable vendors takes too long, prices and reviews are hard to compare, hidden charges push budgets over, and there is no single place to manage everything.",
    approach: [
      "Built a user persona covering goals, frustrations, motivations and tech comfort.",
      "Mapped what the persona says, thinks, feels and does in an empathy map.",
      "Compared Evently's planned features against four existing platforms (WedMeGood, WeddingWire, BookEventz, VenueLook) to find the gaps.",
      "Ran a SWOT analysis to define where the product could stand out.",
      "Defined a colour system with primary, secondary, neutral, supporting and gradient colours before designing the screens.",
    ],
    features: [
      "Onboarding that explains the core idea in three steps",
      "Event categories: weddings, birthdays, concerts, corporates",
      "Vendor comparison filtered by city, event type and guest count",
      "Price-per-plate, ratings and trust badges on every vendor card",
      "In-app chat with vendors",
      "AI-assisted event planning",
    ],
    decisions: [
      'A soft rose palette (#F2979C) with a deep raspberry (#B01858) for active states: warm and celebratory without hurting legibility.',
      "Warm brown text (#3A1F1F) instead of pure black, to keep the tone soft.",
      'Short badges like "Top Rated" and "Best Value" so users can judge vendors at a glance, a direct answer to the "hard to compare" pain point.',
      "Reviews, ratings and verified vendors put up front to build trust, the persona's first goal.",
    ],
    outcome:
      "A research-backed concept from persona to high-fidelity screens: onboarding, login, home, vendor comparison and vendor chat, plus a documented colour system.",
    tools: "Figma",
    gallery: [
      ["ev-research.webp", "Persona · Empathy map · Competitor comparison · SWOT · Colour system", true],
      ["ev-onb1.webp", "Onboarding — Plan"],
      ["ev-onb2.webp", "Onboarding — Manage"],
      ["ev-splash.webp", "Splash"],
      ["ev-login.webp", "Login"],
      ["ev-home.webp", "Home"],
      ["ev-vendors.webp", "Vendor comparison"],
      ["ev-chat.webp", "Vendor chat"],
    ],
  },
  linguanest: {
    path: "Selected Works / LinguaNest",
    cat: "Language-learning app · Redesign",
    title: "LinguaNest",
    lead: "A redesign of an existing language-learning app that helps people learn and practise new languages. The redesign covered 110 screens.",
    facts: [
      ["Type", "Mobile app"],
      ["Screens", "110"],
      ["Scope", "Full redesign"],
      ["Tagline", "Speak Beyond Borders"],
    ],
    problem:
      "The existing app had to become easier to navigate and more engaging, so learners keep coming back, without losing the brand people already knew.",
    approach: [
      "Kept the existing colour palette to preserve brand recognition.",
      "Simplified layouts and gave every screen a clearer visual hierarchy.",
      "Refined the brand visuals: an HD mascot illustration, visuals without embedded text, and a light-theme logo.",
      "Applied the system consistently across all 110 screens.",
    ],
    features: [
      "Splash and login with Google and Apple sign-in",
      "Multi-select onboarding survey",
      "Full-screen video lessons",
      "Daily streak tracker with celebration states",
    ],
    decisions: [
      "A friendly bird mascot whose pose fits each screen (holding a key at login, celebrating a finished series), so the app feels encouraging.",
      "Selected answers in the survey get a tint and a check, so state is clear at a glance.",
      "A purple-to-violet gradient reserved for primary actions, so the next step is always obvious.",
      "The streak screen marks completed days in a warm orange that stands apart from the purple brand, rewarding consistency.",
    ],
    outcome:
      "110 redesigned screens with a simpler, more consistent and more engaging learning experience.",
    tools: "Figma",
    gallery: [
      ["ln-splash.webp", "Splash"],
      ["ln-login.webp", "Login"],
      ["ln-survey.webp", "Onboarding survey"],
      ["ln-video.webp", "Video lesson"],
      ["ln-streak.webp", "Streak complete"],
    ],
  },
  pats: {
    path: "Selected Works / PATS",
    cat: "Pet-food e-commerce · Website",
    title: "PATS",
    lead: "A pet-food e-commerce website with a simple, engaging shopping experience and a nature-inspired look.",
    facts: [
      ["Type", "Website"],
      ["Project", "Personal"],
      ["Focus", "E-commerce UX"],
      ["Theme", "Nature-inspired"],
    ],
    problem:
      "Pet parents want to buy healthy food quickly and feel confident about what they're feeding their dog. The site had to make products easy to find and earn trust fast.",
    approach: [
      'A nature-inspired visual theme (deep greens, natural textures, fresh-ingredient photography) to signal "healthy and natural".',
      "Simple top navigation: Home, Treats, Accessories, About, Blog.",
      "A homepage that moves from emotion (hero) to browsing (categories, best sellers) to reassurance (how it works, ingredients, reviews).",
    ],
    features: [
      "Trust strip under the hero: natural ingredients, vet approved, free delivery, no preservatives",
      "Shop by category: puppy food, adult food, treats, accessories",
      "Best-selling products with ratings, prices and add-to-cart",
      '"How it works" in four steps',
      "Ingredient spotlight, customer reviews, blog and newsletter sign-up",
    ],
    decisions: [
      "Trust signals placed directly below the hero, where hesitant shoppers look first.",
      "Rounded cards and paw-print details give the brand warmth without clutter.",
      "One green used for every action, so buttons are consistent and easy to spot.",
    ],
    outcome:
      "A complete e-commerce landing page that takes a visitor from first impression to purchase.",
    tools: "Figma",
    gallery: [["pats.webp", "Full landing page", true]],
  },
  tripmate: {
    path: "Selected Works / TripMate",
    cat: "Travel booking app · Practical task",
    title: "TripMate",
    lead: "A timed practical task: design a modern, user-friendly travel booking app where people search flights, hotels and activities, view details, book, and manage their plans.",
    facts: [
      ["Type", "Mobile app"],
      ["Time limit", "3 hours"],
      ["Screens", "5"],
      ["Format", "Practical task"],
    ],
    problem:
      "The brief asked for a clean layout, a smooth user flow and a great experience across five core screens, all within three hours.",
    approach: [
      "Prioritised the main booking journey: sign in → inspiration → discovery → destination detail → flight results.",
      "Used a single accent colour and one card system to stay consistent under time pressure.",
    ],
    features: [
      "Login with Google and Apple",
      '"Travel by season" inspiration and deal banners',
      "Discover by category: jungle, beach, mountain, water",
      "Destination detail with distance, weather, rating and total price",
      "Flight results with sort, airline filter and modify search",
    ],
    decisions: [
      "Season-based browsing, so people can start from when they want to travel rather than a fixed destination.",
      "Key facts (distance, temperature, rating) shown as three equal tiles that can be scanned at a glance.",
      "A persistent total price and a next-step button on the detail screen keep booking one tap away.",
    ],
    outcome:
      "Five high-fidelity screens completed within the three-hour limit, covering the full core booking flow.",
    tools: "Figma",
    gallery: [["tripmate.webp", "All five screens", true]],
  },
};

export const TOOLS: [string, string, string][] = [
  ["Figma", "Fg", "#A259FF"],
  ["Adobe Photoshop", "Ps", "#1A73C9"],
  ["Adobe Illustrator", "Ai", "#E07A00"],
  ["Adobe XD", "Xd", "#C23AA8"],
  ["Framer", "Fr", "#1E1E1E"],
  ["Canva", "Cv", "#11A4C6"],
  ["Miro", "Mi", "#E8B400"],
  ["Visily", "Vi", "#4F6BED"],
  ["Motiff", "Mo", "#0ACF83"],
];

export type SkillCategory = {
  id: string;
  name: string;
  color: string;
  desc: string;
  skills: string[];
  tools: string[];
  variant: string;
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "ux",
    name: "UX & Research",
    color: "#F24E1E",
    desc: "Understanding people before pixels: who the users are, where they struggle, and how they move through a product.",
    skills: [
      "UX Design",
      "User Research",
      "User Flows",
      "Information Architecture",
      "Usability Testing",
    ],
    tools: ["Figma", "Miro", "Visily"],
    variant: "Research",
  },
  {
    id: "ui",
    name: "Interface Design",
    color: "#A259FF",
    desc: "Turning structure into clear, consistent interfaces with strong hierarchy that work at every screen size.",
    skills: [
      "UI Design",
      "Typography",
      "Visual Hierarchy",
      "Responsive Design",
      "Interaction Design",
    ],
    tools: ["Figma", "Adobe XD", "Adobe Photoshop", "Adobe Illustrator", "Canva"],
    variant: "Visual",
  },
  {
    id: "proto",
    name: "Wireframes & Prototypes",
    color: "#1ABCFE",
    desc: "Moving from low-fidelity structure to clickable flows that can be tested and iterated on.",
    skills: ["Wireframing", "Prototyping", "Interaction Design", "User Flows"],
    tools: ["Figma", "Framer", "Visily", "Motiff"],
    variant: "Flow",
  },
  {
    id: "sys",
    name: "Systems & Handoff",
    color: "#0ACF83",
    desc: "Building reusable components and tokens so designs scale, and handing them to developers without guesswork.",
    skills: [
      "Design Systems",
      "Design Tokens",
      "Component Design",
      "Auto Layout",
      "Developer Handoff",
    ],
    tools: ["Figma", "Motiff"],
    variant: "System",
  },
];
