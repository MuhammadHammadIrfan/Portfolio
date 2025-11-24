export interface Project {
    slug: string;
    title: string;
    category: 'AI + Full Stack' | 'Web Development' | 'Other CS Projects';
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
        slug: 'umeedlearn',
        title: 'UmeedLearn',
        category: 'AI + Full Stack',
        shortDescription: 'AI-powered community learning platform connecting students with mentors',
        longDescription: 'An AI-powered community learning platform that connects students with mentors and provides document-based AI learning assistance using LangChain, Hugging Face, and Gemini.',
        problem: 'Students often struggle to find quality mentors and personalized learning resources. Traditional learning platforms lack intelligent assistance and community-driven mentorship.',
        techStack: ['Next.js', 'Supabase', 'LangChain', 'Hugging Face', 'Gemini AI', 'n8n', 'PostgreSQL'],
        skills: ['Full-stack Development', 'AI Integration', 'Vector Databases', 'Workflow Automation', 'Authentication'],
        challenges: 'Implementing efficient vector search for document-based AI assistance, managing real-time mentor-student connections, and automating meeting workflows while maintaining data security.',
        learnings: 'Gained deep understanding of RAG (Retrieval Augmented Generation) systems, vector embeddings, and workflow automation. Learned to integrate multiple AI services and manage complex state in a full-stack application.',
        images: ['/projects/umeedlearn/1.png', '/projects/umeedlearn/2.png', '/projects/umeedlearn/3.png'],
        featured: true,
    },
    {
        slug: 'kidneycare-assistant',
        title: 'KidneyCare Clinical Assistant',
        category: 'AI + Full Stack',
        shortDescription: 'AI medical tool for nephrologists providing clinical decision support',
        longDescription: 'Built a real-world clinical decision support system for nephrologists to aid in clinical decisions based on lab values like iPTH, calcium, and phosphorus. Designed to handle edge cases and provide safe, logic-driven treatment recommendations.',
        problem: 'Nephrologists need to make complex clinical decisions based on multiple lab values and patient conditions. Manual analysis is time-consuming and prone to oversight, especially with edge cases like missing or outdated labs.',
        techStack: ['Node.js', 'Express.js', 'React', 'PostgreSQL', 'Medical Logic Engine'],
        skills: ['Backend Development', 'Medical Software', 'Rule-based Systems', 'Data Validation', 'Collaboration with Medical Professionals'],
        challenges: 'Implementing safe rule-based medical logic that handles edge cases (missing labs, outdated values) while ensuring treatment recommendations are medically sound. Working closely with kidney specialists to validate the system.',
        learnings: 'Learned the importance of rigorous testing in medical software, understanding of nephrology basics, and how to translate medical expertise into software logic. Developed skills in working with domain experts.',
        githubUrl: 'https://github.com/MuhammadHammadIrfan/kidneycare-assistant',
        images: ['/projects/kidneycare/1.png', '/projects/kidneycare/2.png'],
        featured: true,
    },
    {
        slug: 'edusync',
        title: 'EduSync',
        category: 'Web Development',
        shortDescription: 'Role-based university automation platform for scheduling and onboarding',
        longDescription: 'A SaaS platform automating university operations including faculty/student onboarding, scheduling, and invoicing. Improved workflow efficiency by automating repetitive administrative tasks.',
        problem: 'Universities face significant administrative overhead with manual processes for onboarding, scheduling, and invoicing. This leads to inefficiencies, errors, and wasted staff time.',
        techStack: ['Next.js', 'Supabase', 'PostgreSQL', 'Tailwind CSS', 'Prisma ORM'],
        skills: ['Full-stack Development', 'Role-based Access Control', 'Database Design', 'Automation', 'SaaS Architecture'],
        challenges: 'Designing a flexible role-based system that accommodates different university structures, implementing complex scheduling algorithms, and ensuring data consistency across multiple automated workflows.',
        learnings: 'Gained experience in building multi-tenant SaaS applications, implementing RBAC (Role-Based Access Control), and designing scalable database schemas for complex organizational hierarchies.',
        githubUrl: 'https://github.com/MuhammadHammadIrfan/EduSync',
        images: ['/projects/edusync/1.png', '/projects/edusync/2.png', '/projects/edusync/3.png'],
        featured: true,
    },
    {
        slug: 'lingomate',
        title: 'LingoMate',
        category: 'AI + Full Stack',
        shortDescription: 'AI-powered web app for improving English fluency through real-time conversations',
        longDescription: 'An interactive AI-powered web application to improve English fluency via real-time conversations. Built with React.js, integrates speech-to-text, text-to-speech, and GPT-based language models.',
        problem: 'Many non-native English speakers lack opportunities for conversational practice. Traditional language learning apps focus on vocabulary and grammar but not real-time speaking skills.',
        techStack: ['React.js', 'OpenAI GPT', 'Web Speech API', 'Node.js', 'Express.js'],
        skills: ['Frontend Development', 'AI Integration', 'Speech Processing', 'Real-time Communication', 'API Integration'],
        challenges: 'Implementing reliable speech-to-text conversion across different accents, managing real-time conversation flow with AI, and providing meaningful feedback on pronunciation and fluency.',
        learnings: 'Learned to work with browser speech APIs, integrate GPT for natural conversations, and design user experiences for real-time interactive applications.',
        githubUrl: 'https://github.com/MuhammadHammadIrfan/Lingo-Mate',
        images: ['/projects/lingomate/1.png', '/projects/lingomate/2.png'],
        featured: true,
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
