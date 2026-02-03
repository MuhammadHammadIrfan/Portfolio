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
            'Vector DBs (PGVector)'
        ],
    },
    {
        category: 'Backend & Databases',
        skills: ['PostgreSQL', 'Supabase', 'MongoDB', 'MySQL', 'Prisma ORM', 'Redis', 'REST APIs'],
    },
    {
        category: 'Tools & DevOps',
        skills: ['Git', 'GitHub', 'Vercel', 'Firebase', 'Docker (Basic)', 'Webhooks'],
    },
    {
        category: 'Computer Science Core',
        skills: ['OOP', 'Data Structures', 'System Architecture', 'Workflow Automation', 'API Design'],
    },
    {
        category: 'Professional Skills',
        skills: [
            'System Thinking', 
            'Data Flow Modeling', 
            'Reliable AI Pipelines', 
            'Problem Solving', 
            'Technical Documentation'
        ],
    },
];