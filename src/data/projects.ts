export interface Project {
    slug: string;
    title: string;
    category: 'Production Full-Stack Systems' | 'AI-Powered Applications' | 'Web & PWA Products' | 'Academic & Experimental Projects' | 'Research Projects';
    shortDescription: string;
    longDescription: string;
    problem: string;
    techStack: string[];
    skills: string[];
    challenges: string;
    learnings: string;
    githubUrl?: string;
    liveUrl?: string;
    images: string[];
    featured: boolean;
    hasWriteup?: boolean;
}

export const projects: Project[] = [
    {
        slug: 'stackshadow',
        title: 'StackShadow – Autonomous AI CTO Co-Pilot',
        category: 'AI-Powered Applications',
        shortDescription: 'A multi-agent AI system that connects to GitHub to autonomously map dependencies, detect vulnerabilities, and optimize infrastructure spend.',
        longDescription: 'StackShadow is an autonomous "CTO Co-Pilot" built during the Google Build with AI Hackathon (where it won 2nd place). It utilizes a custom multi-agent architecture powered by the Gemini API and GitHub APIs to automatically audit codebases. The agents work in tandem to map project dependencies, identify security vulnerabilities, and analyze infrastructure usage to recommend actionable cost-saving measures, all surfaced through a Next.js and Supabase backend.',
        problem: 'Engineering teams often lose visibility into their infrastructure stack as projects scale, leading to bloated cloud bills, unnoticed security vulnerabilities, and outdated dependencies. Manually auditing an entire codebase\'s architecture and cost footprint is time-consuming and prone to human oversight.',
        techStack: ['Next.js', 'Supabase (PostgreSQL)', 'Gemini API', 'GitHub API', 'TypeScript', 'Tailwind CSS'],
        skills: ['Multi-Agent Orchestration', 'LLM Function Calling', 'API Integration', 'Vulnerability Discovery', 'System Architecture'],
        challenges: 'The core challenge was coordinating multiple AI agents to work reliably without drifting from their objectives (Goal Hijacking). I had to implement precise LLM function calling to ensure the agents could accurately fetch, parse, and reason over real-time data from GitHub APIs without hallucinating dependencies or costs.',
        learnings: 'This project solidified my transition into specialized AI Engineering. I learned how to move beyond basic LLM wrappers to build robust, autonomous agent workflows. It gave me hands-on experience in managing agentic state, enforcing strict tool boundaries, and bridging complex external APIs with AI-driven logic.',
        githubUrl: 'https://github.com/MuhammadHammadIrfan/StackShadow',
        images: ['/projects/stackshadow/hero1.png', '/projects/stackshadow/landing1.png', '/projects/stackshadow/dashboard.png', '/projects/stackshadow/diagnoses1.png', '/projects/stackshadow/diagnoses2.png', '/projects/stackshadow/diagnoses3.png', '/projects/stackshadow/diagnoses4.png'],
        featured: true
    },
    // --- UPDATED: filed under Research Projects ---
    {
        slug: 'kidneycare-assistant',
        title: 'KidneyCare Clinical Assistant',
        category: 'Research Projects',
        shortDescription: 'An explainable clinical decision-support system for nephrology, built with Kyung Hee University Hospital, classifying patients into 33 physician-validated clinical situations.',
        longDescription: 'KidneyCare Clinical Assistant is a research-driven clinical decision support system developed as an SEECS, NUST industry project in collaboration with Kyung Hee University Hospital, supervised by Dr. Syed Imran Ali. It engineers an explainable, rule-based decision-support engine for nephrology that translates physician-validated clinical logic into deterministic classification across 33 clinical situations derived from clinical groups, PTH thresholds and trends, corrected calcium, and phosphate levels. The system handles real clinical constraints such as missing, outdated, or conflicting lab data, and performs longitudinal comparisons against each patient\'s most recent prior visit, enforcing per-test validity windows so recommendations stay grounded in genuinely comparable data.',
        problem: 'Nephrologists must interpret multiple lab values across time while managing follow-up visits and treatment decisions. Manual analysis of reports, especially when lab data is missing or outdated, increases cognitive load and risk of oversight. There was a need for a system that centralizes patient history, validates lab relevance, and supports consistent, guideline-based decision-making that is explainable enough for physicians to trust and safely override.',
        techStack: ['Next.js', 'Node.js', 'TypeScript', 'Supabase (PostgreSQL)', 'SQL', 'Role-based Access Control', 'Rule-based Clinical Logic Engine'],
        skills: ['Backend System Design', 'Healthcare Software Engineering', 'Rule-based Decision Systems', 'Explainable AI', 'Longitudinal Data Modeling', 'Collaboration with Medical Professionals'],
        challenges: 'Designing medical logic that is safe, explainable, and aligned with real hospital workflows was the biggest challenge. The system had to correctly handle edge cases such as missing tests, expired lab validity, and partial reports, while still providing useful recommendations. Translating clinical reasoning into deterministic software logic covering 33 distinct clinical situations required close iteration with nephrology instructors and careful validation against clinical groups, PTH thresholds and trends, corrected calcium, and phosphate levels.',
        learnings: 'This project provided hands-on experience in building safety-critical, explainable software. I learned how clinical decision support differs from typical applications, the importance of explainability and physician trust in medical systems, and how to convert domain expertise into structured, longitudinally-aware logic. It also strengthened my ability to collaborate with non-technical domain experts and design systems meant for real clinical use rather than demos.',
        githubUrl: 'https://github.com/MuhammadHammadIrfan/kidneycare-assistant',
        images: ['/projects/kidneycare/Doctor_screencapture-kidneycareassistant-unofficial-vercel-app-2025-09-23-19_05_12 (1).png', '/projects/kidneycare/login.png', '/projects/kidneycare/Doctor_screencapture-kidneycareassistant-unofficial-vercel-app-2025-09-23-19_05_12 (2).png', '/projects/kidneycare/Doctor_screencapture-kidneycareassistant-unofficial-vercel-app-2025-09-23-19_05_12 (3).png', '/projects/kidneycare/Doctor_screencapture-kidneycareassistant-unofficial-vercel-app-2025-09-23-19_05_12 (4).png', '/projects/kidneycare/Doctor_screencapture-kidneycareassistant-unofficial-vercel-app-2025-09-23-19_05_12 (5).png', '/projects/kidneycare/Doctor_screencapture-kidneycareassistant-unofficial-vercel-app-2025-09-23-19_05_12 (6).png', '/projects/kidneycare/Doctor_screencapture-kidneycareassistant-unofficial-vercel-app-2025-09-23-19_05_12 (7).png', '/projects/kidneycare/Doctor_screencapture-kidneycareassistant-unofficial-vercel-app-2025-09-23-19_05_12 (8).png', '/projects/kidneycare/Admin_screencapture-kidneycareassistant-unofficial-vercel-app-admin-doctors-2025-09-23-19_05_12 (1).png', '/projects/kidneycare/Admin_screencapture-kidneycareassistant-unofficial-vercel-app-admin-doctors-2025-09-23-19_17_53 (2).png'],
        featured: true,
        hasWriteup: true
    },
    {
        slug: 'hirematch',
        title: 'HireMatch',
        category: 'AI-Powered Applications',
        shortDescription: 'An AI-powered hiring platform that maps resumes to job descriptions using vector databases and generates automated skill gap analyses.',
        longDescription: 'HireMatch is an intelligent applicant tracking and matching platform developed as a Software Engineering semester project. It serves both recruiters and job seekers by utilizing vector databases to semantically search and map candidate resumes to specific job requirements. The system calculates a deterministic relevance score for each application and uses an LLM pipeline to generate personalized skill gap analyses, streamlining the hiring process and providing actionable feedback.',
        problem: 'Recruiters spend countless hours manually filtering through resumes that often lack exact keyword matches, while job seekers lack actionable feedback on why they were rejected. Traditional keyword-based ATS systems fail to understand semantic context, filtering out qualified candidates who use different terminology.',
        techStack: ['Next.js', 'TypeScript', 'Supabase (PostgreSQL)', 'PGVector', 'LLMs', 'Tailwind CSS'],
        skills: ['Vector Database Architecture', 'Semantic Search', 'LLM Pipeline Design', 'Data Flow Modeling', 'Full-Stack Development'],
        challenges: 'Integrating PGVector with Supabase to perform accurate semantic similarity searches between highly unstructured resume data and rigid job descriptions. Another major challenge was designing the AI pipeline to reliably output structured, unbiased gap analyses and scoring metrics without hallucinating candidate skills or overlooking implicit experience.',
        learnings: 'Gained hands-on engineering experience working with embeddings and vector databases in a production-like environment. I learned how to build robust semantic search functionality and architect an AI system that processes complex, real-world documents to extract structured, actionable insights rather than just generating conversational text.',
        githubUrl: 'https://github.com/MuhammadHammadIrfan/HireMatch',
        images: ['/projects/hirematch/hero1.png', '/projects/hirematch/hero2.png', '/projects/hirematch/findjobs.png', '/projects/hirematch/postjobs.png', '/projects/hirematch/see-applicants.png', '/projects/hirematch/applicants-pipeline.png'],
        featured: true
    },
    {
        slug: 'assankhata',
        title: 'AssanKhata – Multi-Business Invoicing & Management Platform',
        category: 'Web & PWA Products',
        shortDescription: 'Offline-first multi-business management and invoicing PWA with seamless background cloud sync, multi-tenant switching, and PDF billing.',
        longDescription: 'AssanKhata is an offline-first, multi-tenant Progressive Web App designed to empower small and medium businesses to manage invoicing, billing, customer and supplier ledgers, inventory, and payment tracking across multiple business profiles from a single unified dashboard. Built with an offline-first architecture using IndexedDB (Dexie.js), it allows users to create invoices and manage accounts seamlessly without an active internet connection, syncing automatically to Supabase when back online and generating professional PDF invoices.',
        problem: 'Small businesses and multi-venture owners frequently face unreliable internet connectivity, causing traditional cloud-based POS and invoicing tools to freeze mid-transaction. Additionally, owners managing multiple distinct shops or enterprises needed a clean, isolated way to manage separate books, custom invoice sequences, and customer records without switching accounts or risking data leaks.',
        techStack: ['Next.js 16', 'TypeScript', 'Supabase (PostgreSQL)', 'IndexedDB (Dexie.js)', 'Zustand', 'Tailwind CSS', 'Service Workers', 'PWA'],
        skills: ['Multi-Tenant Architecture', 'Offline-First Engineering', 'Cloud Sync Strategies', 'State Management (Zustand)', 'PostgreSQL RPC Functions & RLS', 'PDF Invoice Generation'],
        challenges: 'Architecting robust offline-first synchronization alongside multi-business data isolation. Key complexities included building a reliable sync queue that handles optimistic updates with rollback capabilities, managing isolated sequential invoice numbering per business profile, and developing PostgreSQL RPC functions that gracefully resolve bidirectional conflicts when reconciling offline transactions.',
        learnings: 'Mastered offline-first PWA design patterns, client-side caching with Dexie.js/IndexedDB, and distributed data consistency strategies. Gained in-depth experience structuring multi-tenant schemas with Supabase Row-Level Security (RLS), handling complex transactional integrity across offline queues, and engineering smooth, responsive mobile-first interfaces.',
        githubUrl: 'https://github.com/MuhammadHammadIrfan/AssanKhata',
        images: ['/projects/assankhata/landing_page.png', '/projects/assankhata/contact.png', '/projects/assankhata/dashboard.png', '/projects/assankhata/invoices.png', '/projects/assankhata/new_invoice.png', '/projects/assankhata/layout_invoice.png', '/projects/assankhata/record_payment.png', '/projects/assankhata/customers.png'],
        featured: true,
    },
    {
        slug: 'edusync',
        title: 'EduSync',
        category: 'Production Full-Stack Systems',
        shortDescription: 'A production-scale university automation platform built to streamline communication, scheduling, and academic workflows.',
        longDescription: 'EduSync is a full-stack university automation system designed to solve real operational challenges in academic institutions by centralizing faculty, student, and administrative workflows including onboarding, scheduling, attendance, events, and notifications into a single role-based platform focused on reducing manual coordination, improving communication, and scaling reliably with real institutional data.',
        problem: 'Universities often rely on fragmented or manual processes for managing students, faculty, scheduling, and communication, leading to delayed notifications, inconsistent records, duplicated effort, and poor visibility across departments.',
        techStack: ['Next.js', 'Supabase', 'PostgreSQL', 'Prisma ORM', 'Tailwind CSS', 'NextAuth.js'],
        skills: ['Full-Stack Development', 'Backend Architecture', 'Role-Based Access Control (RBAC)', 'Database Design', 'Workflow Automation', 'Production System Design'],
        challenges: 'Designing a flexible role-based system that accurately models real university hierarchies across departments, years, sections, faculty roles, and advisors while maintaining data consistency at scale, handling approval-based workflows, bulk imports, and high-volume relational data.',
        learnings: 'Gained strong hands-on experience in backend ownership and system design including structuring large schemas, building secure API layers, managing real data scale, making architecture decisions under production constraints, and coordinating a team around clear milestones.',
        githubUrl: 'https://github.com/MuhammadHammadIrfan/EduSync',
        images: ['/projects/edusync/LandingPage1.png', '/projects/edusync/LandingPage2.png', '/projects/edusync/admin_dashboard.png', '/projects/edusync/faculty_dashboard.png', '/projects/edusync/student_profile.png', '/projects/edusync/EduSync_Demo_Compressed.mp4', '/projects/edusync/Edusync_Supabase (2).jpeg', '/projects/edusync/Edusync_Prisma.jpeg'],
        featured: true,
    },
    {
        slug: 'lingomate',
        title: 'LingoMate',
        category: 'AI-Powered Applications',
        shortDescription: 'An AI-powered English speaking companion that helps users practice real conversations through voice, not just text or grammar drills.',
        longDescription: 'LingoMate is a full-stack AI-powered web application designed to help non-native English speakers improve their spoken English through real-time voice conversations. Users speak naturally, receive intelligent AI responses, and hear replies back using speech-to-text and text-to-speech technologies. The platform focuses on building fluency, confidence, and practical speaking skills rather than rote grammar learning.',
        problem: 'Many English learners, particularly in Pakistan, struggle to find affordable and judgment-free environments to practice real spoken English. Most existing language learning apps prioritize vocabulary, grammar exercises, or text-based interactions, leaving a gap for natural, real-time conversation practice that builds confidence and fluency.',
        techStack: ['React.js', 'Node.js', 'Express.js', 'Azure Speech-to-Text', 'Azure Text-to-Speech', 'Gemini (LLM)'],
        skills: ['Full Stack Web Development', 'AI & LLM Integration', 'Speech Processing', 'Real-Time Audio Handling', 'API Integration', 'Asynchronous System Design'],
        challenges: 'Implementing real-time voice interaction in the browser was a major challenge, including recording and processing audio, converting browser-generated audio blobs into Azure-compatible WAV formats, and handling strict speech API requirements. Additional complexity came from managing latency across speech recognition, AI response generation, and speech synthesis to ensure smooth, natural conversations.',
        learnings: 'This project strengthened my understanding of browser audio APIs, binary data handling, and end-to-end speech pipelines. I gained hands-on experience integrating Azure Cognitive Services and large language models, managing asynchronous workflows, and designing conversational user experiences that feel responsive and human-like.',
        githubUrl: 'https://github.com/MuhammadHammadIrfan/Lingo-Mate',
        images: ['/projects/lingomate/chat.png', '/projects/lingomate/LingoMateShortDemo.mp4'],
        featured: true
    },
    // --- NEW: Research Projects ---
    {
        slug: 'aginiti-redteam',
        title: 'Aginiti Redteam – Adaptive AI Security Red-Teaming Engine',
        category: 'Research Projects',
        shortDescription: 'An open-source adaptive red-teaming engine for agentic AI and RAG systems that implements published attack research and outperforms fixed-checklist approaches by re-ranking attacks against a learned evidence model.',
        longDescription: 'Aginiti Redteam is an open-source adaptive red-teaming engine for agentic AI and RAG systems, built as a Forward-Deployed AI Engineering Intern at DevNeuron under Dr. Ahmad Faraz Khan. Rather than following a fixed attack script, it keeps an evolving model of everything it has learned about a target and re-ranks candidate attacks at every step using a weighted scoring formula (expected new information, potential impact, prior failures), mapping every finding to the OWASP LLM Top 10. It implements four attacks drawn directly from published security research spanning three threat models: IKEA (ICLR 2026) and SECRET (IEEE TIFS 2026) for RAG knowledge-base reconstruction, the Interrogation Attack (ACM CCS 2025) for membership inference, and SPE-LLM (ICLR 2026) for system-prompt extraction. Every finding is verified through a three-step process: a plain-text scan for obvious matches, an LLM check against a specific list of what a real leak looks like, and a final direct comparison against the actual source data.',
        problem: 'Manual or fixed-checklist red-teaming of agentic AI and RAG systems is slow, generates excessive false positives from the target\'s own defenses, and does not adapt as new information about a target is uncovered. Enterprises deploying RAG and agentic systems need a systematic, reproducible way to discover real vulnerabilities mapped to recognized frameworks (OWASP LLM Top 10), with findings that are independently verified rather than taken on a single model\'s word.',
        techStack: ['Python', 'LiteLLM', 'ChromaDB', 'FastAPI', 'pytest', 'PyPI'],
        skills: ['LLM Red-Teaming', 'Adversarial Machine Learning', 'RAG Security', 'Multi-Agent Security Evaluation', 'Benchmark Design', 'OWASP LLM Top 10', 'Provider-Agnostic System Architecture'],
        challenges: 'The central challenge was designing an adaptive planner that could reason over an evolving evidence graph rather than a static script, while keeping the architecture provider-agnostic across multiple LLM backends. Verifying findings rigorously enough to avoid false positives required a three-step verification pipeline (pattern scan, LLM-based check, direct source comparison) rather than trusting a single model\'s judgment. Benchmarking against a hardened target running 8 independent defenses (access control, output filtering, rate limiting, and more) also required building a realistic enterprise-grade test environment rather than an undefended lab setup.',
        learnings: 'This project deepened my understanding of translating published, paper-level security research into working, reproducible attacks, and of designing rigorous verification pipelines that hold up against an industry-standard scanner (NVIDIA\'s garak). I gained hands-on experience with adaptive planning under uncertainty, provider-agnostic system design, and benchmarking methodology (attempts-to-success, filter-trigger rates) that produces credible, comparable evidence of real security impact.',
        githubUrl: 'https://github.com/dev-devneuron/aginiti-redteam',
        images: ['/projects/aginiti-redteam/hero1.png', '/projects/aginiti-redteam/architecture.png', '/projects/aginiti-redteam/benchmark-results.png'],
        featured: true,
        hasWriteup: true
    },
    {
        slug: 's2cool',
        title: 'S2Cool – Sustainable Cooling Research Consortium',
        category: 'Research Projects',
        shortDescription: 'Contributing to a £2.8M UKRI-funded consortium building a digital-twin model of a refrigerant-free evaporative cooling system, combining first-principles equations with ML surrogate models.',
        longDescription: 'S2Cool is a £2.8M UKRI Ayrton Challenge consortium led by Northumbria University, building a digital-twin model of a refrigerant-free evaporative cooling system targeting up to 65% lower cooling energy demand in extreme-heat climates. As part of the NUST SEECS team, supervised by Dr. Moazam Fraz and Dr. Naseer Bajwa, I am transitioning the system model toward a dual-track behavioral model that combines first-principles heat and mass-transfer equations with data-driven ML surrogate models, trained on roughly 66,000 empirical observations from 11 instrumented test runs on the physical prototype. Ridge regression surrogate models are trained per subsystem against sensor data, currently reaching R² ≥ 0.93 and RMSE < 0.5 for supply-temperature and thermal-effectiveness prediction.',
        problem: 'Conventional cooling in extreme-heat climates relies heavily on energy-intensive vapor-compression refrigeration. Refrigerant-free evaporative cooling offers major energy savings, but predicting and optimizing its performance across configurations is difficult without either expensive physical prototyping for every scenario or a validated model that captures both the underlying physics and real-world sensor behavior.',
        techStack: ['Python', 'NVIDIA Omniverse USD Composer', 'Ridge Regression', 'scikit-learn', 'Pandas'],
        skills: ['Physics-Informed Machine Learning', 'Digital Twin Modeling', 'Regression Modeling', 'Sensor Data Analysis', 'Cross-Institutional Research Collaboration'],
        challenges: 'Combining first-principles thermal equations with data-driven ML surrogates without the two producing conflicting predictions was a central challenge, as was extracting reliable signal from noisy sensor data across 11 instrumented test runs on the physical prototype. Achieving high-fidelity, per-subsystem regression performance (R² ≥ 0.93, RMSE < 0.5) required careful feature engineering under real hardware variability rather than clean simulation data.',
        learnings: 'This project gave me hands-on experience in hybrid physics-plus-ML modeling, working within a large, multi-institution international research consortium, and translating raw, noisy sensor data from a physical prototype into reliable, low-error surrogate models suitable for a production digital twin.',
        images: ['/projects/s2cool/hero1.png', '/projects/s2cool/digital-twin.png', '/projects/s2cool/regression-results.png'],
        featured: true,
        hasWriteup: true
    },
];

export function getProjectBySlug(slug: string): Project | undefined {
    return projects.find(project => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
    return projects.filter(project => project.featured);
}

export function getProjectsByCategory(category: string): Project[] {
    return projects.filter(project => project.category === category);
}

export function getResearchProjects(): Project[] {
    return projects.filter(project => project.category === 'Research Projects' || project.hasWriteup);
}
