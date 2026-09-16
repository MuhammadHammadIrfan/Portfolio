export interface SkillCategory {
    category: string;
    skills: string[];
}

export const skillsData: SkillCategory[] = [
    {
        category: 'Core Stack',
        skills: ['Node.js', 'Python', 'Next.js', 'React', 'TypeScript', 'Express.js'],
    },
    {
        category: 'AI Engineering & Security',
        skills: [
            'Multi-Agent Orchestration',
            'LLM Function Calling',
            'Vector DBs',
            'LLM Security & Red-Teaming',
            'OWASP Top 10 for LLMs',
            'Embeddings',
            'LiteLLM',
            'Automated Pipelines'
        ],
    },
    {
        category: 'Research & ML Systems',
        skills: ['PyTorch', 'scikit-learn', 'NumPy', 'Pandas', 'Matplotlib', 'Seaborn'],
    },
    {
        category: 'Backend & Databases',
        skills: ['PostgreSQL', 'Supabase', 'MongoDB', 'Redis', 'Prisma ORM', 'REST APIs & Webhooks', 'RBAC & Row-Level Security'],
    },
    {
        category: 'Cloud & Infrastructure',
        skills: ['Git / GitHub', 'Docker', 'AWS', 'Vercel', 'Firebase', 'CI/CD Pipelines'],
    },
    {
        category: 'Architecture & Engineering',
        skills: [
            'System Architecture',
            'Zero Trust Architecture',
            'Data Flow Modeling',
            'Scalable Backend Design',
            'Technical Documentation'
        ],
    }
];