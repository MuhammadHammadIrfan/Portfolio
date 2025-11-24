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
        company: 'KidneyCare Clinical Assistant (Industry Project) — SEECS, NUST',
        period: 'Jun 2025 – Present',
        description: [
            'Built a clinical decision support system under the supervision of a senior SEECS instructor in collaboration with medical professionals.',
            'Implemented safe rule-based medical logic for nephrologists using real lab values (iPTH, calcium, phosphorus).',
            'Designed system to handle edge cases, missing labs, and generate safe treatment recommendations.',
            'Delivered a functional MVP used for real feedback from instructors and kidney specialists.',
        ],
        current: true,
    },
    {
        id: 'askussolution',
        title: 'Web Developer Intern',
        company: 'AskUsSolution (Remote)',
        period: 'Jul 2024 – Aug 2024',
        description: [
            'Worked as a remote web development intern focusing on frontend and backend fundamentals.',
            'Collaborated with the team on small-scale projects and improved understanding of React, Node.js, and Git-based workflows.',
            'Gained hands-on experience with REST APIs, UI development, and deployment basics.',
        ],
        current: false,
    },
];
