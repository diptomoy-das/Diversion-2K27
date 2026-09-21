export interface EventDetails {
  name: string;
  edition: string;
  theme: string;
  subtagline: string;
  dates: string;
  location: string;
  devfolioUrl: string;
  discordUrl: string;
  mlhCodeOfConduct: string;
  targetDate: string;
}

export interface StatItem {
  label: string;
  value: string;
  subtitle: string;
  icon: string;
}

export interface PillarItem {
  number: string;
  title: string;
  tagline: string;
  description: string;
  accent: string;
}

export interface ChapterItem {
  year: string;
  title: string;
  hackers: string;
  highlight: string;
  projects: string;
  isCurrent?: boolean;
}

export interface HallOfFameItem {
  teamName: string;
  edition: string;
  track: string;
  description: string;
  members: string[];
  quote: string;
}

export interface TrackItem {
  id: string;
  title: string;
  accentColor: string;
  shortDesc: string;
  fullDesc: string;
  bounties: string;
  sponsor: string;
  ideas: string[];
}

export interface PrizeItem {
  rank: string;
  prize: string;
  tag: string;
  subtitle: string;
  color: string;
}

export interface SpecialBounty {
  title: string;
  prize: string;
  description: string;
}

export interface PrizeMatrix {
  overall: PrizeItem[];
  specialBounties: SpecialBounty[];
  perks: string[];
}

export interface ScheduleEvent {
  time: string;
  title: string;
  stage: 'Hacking' | 'Workshops' | 'Food' | 'Judging' | 'Keynotes' | 'Mentoring';
  description: string;
}

export interface ScheduleDay {
  day: string;
  date: string;
  events: ScheduleEvent[];
}

export interface MentorItem {
  name: string;
  role: string;
  organization: string;
  domain: string;
  avatar: string;
  linkedin: string;
}

export interface PatronItem {
  name: string;
  title: string;
  organization: string;
  quote: string;
  image: string;
}

export interface TitlePartner {
  name: string;
  role: string;
  logo: string;
  badge: string;
}

export interface PartnerItem {
  name: string;
  role: string;
}

