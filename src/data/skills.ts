export interface SkillCategory {
    category: string;
    skills: string[];
}

export const skillsData: SkillCategory[] = [
    {
        category: 'Programming Languages',
        skills: ['JavaScript', 'Python', 'C', 'C++', 'Java'],
    },
    {
        category: 'Backend',
        skills: ['Node.js', 'Express.js', 'REST APIs'],
    },
    {
        category: 'Frontend',
        skills: ['React.js', 'Next.js', 'Tailwind CSS'],
    },
    {
        category: 'Databases',
        skills: ['PostgreSQL', 'MySQL', 'Supabase', 'MongoDB'],
    },
    {
        category: 'DevOps/Tools',
        skills: ['Git', 'GitHub', 'Vercel', 'Firebase', 'Prisma ORM', 'AWS (Basic)'],
    },
    {
        category: 'Soft Skills',
        skills: ['Communication', 'Requirement Analysis', 'Self-Motivated', 'Team Collaboration'],
    },
];
