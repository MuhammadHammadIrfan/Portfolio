export interface Experience {
    id: string;
    title: string;
    company: string;
    period: string;
    description: string[];
    current: boolean;
}

export const experiences: Experience[] = [
    {
        id: 'kidneycare',
        title: 'AI & Software Developer',
        company: 'KidneyCare Clinical Assistant — SEECS, NUST',
        period: 'Jun 2025 – Present',
        description: [
            'Developed a clinical decision support system to assist nephrologists in analyzing patient data and treatment options.',
            'Implemented rule-based AI logic aligned with medical guidelines to generate safe, explainable recommendations.',
            'Designed workflows that handle missing or unreliable lab data, ensuring reliable and structured outputs for physicians.',
            'Delivered a functional MVP used for feedback and validation by instructors and kidney specialists, supporting real clinical decision-making.',
        ],
        current: true,
    },
    {
        id: 'ai-agentic',
        title: 'LLM & Agentic Automation Developer',
        company: 'Independent Research & Implementation',
        period: 'Jan 2025 – Present',
        description: [
            'Designed and implemented agent-based AI systems that combine LLM reasoning with tool usage, context retrieval, and function calling.',
            'Built end-to-end pipelines integrating Supabase (PostgreSQL and vector storage) to automate workflows across databases, APIs, and AI models.',
            'Enabled real business automation by connecting multi-system architectures into reliable AI-driven solutions.',
        ],
        current: true,
    },
    {
        id: 'askussolution',
        title: 'Web Developer Intern',
        company: 'AskUsSolution (Remote)',
        period: 'Jul 2024 – Aug 2024',
        description: [
            'Contributed to small-scale web projects, gaining practical experience with React, Node.js, REST APIs, and Git workflows.',
            'Developed frontend and backend features, learned deployment basics, and strengthened understanding of production-ready web development.',
        ],
        current: false,
    },
];

