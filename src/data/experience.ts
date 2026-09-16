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
        company: 'DevNeuron — Sunnyvale, California, US',
        period: 'Mar 2026 – Present',
        description: [
            'Building Aginiti-Redteam, an open-source adaptive red-teaming engine for agentic AI and RAG systems, implementing four attacks from peer-reviewed security research (ICLR, ACM CCS, IEEE TIFS) covering data reconstruction, membership inference, and system-prompt extraction.',
            'Designed a benchmark target with multiple independently-toggleable defense layers and validated the engine head-to-head against random and fixed-order baselines and NVIDIA\'s garak scanner, an industry-standard tool.',
            'Built a three-stage verification pipeline so no security finding is accepted on a single model\'s opinion, combining deterministic checks, LLM-based judgment, and independent confirmation against real source data.',
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
            'Validated the system against historical patient records from Kyung Hee University Hospital, confirming its recommendations were consistent with actual nephrologist decisions.',
        ],
        current: false,
    },
    {
        id: 's2cool',
        title: 'Research Contributor (Final Year Project)',
        company: 'S2Cool — UKRI Ayrton Challenge Consortium, NUST SEECS',
        period: 'Jan 2026 – Present',
        description: [
            'Contributing to a digital twin of a refrigerant-free evaporative cooling system as part of a £2.8M international UKRI-funded research consortium led by Northumbria University.',
            'Building machine learning surrogate models trained on real sensor data from physical prototype testing, combined with first-principles heat and mass-transfer modeling.',
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
