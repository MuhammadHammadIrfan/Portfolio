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
        shortDescription: 'Offline-first invoice management system for a printing business with cloud sync',
        longDescription: 'A Progressive Web App (PWA) invoice management system built for a printing business, featuring offline-first architecture with IndexedDB, real-time cloud synchronization with Supabase, and owner-only authentication for secure business operations.',
        problem: 'Small printing businesses need a reliable invoicing system that works even without internet connectivity. Traditional cloud-only solutions fail in areas with unstable network, leading to lost sales and frustrated customers waiting for invoice generation.',
        techStack: ['Next.js 16', 'TypeScript', 'Supabase', 'IndexedDB (Dexie.js)', 'Zustand', 'Tailwind CSS', 'Service Workers'],
        skills: ['Offline-First Architecture', 'PWA Development', 'State Management', 'Cloud Sync Strategies', 'Mobile-First UI/UX', 'SQL Functions'],
        challenges: 'Implementing bidirectional sync between IndexedDB and Supabase while handling conflicts, preventing duplicate invoice numbers across offline sessions, implementing soft-delete that persists across devices, and managing invoice number sequences that continue correctly even after settings changes or app reinstalls.',
        learnings: 'Mastered offline-first architecture patterns including optimistic UI updates, sync queues for pending changes, and conflict resolution strategies. Learned to design robust cloud functions (PostgreSQL/Supabase RPC) that handle edge cases like duplicate keys and soft deletes. Gained experience in PWA service worker registration and mobile-responsive design.',
        githubUrl: 'https://github.com/MuhammadHammadIrfan/MIPrinters',
        images: ['/projects/miprinters/landing_page.png','/projects/miprinters/contact.png','/projects/miprinters/dashboard.png','/projects/miprinters/invoices.png','/projects/miprinters/new_invoice.png','/projects/miprinters/layout_invoice.png','/projects/miprinters/record_payment.png','/projects/miprinters/customers.png'],
        featured: true,
    },
    {
        slug: 'kidneycare-assistant',
        title: 'KidneyCare Clinical Assistant',
        category: 'AI-Powered Applications',
        shortDescription: 'AI medical tool for nephrologists providing clinical decision support',
        longDescription: 'Built a real-world clinical decision support system for nephrologists to aid in clinical decisions based on lab values like iPTH, calcium, and phosphorus. Designed to handle edge cases and provide safe, logic-driven treatment recommendations.',
        problem: 'Nephrologists need to make complex clinical decisions based on multiple lab values and patient conditions. Manual analysis is time-consuming and prone to oversight, especially with edge cases like missing or outdated labs.',
        techStack: ['Node.js', 'Express.js', 'Next.js', 'PostgreSQL', 'Medical Logic Engine'],
        skills: ['Backend Development', 'Medical Software', 'Rule-based Systems', 'Data Validation', 'Collaboration with Medical Professionals'],
        challenges: 'Implementing safe rule-based medical logic that handles edge cases (missing labs, outdated values) while ensuring treatment recommendations are medically sound. Working closely with kidney specialists to validate the system.',
        learnings: 'Learned the importance of rigorous testing in medical software, understanding of nephrology basics, and how to translate medical expertise into software logic. Developed skills in working with domain experts.',
        githubUrl: 'https://github.com/MuhammadHammadIrfan/kidneycare-assistant',
        images: ['/projects/kidneycare/Doctor_screencapture-kidneycareassistant-unofficial-vercel-app-2025-09-23-19_05_12 (1).png', '/projects/kidneycare/login.png', '/projects/kidneycare/Doctor_screencapture-kidneycareassistant-unofficial-vercel-app-2025-09-23-19_05_12 (2).png', '/projects/kidneycare/Doctor_screencapture-kidneycareassistant-unofficial-vercel-app-2025-09-23-19_05_12 (3).png', '/projects/kidneycare/Doctor_screencapture-kidneycareassistant-unofficial-vercel-app-2025-09-23-19_05_12 (4).png', '/projects/kidneycare/Doctor_screencapture-kidneycareassistant-unofficial-vercel-app-2025-09-23-19_05_12 (5).png', '/projects/kidneycare/Doctor_screencapture-kidneycareassistant-unofficial-vercel-app-2025-09-23-19_05_12 (6).png', '/projects/kidneycare/Doctor_screencapture-kidneycareassistant-unofficial-vercel-app-2025-09-23-19_05_12 (7).png', '/projects/kidneycare/Doctor_screencapture-kidneycareassistant-unofficial-vercel-app-2025-09-23-19_05_12 (8).png', '/projects/kidneycare/Admin_screencapture-kidneycareassistant-unofficial-vercel-app-admin-doctors-2025-09-23-19_05_12 (1).png', '/projects/kidneycare/Admin_screencapture-kidneycareassistant-unofficial-vercel-app-admin-doctors-2025-09-23-19_17_53 (2).png'],
        featured: true,
    },
    {
        slug: 'edusync',
        title: 'EduSync',
        category: 'Production Full-Stack Systems',
        shortDescription: 'Role-based university automation platform for scheduling and onboarding',
        longDescription: 'A SaaS platform automating university operations including faculty/student onboarding, scheduling, and invoicing. Improved workflow efficiency by automating repetitive administrative tasks.',
        problem: 'Universities face significant administrative overhead with manual processes for onboarding, scheduling, and invoicing. This leads to inefficiencies, errors, and wasted staff time.',
        techStack: ['Next.js', 'Supabase', 'PostgreSQL', 'Tailwind CSS', 'Prisma ORM'],
        skills: ['Full-stack Development', 'Role-based Access Control', 'Database Design', 'Automation', 'SaaS Architecture'],
        challenges: 'Designing a flexible role-based system that accommodates different university structures, implementing complex scheduling algorithms, and ensuring data consistency across multiple automated workflows.',
        learnings: 'Gained experience in building multi-tenant SaaS applications, implementing RBAC (Role-Based Access Control), and designing scalable database schemas for complex organizational hierarchies.',
        githubUrl: 'https://github.com/MuhammadHammadIrfan/EduSync',
        images: ['/projects/edusync/LandingPage1.png', '/projects/edusync/LandingPage2.png', '/projects/edusync/admin_dashboard.png', '/projects/edusync/faculty_dashboard.png', '/projects/edusync/student_profile.png', '/projects/edusync/EduSync_Demo_Compressed.mp4', '/projects/edusync/Edusync_Supabase (2).jpeg', '/projects/edusync/Edusync_Prisma.jpeg'],
        featured: true,
    },
    {
        slug: 'lingomate',
        title: 'LingoMate',
        category: 'AI-Powered Applications',
        shortDescription: 'AI-powered conversational English practice with real-time speech processing.',
        longDescription:
            'LingoMate is a full-stack AI-powered conversational English practice platform. It enables users to speak with an AI in real time using speech-to-text, intelligent responses, and text-to-speech. Designed to help non-native speakers build fluency, confidence, and interview readiness through natural conversation.',

        problem:
            'Millions of learners—especially in Pakistan—lack affordable, structured, and real conversational English practice. Existing apps focus heavily on grammar drills, written exercises, or text chat rather than real spoken conversation and feedback.',

        techStack: [
            'React.js',
            'Node.js',
            'Express.js',
            'Azure Speech-to-Text',
            'Azure Text-to-Speech',
            'Gemini (LLM)'
        ],

        skills: [
            'Full Stack Development',
            'AI Integration',
            'Speech Recognition',
            'Real-Time Audio Processing',
            'API Design & Integration',
            'State Management'
        ],

        challenges:
            'Handling real-time audio recording in the browser, converting audio blobs to valid WAV buffers, ensuring compatibility with Azure STT, managing delays in speech processing, and integrating LLM responses smoothly with TTS playback.',

        learnings:
            'Gained experience with browser MediaRecorder API, base64 audio encoding/decoding, Azure Cognitive Services, LLM integration, and designing natural conversational flows. Improved understanding of handling asynchronous audio pipelines end-to-end.',

        githubUrl: 'https://github.com/MuhammadHammadIrfan/Lingo-Mate',

        images: [
            '/projects/lingomate/chat.png',
            '/projects/lingomate/LingoMateShortDemo.mp4'
        ],

        featured: false
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
