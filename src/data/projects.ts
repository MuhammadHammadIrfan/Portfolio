export interface Project {
    slug: string;
    title: string;
    category: 'Production Full-Stack Systems' | 'AI-Powered Applications' | 'Web & PWA Products' | 'Academic & Experimental Projects';
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
}

export const projects: Project[] = [
    {
        slug: 'miprinters',
        title: 'MI Printers',
        category: 'Web & PWA Products',
        shortDescription: 'Offline-first business management PWA for a printing company with cloud sync across devices',
        longDescription: 'A full-featured Progressive Web App built for a real printing business, handling invoices, customers, suppliers, and payments — all with offline-first architecture. Works without internet using IndexedDB, syncs seamlessly to Supabase when back online, and generates professional PDF invoices on any device.',
        problem: 'The client\'s printing business operates in an area with unreliable internet. Cloud-only tools would freeze mid-invoice when the connection drops, leaving customers waiting. They needed something that just works — online or offline — and stays in sync across the shop\'s devices without manual effort.',
        techStack: ['Next.js 16', 'TypeScript', 'Supabase', 'IndexedDB (Dexie.js)', 'Zustand', 'Tailwind CSS', 'Service Workers'],
        skills: ['Offline-First Architecture', 'PWA Development', 'State Management', 'Cloud Sync Strategies', 'Mobile-First UI/UX', 'PostgreSQL RPC Functions', 'PDF Generation'],
        challenges: 'The trickiest part was getting bidirectional sync right — making sure an invoice created offline on one device doesn\'t clash with one created on another, handling soft-deletes that need to propagate everywhere, and keeping invoice number sequences correct even after app reinstalls or settings changes. I also had to think carefully about what happens when someone changes their password on one device while another device still has an active session.',
        learnings: 'This project really forced me to think about data consistency in ways I hadn\'t before. Building the sync queue, handling optimistic UI updates that might need to roll back, and designing PostgreSQL functions that gracefully handle conflicts taught me a lot about real-world distributed systems — even at a small scale. I also got much better at building responsive UIs that feel native on mobile.',
        githubUrl: 'https://github.com/MuhammadHammadIrfan/MIPrinters',
        images: ['/projects/miprinters/landing_page.png','/projects/miprinters/contact.png','/projects/miprinters/dashboard.png','/projects/miprinters/invoices.png','/projects/miprinters/new_invoice.png','/projects/miprinters/layout_invoice.png','/projects/miprinters/record_payment.png','/projects/miprinters/customers.png'],
        featured: true,
    },
    {
    slug:'kidneycare-assistant',
    title:'KidneyCare Clinical Assistant',
    category:'AI-Powered Applications',
    shortDescription:'Clinical decision support system for nephrologists to manage lab reports, follow-ups, and treatment recommendations.',
    longDescription:'KidneyCare Clinical Assistant is a real-world clinical decision support system developed under academic and medical supervision. It helps nephrologists manage patient records, enter and validate lab results, track historical trends, and generate treatment and medication recommendations based on hospital-defined clinical logic. The system is designed to handle real clinical constraints such as missing, outdated, or conflicting lab data, and ensures all recommendations are structured, reviewable, and safe for physician decision-making.',
    problem:'Nephrologists must interpret multiple lab values across time while managing follow-up visits and treatment decisions. Manual analysis of reports, especially when lab data is missing or outdated, increases cognitive load and risk of oversight. There was a need for a system that centralizes patient history, validates lab relevance, and supports consistent, guideline-based decision-making.',
    techStack:['Next.js','Node.js','Supabase (PostgreSQL)','Role-based Access Control','Rule-based Clinical Logic Engine'],
    skills:['Backend System Design','Healthcare Software Engineering','Rule-based Decision Systems','Database Modeling for Clinical Data','Collaboration with Medical Professionals'],
    challenges:'Designing medical logic that is safe, explainable, and aligned with real hospital workflows was the biggest challenge. The system had to correctly handle edge cases such as missing tests, expired lab validity, and partial reports, while still providing useful recommendations. Translating clinical reasoning into deterministic software logic required close iteration with nephrology instructors and careful validation.',
    learnings:'This project provided hands-on experience in building safety-critical software. I learned how clinical decision support differs from typical applications, the importance of explainability in medical systems, and how to convert domain expertise into structured logic. It also strengthened my ability to collaborate with non-technical domain experts and design systems meant for real clinical use rather than demos.',
    githubUrl:'https://github.com/MuhammadHammadIrfan/kidneycare-assistant',
    images:['/projects/kidneycare/Doctor_screencapture-kidneycareassistant-unofficial-vercel-app-2025-09-23-19_05_12 (1).png','/projects/kidneycare/login.png','/projects/kidneycare/Doctor_screencapture-kidneycareassistant-unofficial-vercel-app-2025-09-23-19_05_12 (2).png','/projects/kidneycare/Doctor_screencapture-kidneycareassistant-unofficial-vercel-app-2025-09-23-19_05_12 (3).png','/projects/kidneycare/Doctor_screencapture-kidneycareassistant-unofficial-vercel-app-2025-09-23-19_05_12 (4).png','/projects/kidneycare/Doctor_screencapture-kidneycareassistant-unofficial-vercel-app-2025-09-23-19_05_12 (5).png','/projects/kidneycare/Doctor_screencapture-kidneycareassistant-unofficial-vercel-app-2025-09-23-19_05_12 (6).png','/projects/kidneycare/Doctor_screencapture-kidneycareassistant-unofficial-vercel-app-2025-09-23-19_05_12 (7).png','/projects/kidneycare/Doctor_screencapture-kidneycareassistant-unofficial-vercel-app-2025-09-23-19_05_12 (8).png','/projects/kidneycare/Admin_screencapture-kidneycareassistant-unofficial-vercel-app-admin-doctors-2025-09-23-19_05_12 (1).png','/projects/kidneycare/Admin_screencapture-kidneycareassistant-unofficial-vercel-app-admin-doctors-2025-09-23-19_17_53 (2).png'],
    featured:true
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
        techStack: ['React.js','Node.js','Express.js','Azure Speech-to-Text','Azure Text-to-Speech','Gemini (LLM)'],
        skills: ['Full Stack Web Development','AI & LLM Integration','Speech Processing','Real-Time Audio Handling','API Integration','Asynchronous System Design'],
        challenges: 'Implementing real-time voice interaction in the browser was a major challenge, including recording and processing audio, converting browser-generated audio blobs into Azure-compatible WAV formats, and handling strict speech API requirements. Additional complexity came from managing latency across speech recognition, AI response generation, and speech synthesis to ensure smooth, natural conversations.',
        learnings: 'This project strengthened my understanding of browser audio APIs, binary data handling, and end-to-end speech pipelines. I gained hands-on experience integrating Azure Cognitive Services and large language models, managing asynchronous workflows, and designing conversational user experiences that feel responsive and human-like.',
        githubUrl: 'https://github.com/MuhammadHammadIrfan/Lingo-Mate',
        images: ['/projects/lingomate/chat.png','/projects/lingomate/LingoMateShortDemo.mp4'],
        featured: true
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