export interface SponsorData {
  viceTier: TitlePartner[];
  sunsettier: PartnerItem[];
  cyberTier: PartnerItem[];
  communityPartnersCount: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const EVENT_DETAILS: EventDetails = {
  name: "Diversion 2K27",
  edition: "4th Edition",
  theme: "Where the blueprints of imagination are built into reality.",
  subtagline: "Build your adventure block by block in West Bengal's flagship MLH hackathon.",
  dates: "Feb 28 - March 1, 2027",
  location: "IEM Gurukul Campus, Salt Lake, Sector V, Kolkata",
  devfolioUrl: "#register",
  discordUrl: "#discord",
  mlhCodeOfConduct: "#faq",
  targetDate: "2027-02-28T09:00:00+05:30"
};

export const STATS: StatItem[] = [
  { label: "Total Registrations", value: "10,000+", subtitle: "Across 21+ Indian Cities", icon: "Users" },
  { label: "In-House Offline Hackers", value: "600+", subtitle: "At IEM Gurukul Campus", icon: "Flame" },
  { label: "Cash & Bounty Pool", value: "₹5,000,000+", subtitle: "Non-dilutive prizes & credits", icon: "Trophy" },
  { label: "Sponsor & Community Partners", value: "40+", subtitle: "Leading tech & Web3 brands", icon: "Handshake" },
  { label: "West Bengal's 1st MLH Hackathon", value: "MLH Official", subtitle: "Major League Hacking Flagship", icon: "ShieldCheck" },
  { label: "India's 1st AI-Powered Hackathon", value: "AI First", subtitle: "Autonomous agent tracks", icon: "Cpu" }
];

export const PILLARS: PillarItem[] = [
  {
    number: "01",
    title: "COMPETE",
    tagline: "48-Hour Intense Build Sprint",
    description: "Immerse yourself in non-stop coding, high-speed iteration, and intense collaboration across AI, Web3, and Cloud infrastructure tracks.",
    accent: "pink"
  },
  {
    number: "02",
    title: "WIN",
    tagline: "Non-Dilutive Cash Bounties",
    description: "Compete for grand cash prizes, exclusive sponsor track bounties, cloud credits, hardware grants, and official MLH swag.",
    accent: "orange"
  },
  {
    number: "03",
    title: "ELEVATE",
    tagline: "Mentorship & VC Pitching",
    description: "Pitch your prototype directly to top VCs, founders, and industry veterans to launch your project into a viable venture.",
    accent: "cyan"
  }
];

export const PAST_CHAPTERS: ChapterItem[] = [
  {
    year: "2K24",
    title: "Radar Edition",
    hackers: "1,360+ Hackers",
    highlight: "First major IEM-ACM edition setting the benchmark for student innovation in East India.",
    projects: "140+ Submissions"
  },
  {
    year: "2K25",
    title: "Cypherpunk Edition",
    hackers: "3,500+ Hackers",
    highlight: "Pioneered decentralized Web3 tracks and cross-border community participation.",
    projects: "320+ Submissions"
  },
  {
    year: "2K26",
    title: "Breakout Edition",
    hackers: "7,000+ Registrations",
    highlight: "Became West Bengal's 1st official MLH hackathon with 500+ offline hackers at Gurukul.",
    projects: "510+ Submissions"
  },
  {
    year: "2K27",
    title: "Vice Sprint Arena",
    hackers: "10,000+ Expected",
    highlight: "The ultimate 48-hour Vice City-themed arena for AI agents, decentralized tech, and deep tech solutions.",
    projects: "NOW LIVE FOR APPLICATIONS",
    isCurrent: true
  }
];

export const HALL_OF_FAME: HallOfFameItem[] = [
  {
    teamName: "CrowdBrain AI",
    edition: "Diversion 2K26 Winner",
    track: "AI & Autonomous Agents",
    description: "Built an autonomous multi-agent code auditor during the 48-hour sprint. Raised pre-seed funding 3 months post-hackathon.",
    members: ["Arpan Ghosh", "Sneha Roy", "Vikramaditya S."],
    quote: "Diversion gave us the raw energy and mentor feedback that turned our hack into a venture."
  },
  {
    teamName: "ZkPay Flow",
    edition: "Diversion 2K26 Web3 Winner",
    track: "Web3 & Blockchain",
    description: "Designed zero-knowledge micropayment rails for streaming AI compute resources without gas friction.",
    members: ["Diya Sengupta", "Rahul Sharma", "Anish K."],
    quote: "The 3 AM midnight snacks, mentor rounds, and intense vibes at IEM Gurukul were unmatchable!"
  },
  {
    teamName: "EcoTrack Grid",
    edition: "Diversion 2K25 Impact Winner",
    track: "Open Innovation",
    description: "IoT and cloud-based energy grid optimizer reducing commercial carbon footprint in real-time.",
    members: ["Siddharth Das", "Megha Mukherjee"],
    quote: "Diversion isn't just a hackathon—it's where lifetime tech friendships are forged."
  }
];

export const TRACKS: TrackItem[] = [
  {
    id: "ai-agents",
    title: "Artificial Intelligence & Autonomous Agents",
    accentColor: "#FF007F",
    shortDesc: "GenAI, LLMs, Computer Vision, Multi-Agent Swarms & Autonomous Workflows.",
    fullDesc: "Dive into the frontier of artificial intelligence. Build applications powered by autonomous multi-agent orchestrations, LLM tool calling, multimodal vision models, or edge AI.",
    bounties: "₹1,00,000 Cash + $5,000 Cloud AI Credits",
    sponsor: "Powered by AI Research Labs",
    ideas: [
      "Multi-agent software engineering squad that auto-refactors codebases",
      "Real-time video analytics for emergency response and crowd safety",
      "Local LLM privacy-first assistant for medical document synthesis"
    ]
  },
  {
    id: "web3",
    title: "Web3 & Decentralized Web",
    accentColor: "#00F0FF",
    shortDesc: "Smart Contracts, DeFi Protocols, Zero-Knowledge Proofs & Solana/EVM dApps.",
    fullDesc: "Reengineer the trust layer of the internet. Harness blockchain technology to build decentralized identity solutions, novel DeFi primitives, zero-knowledge privacy tooling, or scalable dApps.",
    bounties: "₹80,000 Cash + Protocol Developer Grants",
    sponsor: "Supported by Web3 Ecosystem Partners",
    ideas: [
      "ZK-proof based credential verification for academic degrees",
      "Decentralized AI model marketplace with micro-royalty smart contracts",
      "Cross-chain liquidity aggregator with sub-second execution"
    ]
  },
  {
    id: "fullstack",
    title: "Web & Mobile App Development",
    accentColor: "#FF7A00",
    shortDesc: "High-scale Web Applications, Progressive Web Apps & Cross-Platform Mobile Apps.",
    fullDesc: "Craft seamless, hyper-responsive digital experiences. Build high-concurrency web platforms, intuitive mobile apps, or innovative PWA interfaces with state-of-the-art UI/UX.",
    bounties: "₹60,000 Cash + Premium Hosting Credits",
    sponsor: "Powered by Vercel & Web Dev Guilds",
    ideas: [
      "Offline-first collaborative canvas for real-time remote architecture design",
      "AI-driven hyper-local community marketplace app",
      "Gamified learning platform with interactive code simulations"
    ]
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps Infrastructure",
    accentColor: "#FFD700",
    shortDesc: "Serverless Architectures, Microservices, Edge Computing & Developer Tooling.",
    fullDesc: "Construct robust, scalable backends and developer infrastructure. Innovate in containerization, observability platforms, automated CI/CD pipelines, or serverless compute networks.",
    bounties: "₹50,000 Cash + DevOps Tooling Passes",
    sponsor: "Supported by Cloud Infrastructure Leaders",
    ideas: [
      "Zero-config ephemeral preview environment launcher for microservices",
      "AI-assisted Kubernetes log anomaly detector and auto-healer",
      "Edge-side dynamic API caching layer for ultra-low latency"
    ]
  },
  {
    id: "open-innovation",
    title: "Open Innovation & Social Good",
    accentColor: "#00FF9D",
    shortDesc: "Sustainability, Healthcare Tech, Accessibility & Civic Tech Solutions.",
    fullDesc: "Solve real-world challenges affecting society. Deploy technology to address climate change, healthcare accessibility, assistive tech for disabled individuals, or educational equity.",
    bounties: "₹50,000 Cash + Social Impact Incubation Mentorship",
    sponsor: "IEM-ACM Social Innovation Fund",
    ideas: [
      "AI sign language to speech converter for live video calls",
      "Smart urban waste management prediction & route optimizer",
      "Accessible voice-guided navigation system for visually impaired users"
    ]
  }
];

export const PRIZES: PrizeMatrix = {
  overall: [
    { rank: "Winner", prize: "₹25,000", tag: "Grand Winner Trophy", subtitle: "Plus Cloud Credits + Incubation Offer", color: "#FFD700" },
    { rank: "1st Runner-Up", prize: "₹15,000", tag: "Silver Cup", subtitle: "Plus Track Bounties & Swag Kit", color: "#E2D9F3" },
    { rank: "2nd Runner-Up", prize: "₹10,000", tag: "Bronze Cup", subtitle: "Plus Partner Tooling Credits", color: "#FF7A00" }
  ],
  specialBounties: [
    { title: "Best All-Girls Team", prize: "₹10,000 Cash", description: "Empowering women in tech sponsored by IEM-ACM Women in Tech initiative." },
    { title: "Best Beginner Team", prize: "₹8,000 Cash", description: "Awarded to the top performing first-time hackathon team." },
    { title: "Best UI/UX Design", prize: "₹7,000 Cash", description: "Recognizing outstanding interface aesthetics, micro-interactions, and visual design." }
  ],
  perks: [
    "Official MLH Season 2027 T-Shirts, Stickers & Swag Box",
    "Free 48-Hour Accommodation & Gourmet Meals at IEM Gurukul Campus",
    "1-on-1 Mentorship from Senior Engineers at Tech Giants",
    "Certificate of Excellence endorsed by IEM-ACM & MLH",
    "Direct FAST-TRACK Interview Calls for Select Sponsor Companies"
  ]
};

export const SCHEDULE: ScheduleDay[] = [
  {
    day: "Day 1",
    date: "Saturday, Feb 28",
    events: [
      { time: "08:00 AM", title: "Check-in & Hacker Onboarding", stage: "Hacking", description: "Badge collection, MLH swag distribution & team desk setup." },
      { time: "10:00 AM", title: "Grand Opening Ceremony & Keynote", stage: "Keynotes", description: "Opening remarks by IEM Dignitaries & MLH Representative." },
      { time: "11:30 AM", title: "HACKING OFFICIALLY BEGINS", stage: "Hacking", description: "48-hour clock starts! Build sprint launches across all tracks." },
      { time: "01:30 PM", title: "Networking Lunch", stage: "Food", description: "Buffet lunch & sponsor booth exploration." },
      { time: "04:00 PM", title: "Workshop: Building Autonomous AI Agents", stage: "Workshops", description: "Hands-on session with industry AI researchers." },
      { time: "06:30 PM", title: "Mentoring Round 1", stage: "Mentoring", description: "Mentors review project ideation and architecture." },
      { time: "08:30 PM", title: "Dinner & Refreshment Break", stage: "Food", description: "Gourmet dinner served at Gurukul Dining Hall." },
      { time: "11:59 PM", title: "Midnight Gaming Sprint & Snacks", stage: "Food", description: "EA FC tournament, arcade lounge & hot coffee." }
    ]
  },
  {
    day: "Day 2",
    date: "Sunday, Mar 1",
    events: [
      { time: "08:00 AM", title: "Power Breakfast & Coffee Station", stage: "Food", description: "Fresh breakfast & energizing espresso bar." },
      { time: "10:30 AM", title: "Mentoring Round 2 (Mid-Sprint Check)", stage: "Mentoring", description: "Code review, debugging assistance & pitch polish." },
      { time: "01:30 PM", title: "Lunch Break & Sponsor Demos", stage: "Food", description: "Buffet lunch & live tech demos at sponsor booths." },
      { time: "05:00 PM", title: "Soft Freeze & Devfolio Submission Check", stage: "Hacking", description: "Ensure repo links and video demos are uploaded." },
      { time: "07:30 PM", title: "FINAL CODE FREEZE", stage: "Hacking", description: "Hacking sprint concludes! All submissions locked on Devfolio." },
      { time: "08:30 PM", title: "Expo Judging Round 1", stage: "Judging", description: "Judges visit team booths for 3-minute project demos." }
    ]
  },
  {
    day: "Day 3",
    date: "Monday, Mar 2",
    events: [
      { time: "09:00 AM", title: "Top 10 Finalist Pitch Presentations", stage: "Judging", description: "Main auditorium pitch session in front of VC panel & judges." },
      { time: "11:30 AM", title: "Grand Closing & Prize Ceremony", stage: "Keynotes", description: "Winner announcements, trophy distribution & MLH closing." },
      { time: "01:00 PM", title: "Group Photo & Celebration Lunch", stage: "Food", description: "Commemorative photos, networking & farewell." }
    ]
  }
];

const createAvatarSvg = (initials: string, bgHex: string, textHex: string) =>
  `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" rx="24" fill="%23${bgHex}"/><text x="50%" y="54%" dominant-baseline="middle" text-anchor="middle" fill="%23${textHex}" font-size="42" font-family="sans-serif" font-weight="bold">${initials}</text></svg>`;

export const MENTORS: MentorItem[] = [
  {
    name: "Dr. Ananya Roy",
    role: "AI Research Lead",
    organization: "DeepTech Labs",
    domain: "AI / ML",
    avatar: createAvatarSvg("AR", "211A35", "FF007F"),
    linkedin: "#mentors"
  },
  {
    name: "Rohan Mukherjee",
    role: "Senior Staff Engineer",
    organization: "Web3 Protocols",
    domain: "Web3 & Zero-Knowledge",
    avatar: createAvatarSvg("RM", "161224", "00F0FF"),
    linkedin: "#mentors"
  },
  {
    name: "Subhajit Sen",
    role: "Principal Cloud Architect",
    organization: "Global Cloud Corp",
    domain: "DevOps & Cloud",
    avatar: createAvatarSvg("SS", "211A35", "FF7A00"),
    linkedin: "#mentors"
  },
  {
    name: "Priya Banerjee",
    role: "Lead Product Designer",
    organization: "DesignStudio Pro",
    domain: "UI/UX & Mobile",
    avatar: createAvatarSvg("PB", "161224", "FFD700"),
    linkedin: "#mentors"
  },
  {
    name: "Devratna Gupta",
    role: "Founding Engineer",
    organization: "Agentic Systems",
    domain: "Autonomous Agents",
    avatar: createAvatarSvg("DG", "211A35", "00FF9D"),
    linkedin: "#mentors"
  },
  {
    name: "Taniya Sarkar",
    role: "DevRel Manager",
    organization: "Developer Guild",
    domain: "Open Source",
    avatar: createAvatarSvg("TS", "161224", "8A2BE2"),
    linkedin: "#mentors"
  }
];

export const PATRONS: PatronItem[] = [
  {
    name: "Prof. Dr. Satyajit Chakrabarti",
    title: "President & Chief Patron",
    organization: "IEM-UEM Group",
    quote: "Diversion stands as a beacon of student-driven innovation, elevating West Bengal to the forefront of global hackathon culture.",
    image: createAvatarSvg("SC", "211A35", "00F0FF")
  },
  {
    name: "Prof. Dr. Arun Kumar Bar",
    title: "Dean of Academics",
    organization: "IEM Kolkata",
    quote: "Our mission is to nurture engineers who turn bold imagination into high-impact practical solutions during this 48-hour sprint.",
    image: createAvatarSvg("AB", "161224", "FF7A00")
  },
  {
    name: "IEM-ACM Executive Committee",
    title: "Student Chapter Leadership",
    organization: "IEM-ACM Chapter",
    quote: "Built block by block by students, for students worldwide. Welcome to the Diversion 2K27 Vice City Sprint Arena!",
    image: createAvatarSvg("ACM", "211A35", "FF007F")
  }
];

export const SPONSORS: SponsorData = {
  viceTier: [
    { name: "Devfolio", role: "Official Platform Partner", logo: "Devfolio", badge: "TITLE SPONSOR" },
    { name: "Major League Hacking", role: "Official Sanctioning Body", logo: "MLH", badge: "GLOBAL PARTNER" }
  ],
  sunsettier: [
    { name: "Polygon", role: "Web3 Track Partner" },
    { name: "Solana Foundation", role: "Ecosystem Partner" },
    { name: "GitHub", role: "Developer Tools Partner" },
    { name: "Vercel", role: "Deployment Partner" }
  ],
  cyberTier: [
    { name: "DigitalOcean", role: "Cloud Partner" },
    { name: "Postman", role: "API Partner" },
    { name: "Wolfram Language", role: "Compute Partner" },
    { name: "Balsamiq", role: "Wireframing Partner" }
  ],
  communityPartnersCount: 32
};

export const FAQS: FaqItem[] = [
  {
    question: "What is Diversion 2K27?",
    answer: "Diversion 2K27 is West Bengal's flagship MLH hackathon and India's 1st AI-powered hackathon, organized by the IEM-ACM Student Chapter. It is a 48-hour sprint where students build innovative software prototypes across AI, Web3, Web/Mobile, and Cloud tracks."
  },
  {
    question: "Is there any registration fee?",
    answer: "No! Diversion 2K27 is 100% FREE for all participating hackers. Selected offline participants also receive complimentary gourmet meals, midnight snacks, and overnight stay facilities at the IEM Gurukul Campus."
  },
  {
    question: "Who can participate?",
    answer: "Students currently enrolled in any undergraduate, graduate, or high school program are eligible to participate. Whether you are a beginner or a seasoned hacker, you are welcome to apply!"
  },
  {
    question: "What is the team size requirement?",
    answer: "You can participate individually or in teams of up to 4 members. If you don't have a team yet, you can find team members on our official Discord server before the hacking sprint begins."
  },
  {
    question: "Can I start working on my project before the hackathon?",
    answer: "No. All design, code, and project assets must be created during the 48-hour hackathon duration. Using pre-existing projects violates the MLH Code of Conduct and results in instant disqualification."
  },
  {
    question: "What should I bring to the IEM Gurukul Campus?",
    answer: "Bring your laptop, charger, extension cord, valid student ID card, personal toiletries, and your unstoppable hacker enthusiasm! We provide high-speed Wi-Fi, power outlets, meals, and sleeping areas."
  },
  {
    question: "What is the MLH Code of Conduct?",
    answer: "Diversion strictly adheres to the Major League Hacking Code of Conduct. We are committed to providing a safe, inclusive, and harassment-free environment for everyone."
  }
];
