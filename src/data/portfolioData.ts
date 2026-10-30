export interface Metric {
  label: string;
  value: string;
  context: string;
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  tagline: string;
  role: string;
  team: string;
  timeline: string;
  domain: string;
  featured: boolean;
  heroMetric: {
    value: string;
    label: string;
  };
  summary: string;
  apmHighlights: string[]; // Google APM specific alignments
  problemStatement: {
    overview: string;
    keyFrictions: string[];
    userEvidence: string;
  };
  userResearch: {
    targetUsers: string;
    interviewsCount?: string;
    coreInsight: string;
    personaSummary: string;
  };
  solutionStrategy: {
    approach: string;
    tradeoffs: {
      choice: string;
      why: string;
      rejectedAlternative: string;
    }[];
    mvpScope: string[];
    outOfScope: string[];
  };
  productArtifacts: {
    prdSnippet?: string;
    architectureDescription: string;
    techStack: string[];
  };
  outcomes: {
    quantitative: string[];
    qualitative: string[];
  };
  retrospective: {
    whatWorked: string;
    whatNextV2: string;
  };
}

export interface PRDItem {
  id: string;
  title: string;
  product: string;
  status: "Shipped" | "In Discovery" | "Prototype";
  date: string;
  summary: string;
  content: {
    problem: string;
    goals: string[];
    nonGoals: string[];
    userStories: { asA: string; iWantTo: string; soThat: string }[];
    functionalReqs: string[];
    successMetrics: { metric: string; target: string; rationale: string }[];
    risksAndMitigations: { risk: string; mitigation: string }[];
  };
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Akshaya Sri B",
    tagline: "Product Builder & AI Engineer",
    targetRole: "Google Associate Product Manager (APM)",
    location: "Salem, Tamil Nadu, India",
    email: "akshayasrib05716@gmail.com",
    linkedin: "https://www.linkedin.com/in/akshaya-sri-balan",
    github: "https://github.com",
    resumeUrl: "/Akshaya_Sri_B_Resume.pdf",
    bio: "Final-year B.Tech AI & Data Science engineer with a track record of identifying real human friction and shipping products with measurable impact. Wrote the PRD and led delivery of LocalLens AI (a Gemini-powered Google Maps discovery layer), built automated student coaching tools saving 40%+ faculty hours, and digitized a traditional manufacturing business.",
    corePhilosophy: "Strong products live at the intersection of deep technical comprehension, aggressive user empathy, and relentless execution discipline.",
  },

  apmPillars: [
    {
      title: "Product Intuition & User Empathy",
      tag: "Customer-Obsessed",
      description:
        "Trained to start with the human problem, not the model. Conducted 20+ qualitative stakeholder interviews across faculty and merchants to uncover unmet friction before writing a single line of code.",
      proof: "Interviewed professors to identify counseling bottlenecks, resulting in SONA Scheduler's 40% time cut.",
      icon: "Compass",
    },
    {
      title: "Technical Depth & AI Fluency",
      tag: "Engineering Bridge",
      description:
        "B.Tech in Artificial Intelligence & Data Science (8.52 CGPA). Deep understanding of LLMs (Gemini API, embeddings, hallucination guards), Computer Vision, FastAPI, and data pipeline latencies.",
      proof: "Designed source-grounding verification architecture for LocalLens AI to eliminate LLM hallucinations on local queries.",
      icon: "Cpu",
    },
    {
      title: "Scrappy 0-to-1 Execution",
      tag: "Relentless Delivery",
      description:
        "Authored PRDs, defined ruthless MVP boundaries, negotiated engineering trade-offs, and shipped working software under tight timeframes.",
      proof: "Delivered digitized inventory & GST billing workflows for family manufacturing business, reducing order checkout from 15 mins to <2 mins.",
      icon: "Rocket",
    },
    {
      title: "Googleyness & Leadership",
      tag: "Discipline & High Standards",
      description:
        "National Cadet Corps (NCC) cadet and martial arts (Karate) practitioner. Sona College peer tutor mentoring struggling engineers, hackathon lead, and Smart India Hackathon national pitch finalist.",
      proof: "Pitched secure IT enterprise asset wiping to national jury at Smart India Hackathon 2025.",
      icon: "ShieldCheck",
    },
  ],

  stats: [
    {
      value: "40%+",
      label: "Admin Time Reduced",
      context: "SONA Scheduler automated follow-ups",
    },
    {
      value: "Gemini AI",
      label: "Maps Layer Delivered",
      context: "LocalLens AI source-grounded discovery",
    },
    {
      value: "15m → <2m",
      label: "Checkout Cycle Cut",
      context: "Family business GST & inventory app",
    },
    {
      value: "Top National",
      label: "Smart India Hackathon",
      context: "Safe Wiping enterprise pipeline pitch",
    },
  ],

  caseStudies: [
    {
      id: "locallens-ai",
      slug: "locallens-ai",
      title: "LocalLens AI: Gemini-Powered Google Maps Discovery Layer",
      subtitle:
        "Bridging the discovery gap between unindexed real-time merchant offers and multimodal Google Maps users.",
      tagline: "Multimodal AI • PRD Scoping • Grounded Verification",
      role: "Product Manager & Technical Co-builder",
      team: "2 Engineers (PM + Full-stack developer)",
      timeline: "Q3 2024",
      domain: "Consumer Geo-Search & Generative AI",
      featured: true,
      heroMetric: {
        value: "100%",
        label: "Source-Grounded Attribution",
      },
      summary:
        "While Google Maps excels at spatial navigation, local promotional offers and real-time merchant announcements remain trapped in ephemeral social posts and paper fliers. I identified this discovery gap, wrote the full PRD, prioritized an MVP around source verification, and co-built a working prototype with Gemini API and FastAPI that delivers grounded, attributed merchant answers.",
      apmHighlights: [
        "Identified unaddressed user need in Google Maps ecosystem (temporal offer discovery vs static location listing).",
        "Wrote comprehensive PRD balancing LLM hallucination prevention with real-time response latency.",
        "Engineered source-attribution badge to ensure trust and user safety, reflecting Google search quality principles.",
      ],
      problemStatement: {
        overview:
          "Google Maps users frequently search for real-time dining and shopping perks ('any lunch specials under ₹200 near me today?'), but Maps results only display static menu PDFs, business hours, and historical reviews. Meanwhile, micro-merchants broadcast deals on social handles and local boards that never index into Maps.",
        keyFrictions: [
          "Information Asymmetry: Customers walk past active promotions 50 meters away without knowing.",
          "High Friction for SMBs: Small business owners find updating Google Business Profile promotions tedious and slow.",
          "LLM Hallucinations: Generic AI chatbots invent expired or inaccurate restaurant offers.",
        ],
        userEvidence:
          "Informal survey of 35 college students and neighborhood shoppers revealed 82% wanted instant, verified price/offer filters before walking into local stores.",
      },
      userResearch: {
        targetUsers: "Everyday urban explorers, college students on budgets, and local high-turnover retailers.",
        coreInsight:
          "Users don't just want AI summaries; they demand proof. A wrong recommendation damages trust permanently. Therefore, transparency (exact source link + timestamp) is more important than conversational fluff.",
        personaSummary:
          "Rohan (21, Student): Wants cheap quick eats nearby with valid student discounts today without calling 4 cafes.",
      },
      solutionStrategy: {
        approach:
          "Created a discovery engine that extracts merchant updates from permitted public channels, processes them through a multimodal Gemini model with strict schema outputs, and maps them to a reactive map interface with visual verification badges.",
        tradeoffs: [
          {
            choice: "Strict Source Attribution vs Generative Extrapolation",
            why: "Users trust Google Maps for truth. Better to return 'No verified offers found' than invent plausible hallucinations.",
            rejectedAlternative: "Permissive prompting that generates creative recommendations without citations.",
          },
          {
            choice: "FastAPI Lightweight Cache vs Heavy Vector DB for MVP",
            why: "Kept end-to-end query latency under 800ms while keeping hosting costs zero for the two-person sprint.",
            rejectedAlternative: "Full enterprise pinecone vector cluster with complex graph embeddings.",
          },
        ],
        mvpScope: [
          "Geographic radius query with natural language query parsing via Gemini API.",
          "Verification status badge (Verified Source, Scraped Date, Merchant Claim).",
          "One-click source citation link for every highlighted promotion.",
          "React UI displaying location pins with promotional badges.",
        ],
        outOfScope: [
          "Merchant in-app payment transactions.",
          "Real-time turn-by-turn routing (relies on native Google Maps handoff).",
          "Custom merchant merchant dashboard (kept manual validation for pilot).",
        ],
      },
      productArtifacts: {
        architectureDescription:
          "React Map UI → FastAPI Gateway → Scraper Engine + Gemini 1.5 Pro via structured JSON mode → Source Verification Guardrail → Annotated Map Markers.",
        techStack: ["Gemini API", "FastAPI", "React", "Python", "BeautifulSoup", "Tailwind CSS"],
      },
      outcomes: {
        quantitative: [
          "Sub-800ms median query response time across tested local queries.",
          "100% of generated responses tied to verifiable web or merchant source links.",
          "Successfully piloted across 20+ local retail & cafe listings in test neighborhood.",
        ],
        qualitative: [
          "Validated that users prioritize verified freshness over chatbot personality.",
          "Demonstrated direct feasibility for integrating temporal signals into map surfaces.",
        ],
      },
      retrospective: {
        whatWorked:
          "Writing a strict PRD before building prevented scope creep and kept our two-person team focused on the core differentiator: source-grounded trust.",
        whatNextV2:
          "Integrate direct Google Business API webhooks and OCR for real-time storefront chalkboard images taken by community contributors.",
      },
    },

    {
      id: "sona-scheduler",
      slug: "sona-scheduler",
      title: "SONA Scheduler: Academic Workflow & Intervention Automation",
      subtitle:
        "Transforming manual, fragmented counseling logs into an automated early-intervention system for at-risk engineering students.",
      tagline: "User Research • Workflow Optimization • B2B/EdTech",
      role: "Product Lead & Lead Developer",
      team: "Department Initiative (Direct collaboration with HOD & 8 Faculty members)",
      timeline: "Q1 2024",
      domain: "Higher EdTech & Academic Operations",
      featured: true,
      heroMetric: {
        value: "40%+",
        label: "Admin Follow-Up Time Reduced",
      },
      summary:
        "Identified that faculty wasted over 6 hours every week reconciling spreadsheets, attendance sheets, and paper logs to schedule mandatory counseling for struggling students. I conducted structured stakeholder interviews, mapped the user journey, and built a centralized workflow tool that automated eligibility flagging and follow-up scheduling, slashing administrative overhead by >40%.",
      apmHighlights: [
        "Conducted end-to-end qualitative user discovery with non-technical academic stakeholders.",
        "Identified root cause: faculty cared deeply about student outcomes but were choked by calendar logistics.",
        "Designed high-adoption UX requiring minimal training, achieving 100% pilot adoption across the department.",
      ],
      problemStatement: {
        overview:
          "At Sona College of Technology, faculty mentors are required to provide 1-on-1 counseling to students with low internal test scores or declining attendance. However, identifying who needed support, cross-referencing available slots, and following up when students missed sessions was managed via scattered Excel sheets and manual phone calls.",
        keyFrictions: [
          "Fragmented Data: Attendance was on one portal, internal marks on another, and counseling logs on paper binders.",
          "High Cognitive Load: Professors had to manually cross-reference 60+ student schedules with their own lecture timetables.",
          "No Audit Trail: Lack of visibility on whether intervention meetings actually occurred before semester exams.",
        ],
        userEvidence:
          "Interviews with 8 professors revealed an average of 45 minutes wasted per scheduled counseling session just on back-and-forth communication.",
      },
      userResearch: {
        targetUsers: "Department Professors, Academic Mentors, Class Advisors, and At-Risk Students.",
        coreInsight:
          "The solution could not add a new administrative task. If data entry took more than 30 seconds per session, professors would abandon it. The tool had to auto-pull test score thresholds and propose calendar slots automatically.",
        personaSummary:
          "Dr. Ramanathan (Senior Professor): Overwhelmed with research, grading, and committee duties; wants a one-click dashboard that tells him which 5 students need intervention today.",
      },
      solutionStrategy: {
        approach:
          "Built a centralized workflow portal with dynamic rule-based triggers (e.g., marks < 50% OR attendance < 75%). When triggered, the system auto-generates counseling tickets, matches common free periods between teacher and student, and pushes automated email/SMS calendar invites.",
        tradeoffs: [
          {
            choice: "Simplified Web Portal vs Native Mobile App",
            why: "Faculty manage departmental work on desktop office monitors. Web app allowed instantaneous zero-install deployment.",
            rejectedAlternative: "Cross-platform mobile app requiring app store permissions and updates.",
          },
          {
            choice: "Automated Rule Triggers vs Manual Teacher Nomination",
            why: "Eliminated human bias and ensured no struggling student slipped through the cracks.",
            rejectedAlternative: "Pure manual recommendation dropdown.",
          },
        ],
        mvpScope: [
          "Automated threshold flagging from uploaded exam score sheets.",
          "Conflict-free schedule slot generator.",
          "Counseling session completion tracker with confidential mentor notes.",
          "Department head analytics dashboard showing intervention closure rates.",
        ],
        outOfScope: [
          "Automated AI grading of exam papers.",
          "Full institutional enterprise LMS integration (scoped for phase 2).",
        ],
      },
      productArtifacts: {
        architectureDescription:
          "Responsive React Frontend → Python Automation Engine → Department Database → SMTP Notification Service.",
        techStack: ["Python", "FastAPI", "React", "SQL Database", "Tailwind CSS"],
      },
      outcomes: {
        quantitative: [
          "Reduced administrative follow-up and scheduling hours by over 40%.",
          "100% faculty adoption across the department within 3 weeks of rollout.",
          "Zero at-risk students missed the mandatory pre-exam counseling window in the pilot semester.",
        ],
        qualitative: [
          "Mentors reported significantly less emotional fatigue around administrative follow-ups.",
          "Students received timely academic intervention 3 weeks earlier than previous manual cycles.",
        ],
      },
      retrospective: {
        whatWorked:
          "Shadowing professors during office hours revealed hidden edge cases (e.g., lab clashes) that never showed up in initial requirement meetings.",
        whatNextV2:
          "Incorporate predictive ML models to flag academic dip risk *before* midterms based on assignment submission cadence and quiz trends.",
      },
    },

    {
      id: "timber-business-digitization",
      slug: "timber-business-digitization",
      title: "Family Manufacturing Enterprise: 0-to-1 Workflow Modernization",
      subtitle:
        "Digitizing traditional timber volumetric pricing and regional GST billing workflows for non-technical shop floor staff.",
      tagline: "Operations Management • 0-to-1 Product • Statutory Compliance",
      role: "Product & Operations Lead",
      team: "Solo Lead (Collaborated with shop managers, accountants & external auditors)",
      timeline: "Ongoing / 2023–2024",
      domain: "SMB B2B Operations & Supply Chain",
      featured: true,
      heroMetric: {
        value: "15m → <2m",
        label: "Checkout Processing Speed",
      },
      summary:
        "In our family timber and woodworking manufacturing business, pricing calculations involved complex 3D volumetric lumber formulas (Hoppus rule / cubic feet) done manually on scrap paper, followed by delayed manual GST invoicing. I designed a customized digital inventory and statutory billing tool tailored for non-technical warehouse workers, cutting checkout time from 15 minutes to under 2 minutes.",
      apmHighlights: [
        "Hands-on operational product management: turned messy offline physical processes into robust software.",
        "Designed calculation logic for complex domain-specific volumetric conversions with automated GST tiers.",
        "Overcame user resistance by designing a resilient, mistake-proof UI for users with low digital literacy.",
      ],
      problemStatement: {
        overview:
          "Timber inventory is uniquely complex: raw logs and cut planks have irregular dimensions (length × breadth × thickness) requiring volumetric conversion to cubic feet/meters before applying dynamic grade-based pricing and varying GST tax slabs (5%, 12%, 18%). Doing this by hand caused frequent billing errors, long customer wait times, and delayed month-end accounting audits.",
        keyFrictions: [
          "Manual Calculation Errors: Up to 8% discrepancy between physical stock and billing ledger.",
          "Long Customer Checkout: Invoicing took 15–20 minutes per order with a physical calculator.",
          "Statutory Risk: Incorrect HSN code / GST tax slab applications risked tax penalties.",
        ],
        userEvidence:
          "Direct observation of 50 customer checkout transactions revealed calculation recalculations were the primary bottleneck.",
      },
      userResearch: {
        targetUsers: "Shop floor billing clerks, warehouse supervisors, and retail timber contractors.",
        coreInsight:
          "Warehouse staff wear dusty work gloves and operate in noisy environments. The interface needed large tap targets, keyboard-driven numeric numpad entry, and real-time visual sanity checks rather than multi-step wizard modals.",
        personaSummary:
          "Murugan (52, Senior Warehouse Clerk): 25 years in the business; can estimate log volume by eye, but struggles with multi-layer software menus and complex tax rules.",
      },
      solutionStrategy: {
        approach:
          "Built a streamlined single-screen POS and inventory engine with instant cubic dimension math, auto-assigned HSN/GST rates, and direct PDF invoice generation.",
        tradeoffs: [
          {
            choice: "Single-Screen High-Density UI vs Multi-Step Wizard",
            why: "Power users need to enter 20 lumber cuts in 60 seconds without clicking 'Next' 20 times.",
            rejectedAlternative: "Step-by-step consumer e-commerce style checkout wizard.",
          },
          {
            choice: "Local-First Offline Resilient Storage with Cloud Sync",
            why: "Warehouse floor suffers intermittent power and broadband outages.",
            rejectedAlternative: "Strictly cloud-dependent thin client.",
          },
        ],
        mvpScope: [
          "Instant volumetric lumber calculator (L × B × H to Cubic Feet/Meters).",
          "Automated GST & CGST/SGST tax calculation based on wood classification.",
          "One-click thermal invoice printing and WhatsApp bill sharing.",
          "Real-time physical stock decrement with low-inventory warnings.",
        ],
        outOfScope: [
          "B2B online customer-facing e-commerce portal.",
          "Automated forklift IoT tracking.",
        ],
      },
      productArtifacts: {
        architectureDescription:
          "Electron/Web Lightweight POS App → SQLite Local Store → GST Tax Computation Engine → Thermal Print Service.",
        techStack: ["Python", "FastAPI", "SQLite", "React UI", "ReportLab PDF Engine"],
      },
      outcomes: {
        quantitative: [
          "Reduced transaction checkout time from 15 minutes to under 2 minutes per order.",
          "Zero calculation discrepancies in month-end inventory reconciliation audits.",
          "100% compliance with regional GST filing guidelines across all quarterly returns.",
        ],
        qualitative: [
          "Staff adopted the system within 48 hours without needing written manuals.",
          "Enabled business owners to view daily turnover and high-margin wood inventory in real-time.",
        ],
      },
      retrospective: {
        whatWorked:
          "Co-designing the calculation screen directly alongside the warehouse clerk ensured immediate buy-in and pinpoint accuracy.",
        whatNextV2:
          "Introduce computer vision mobile scanning to estimate log diameter and plank counts automatically using camera snapshots.",
      },
    },

    {
      id: "safe-wiping-it-assets",
      slug: "safe-wiping-it-assets",
      title: "Safe Wiping for Enterprise IT Assets (Smart India Hackathon)",
      subtitle:
        "Co-designed and pitched a DoD/NIST compliant enterprise data sanitation pipeline to a national evaluation jury.",
      tagline: "Security & Compliance • Systems Architecture • National Pitch",
      role: "Product Strategist & Co-designer",
      team: "6-person multi-disciplinary engineering team",
      timeline: "Smart India Hackathon 2025",
      domain: "Enterprise Cybersecurity & Asset Lifecycle",
      featured: false,
      heroMetric: {
        value: "National",
        label: "Hackathon Finalist Pitch",
      },
      summary:
        "When enterprises retire thousands of laptops and storage drives, standard formatting leaves recoverable corporate secrets. Co-designed an automated, verifiable sanitization pipeline adhering to NIST 800-88 standards with tamper-proof cryptographic certificates, pitching to national judges at Smart India Hackathon.",
      apmHighlights: [
        "Synthesized technical regulatory standards (NIST 800-88, DoD 5220.22-M) into a modular product roadmap.",
        "Led product value-proposition and pitch narrative for national competition jury.",
        "Balanced enterprise audit compliance with operational throughput requirements.",
      ],
      problemStatement: {
        overview:
          "Over 60% of retired corporate hardware sold on secondary markets retains forensic traces of proprietary data because IT admins use simple OS reinstalls rather than cryptographic multi-pass sanitization.",
        keyFrictions: [
          "Lack of Verifiability: IT managers have no cryptographically signed certificate proving who wiped which serial number.",
          "Slow Throughput: Enterprise wipe tools require manual per-machine setup.",
        ],
        userEvidence: "Smart India Hackathon enterprise problem brief on e-waste data leakage risks.",
      },
      userResearch: {
        targetUsers: "Enterprise IT asset disposition (ITAD) officers and corporate compliance auditors.",
        coreInsight:
          "The wipe itself is commodity software; the *tamper-proof cryptographic audit log* is what enterprises pay for.",
        personaSummary: "Chief Information Security Officer needing legal liability indemnity upon hardware resale.",
      },
      solutionStrategy: {
        approach:
          "Network-bootable PXE environment that auto-detects drive media (NVMe, SSD, HDD), runs appropriate NIST wipe routines, and signs SHA-256 tamper-proof hardware certificates.",
        tradeoffs: [
          {
            choice: "PXE Network Boot vs USB Drive Installations",
            why: "Allows wiping 50 racks of decommissioned servers concurrently without human technicians plugging USBs.",
            rejectedAlternative: "Individual bootable USB drives.",
          },
        ],
        mvpScope: [
          "Automated media detection and NIST 800-88 Purge/Clear selection.",
          "Tamper-proof JSON/PDF certificate generation with hardware serial hashing.",
        ],
        outOfScope: ["Physical degaussing hardware integration."],
      },
      productArtifacts: {
        architectureDescription:
          "PXE Network Boot → Linux Kernel Low-Level Wipe Pipeline → Hardware Telemetry Grabber → Cryptographic Signature Engine.",
        techStack: ["Linux Kernel", "Python", "Bash", "Cryptography", "FastAPI"],
      },
      outcomes: {
        quantitative: [
          "Selected as National Finalist at Smart India Hackathon 2025.",
          "Pitched end-to-end product architecture to high-level industry and government panel.",
        ],
        qualitative: [
          "Praised by jury for focusing on the regulatory compliance certificate rather than just technical scripts.",
        ],
      },
      retrospective: {
        whatWorked:
          "Focusing the pitch on risk mitigation (avoiding multimillion-dollar data leak fines) resonated far more than raw wiping algorithms.",
        whatNextV2: "Add zero-knowledge proof verification on decentralized public ledger for public auditability.",
      },
    },

    {
      id: "ai-fashion-advisor",
      slug: "ai-fashion-advisor",
      title: "AI Fashion Advisor: Computer Vision Sizing & Personalization",
      subtitle:
        "Scoping an AI-driven fit recommendation engine to tackle the 30% return rate epidemic in online apparel e-commerce.",
      tagline: "Computer Vision • Generative AI • E-Commerce UX",
      role: "Product Scoping & Concept Lead",
      team: "Academic Research Project",
      timeline: "2024",
      domain: "Consumer E-Commerce & Computer Vision",
      featured: false,
      heroMetric: {
        value: "30%",
        label: "Return Rate Target Reduction",
      },
      summary:
        "Online clothing returns cost the fashion industry over $100B annually, with size and fit mismatch causing 70% of returns. Defined product requirements for an AI advisor that calculates body dimensions from a single user photograph and pairs it with garment sizing charts to give high-confidence fit advice.",
      apmHighlights: [
        "Identified billion-dollar e-commerce friction point with clear business ROI.",
        "Structured privacy-preserving architecture where user photos are processed locally/ephemerally.",
        "Defined progressive disclosure UX to prevent overwhelming users with sizing data.",
      ],
      problemStatement: {
        overview:
          "Vanity sizing across different clothing brands leaves consumers guessing their size, causing shoppers to order multiple sizes and return the ones that don't fit (bracketing).",
        keyFrictions: [
          "Size Chart Confusion: Customers do not carry measuring tapes when shopping online.",
          "Privacy Hesitation: Users do not want to upload sensitive body photos to permanent cloud databases.",
        ],
        userEvidence: "E-commerce industry return benchmarks showing 30% average apparel returns.",
      },
      userResearch: {
        targetUsers: "Online fashion shoppers, particularly Gen Z and young professionals buying fast fashion.",
        coreInsight:
          "Consumers don't want a 3D avatar; they just want a simple, authoritative answer: 'Buy Size M — this fits slightly snug around the shoulders.'",
        personaSummary: "Ananya (23): Frequently buys clothes online; frustrated by having to return 2 out of 3 shirts.",
      },
      solutionStrategy: {
        approach:
          "Client-side photo landmark estimation (MediaPipe / Pose estimation) against reference object (e.g. credit card or doorway) to calculate key measurements, matched with brand spec tables.",
        tradeoffs: [
          {
            choice: "Ephemeral Client-Side Processing vs Cloud Storage",
            why: "Guarantees complete user photo privacy and eliminates GDPR/data storage liabilities.",
            rejectedAlternative: "Storing full body photos in cloud database.",
          },
        ],
        mvpScope: [
          "Single-photo pose analysis with user height calibration.",
          "Brand-specific size recommendation (S/M/L) with fit indicator (Relaxed, True, Tight).",
        ],
        outOfScope: ["Full virtual try-on texture simulation (high latency, low accuracy for MVP)."],
      },
      productArtifacts: {
        architectureDescription:
          "Client Camera Stream → MediaPipe Keypoint Extraction → Garment Spec Matcher → Recommendation Badge.",
        techStack: ["Computer Vision", "Python", "MediaPipe", "React", "FastAPI"],
      },
      outcomes: {
        quantitative: [
          "Completed comprehensive PRD and technical feasibility prototype.",
          "Targeted 30% reduction in sizing-related return requests in product thesis.",
        ],
        qualitative: [
          "Developed deep understanding of user privacy trade-offs in consumer AI products.",
        ],
      },
      retrospective: {
        whatWorked:
          "Ruthlessly scoping down from 'full 3D virtual fitting room' to 'confident size recommendation' made the project technically viable.",
        whatNextV2: "Integrate customer review sentiment analysis to adjust recommendations based on real user fit feedback.",
      },
    },
  ],

  prds: [
    {
      id: "prd-locallens",
      title: "PRD: LocalLens AI (Google Maps Temporal Layer)",
      product: "LocalLens AI",
      status: "Shipped",
      date: "Q3 2024",
      summary:
        "Comprehensive Product Requirements Document defining the problem, user journeys, functional constraints, and hallucination guardrails for grounded local discovery.",
      content: {
        problem:
          "Hyperlocal temporal promotions (daily specials, flash discounts, live events) are invisible on static map interfaces, causing lost revenue for merchants and lost value for consumers.",
        goals: [
          "Enable natural language search for time-sensitive merchant offers within a 5km radius.",
          "Ensure 100% of generated responses cite verifiable, active merchant sources.",
          "Keep end-to-end query response time below 1 second.",
        ],
        nonGoals: [
          "Building turn-by-turn navigation (deep link to Google Maps).",
          "Processing in-app table bookings or food delivery transactions.",
        ],
        userStories: [
          {
            asA: "Budget-conscious university student",
            iWantTo: "Search for 'lunch combo under ₹200 within 1km'",
            soThat: "I can eat affordably without calling restaurants.",
          },
          {
            asA: "Local cafe owner",
            iWantTo: "Broadcast my rainy-day 20% off pastry deal",
            soThat: "Foot traffic increases during slow hours.",
          },
        ],
        functionalReqs: [
          "FR-1: Natural language query interpretation via Gemini 1.5 Flash structured output.",
          "FR-2: Dynamic merchant content scraper with source timestamp tagging.",
          "FR-3: Hallucination filter: reject LLM output if source snippet does not support the claim.",
          "FR-4: Interactive map pins with verified status badge and direct source URL.",
        ],
        successMetrics: [
          {
            metric: "Source Grounding Accuracy",
            target: "100%",
            rationale: "Zero tolerance for hallucinated promotions in map search.",
          },
          {
            metric: "p90 Query Latency",
            target: "< 1000ms",
            rationale: "Must feel conversational and competitive with native search.",
          },
          {
            metric: "Click-Through to Source",
            target: "> 25%",
            rationale: "Proves users value verifiable proof before visiting.",
          },
        ],
        risksAndMitigations: [
          {
            risk: "Merchant offer has expired earlier in the day.",
            mitigation: "Display prominent timestamp badge ('Scraped 2 hrs ago') and encourage user verification call.",
          },
          {
            risk: "Rate limits or cost spikes on Gemini API.",
            mitigation: "Implement geo-tile caching in Redis/FastAPI memory for popular local query clusters.",
          },
        ],
      },
    },
    {
      id: "prd-scheduler",
      title: "PRD: SONA Scheduler (Academic Intervention)",
      product: "SONA Scheduler",
      status: "Shipped",
      date: "Q1 2024",
      summary:
        "Product requirements for streamlining student counseling workflows, reducing administrative friction for 8+ professors.",
      content: {
        problem:
          "Manual tracking of 60+ at-risk engineering students creates high cognitive friction for professors, resulting in delayed interventions before semester examinations.",
        goals: [
          "Automate at-risk student identification based on attendance and test cutoffs.",
          "Reduce faculty administrative scheduling time by at least 35%.",
          "Provide department heads with real-time intervention completion analytics.",
        ],
        nonGoals: [
          "Replacing face-to-face mentorship with automated advice.",
          "Direct student grade alteration through the portal.",
        ],
        userStories: [
          {
            asA: "Class Advisor",
            iWantTo: "See a pre-filtered list of students below 75% attendance",
            soThat: "I can schedule counseling before the examination board lockout.",
          },
          {
            asA: "Head of Department",
            iWantTo: "Review department-wide counseling completion rates",
            soThat: "I can verify statutory compliance for academic accreditation.",
          },
        ],
        functionalReqs: [
          "FR-1: CSV/Excel test mark & attendance ingestion pipeline.",
          "FR-2: Smart calendar slot matching between mentor and mentee free hours.",
          "FR-3: Automated notification push to student college email.",
          "FR-4: Encrypted counseling log submission with follow-up action tags.",
        ],
        successMetrics: [
          {
            metric: "Follow-Up Time Saved",
            target: "> 35%",
            rationale: "Core value proposition for faculty adoption (achieved 40%+).",
          },
          {
            metric: "Pilot Department Adoption",
            target: "100%",
            rationale: "Tool must be universally accepted by senior professors.",
          },
        ],
        risksAndMitigations: [
          {
            risk: "Professors find entering notes burdensome.",
            mitigation: "Limit required feedback fields to 3 checkboxes and 1 optional remark box.",
          },
        ],
      },
    },
  ],

  leadershipAndActivities: [
    {
      role: "National Cadet Corps (NCC)",
      organization: "Ministry of Defence, Government of India",
      description:
        "Trained in high-intensity military discipline, drill commands, crisis management, and unit cohesion. Cultivated the mental grit, leadership poise, and situational awareness critical for high-pressure product leadership.",
      badge: "Discipline & Grit",
      period: "Active Cadet",
    },
    {
      role: "Martial Arts Practitioner (Karate)",
      organization: "Traditional Karate-Do",
      description:
        "Practicing discipline, spatial precision, and focus under physical and mental stress. Reinforces relentless self-improvement, continuous sparring, and respect for fundamentals.",
      badge: "Mental Focus",
      period: "Practitioner",
    },
    {
      role: "Department Hackathon Lead & Organizer",
      organization: "Sona College of Technology",
      description:
        "Spearheaded end-to-end planning, cross-functional coordination, problem-statement curation, judging panels, and logistics for college-level hackathons. Mentored 20+ teams on scoping MVP deliverables within 24 hours.",
      badge: "Community & Culture",
      period: "2023–2024",
    },
    {
      role: "Academic Peer Tutor",
      organization: "Department of AI & Data Science",
      description:
        "Selected to mentor academically struggling junior and peer engineering students. Broke down complex data structures, algorithms, and AI math into intuitive first-principles explanations.",
      badge: "Mentorship",
      period: "2023–Present",
    },
  ],

  education: [
    {
      degree: "B.Tech in Artificial Intelligence & Data Science",
      institution: "Sona College of Technology, Salem",
      period: "2023 – 2027",
      grade: "8.52 CGPA",
      highlights: [
        "Focus on Machine Learning, Deep Learning, Generative AI Systems, Data Structures, Product Design.",
        "Consistently in the top academic tier; Department Peer Tutor & Hackathon Organizer.",
      ],
    },
    {
      degree: "Higher Secondary Certificate (HSC - Class 12)",
      institution: "St. Mary's Girls Higher Secondary School",
      period: "May 2023",
      grade: "93%",
      highlights: ["Strong foundation in Mathematics, Physics, and Computer Science."],
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC - Class 10)",
      institution: "St. Mary's Girls Higher Secondary School",
      period: "May 2021",
      grade: "100% (Centum)",
      highlights: ["Perfect academic score; School topper."],
    },
  ],

  certifications: [
    {
      title: "Design Thinking Primer",
      issuer: "NPTEL / IIT",
      focus: "Empathy mapping, problem reframing, iterative prototyping, and human-centered design.",
    },
    {
      title: "Business Analytics Certification",
      issuer: "Internshala",
      focus: "Statistical data interpretation, KPI cohort analysis, and executive dashboarding.",
    },
    {
      title: "Aspire Leadership Program",
      issuer: "Aspire Institute (Founded at Harvard)",
      focus: "Global leadership, ethical decision making, and community impact.",
    },
  ],
};
