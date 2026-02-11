export interface SkillCategory {
    category: string;
    skills: string[];
}

export const skillsData: SkillCategory[] = [
    {
        category: 'Core Stack',
        skills: ['Node.js', 'Python', 'Next.js', 'React', 'Express.js', 'TypeScript'],
    },
    {
        category: 'AI & Automation',
        skills: [
            'LLM Function Calling', 
            'Agentic Workflows', 
            'LangChain', 
            'LlamaIndex', 
            'n8n', 
            'Prompt Engineering', 
            'Vector DBs (PGVector)', 
            'Automated Pipelines'
        ],
    },
    {
        category: 'Backend & Databases',
        skills: ['PostgreSQL', 'Supabase', 'MongoDB', 'MySQL', 'Redis', 'Prisma ORM', 'REST APIs'],
    },
    {
        category: 'Cloud & Tools',
        skills: ['Git', 'GitHub', 'Vercel', 'Firebase', 'Docker (Basic)', 'AWS (Basic)', 'Webhooks', 'CI/CD Basics'],
    },
    {
        category: 'Computer Science Fundamentals',
        skills: ['OOP', 'Data Structures', 'System Architecture', 'API Design', 'Workflow Modeling'],
    },
    {
        category: 'Professional & Engineering Skills',
        skills: ['System Thinking','Architecture Design','API Design Principles','Scalable Backend Design','Problem Solving','Clean Code Practices','Technical Documentation'],
    },

];

