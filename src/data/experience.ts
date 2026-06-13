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
        id: 'devneuron',
        title: 'Forward-Deployed AI Engineering Intern',
        company: 'DevNeuron',
        period: 'Mar 2026 – Present',
        description: [
            'Auditing enterprise agentic systems against the OWASP Top 10 framework to identify and mitigate critical architectural risks like Excessive Agency and Goal Hijacking.',
            'Developing open-source SAST modules to automate structural security mapping, tool boundary validation, and Zero Trust compliance across multi-agent orchestrations.',
        ],
        current: true,
    },
    {
        id: 'kidneycare',
        title: 'AI & Software Developer',
        company: 'KidneyCare Clinical Assistant — SEECS, NUST',
        period: 'Jun 2025 – Feb 2026',
        description: [
            'Developed a clinical decision support system to assist nephrologists in analyzing patient data and treatment options.',
            'Implemented rule-based AI logic aligned with medical guidelines to generate safe, explainable recommendations.',
            'Designed workflows that handle missing or unreliable lab data, ensuring reliable and structured outputs for physicians.',
            'Delivered a functional MVP used for feedback and validation by instructors and kidney specialists, supporting real clinical decision-making.',
        ],
        current: false,
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

