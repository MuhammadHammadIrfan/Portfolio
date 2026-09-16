export interface ResearchMetric {
    label: string;
    value: string;
    description: string;
}

export interface ResearchCallout {
    title: string;
    type: 'info' | 'highlight' | 'warning' | 'stats';
    text: string;
    details?: string[];
}

export interface ResearchTable {
    headers: string[];
    rows: string[][];
}

export interface ResearchSection {
    id: string;
    title: string;
    subtitle?: string;
    content: string;
    keyPoints?: string[];
    callout?: ResearchCallout;
    table?: ResearchTable;
    codeSnippet?: {
        language: string;
        title?: string;
        code: string;
    };
}

export interface ResearchWriteup {
    slug: string;
    title: string;
    subtitle: string;
    category: string;
    date: string;
    authors: string[];
    supervisors: string[];
    institutions: string[];
    collaboration?: string;
    funding?: string;
    githubUrl?: string;
    liveUrl?: string;
    abstract: string;
    keyMetrics: ResearchMetric[];
    tags: string[];
    sections: ResearchSection[];
    bibtex: string;
}

export const researchWriteups: Record<string, ResearchWriteup> = {
    'aginiti-redteam': {
        slug: 'aginiti-redteam',
        title: 'Aginiti Redteam: Adaptive Multi-Agent AI Security Red-Teaming Engine',
        subtitle: 'Evidence-Graph-Driven Adversarial Evaluation of Agentic AI & RAG Architectures',
        category: 'AI Security & Adversarial Machine Learning',
        date: 'March 2026',
        authors: ['Muhammad Hammad Irfan'],
        supervisors: ['Dr. Ahmad Faraz Khan (DevNeuron)'],
        institutions: ['DevNeuron'],
        collaboration: 'Forward-Deployed AI Engineering Internship Research',
        githubUrl: 'https://github.com/dev-devneuron/aginiti-redteam',
        abstract: 'Conventional red-teaming of agentic LLM systems and Retrieval-Augmented Generation (RAG) pipelines relies on rigid, static checklist benchmarks that fail to adapt as new information about a target is discovered during an engagement. This research presents Aginiti Redteam, an open-source adaptive red-teaming framework that models the adversarial evaluation process as reasoning over a persistent evidence graph. Every signal a target reveals becomes a graded claim that reshapes which attack the engine tries next, rather than following a fixed script. We implement four attacks directly from published, peer-reviewed security research spanning three threat models: RAG knowledge-base reconstruction (IKEA, SECRET), document-level membership inference in the retrieval corpus (Interrogation Attack), and system-prompt extraction (SPE-LLM). Every finding passes through a three-stage verification pipeline (deterministic text scan, LLM judge against a specific list of what a real leak looks like, and a final direct comparison against real source data) before being reported, so no result is accepted on a single model\'s opinion alone.',
        keyMetrics: [
            { label: 'Fewer Attempts', value: '~5x', description: 'Adaptive planner needed 9.7 attempts on average vs. 50.7 for fixed-order selection, on a target with 8 defense layers' },
            { label: 'Published Attacks', value: '4 Papers', description: 'ICLR 2026, IEEE TIFS 2026, ACM CCS 2025 methodologies implemented from source' },
            { label: 'Verification Stages', value: '3 Steps', description: 'Deterministic scan, LLM judge, independent ground-truth comparison' },
            { label: 'Enterprise Defenses', value: '8 Layers', description: 'Benchmarked against a target with RBAC, output redaction, rate limiting, and more' }
        ],
        tags: ['LLM Red-Teaming', 'Adversarial ML', 'RAG Security', 'OWASP Top 10 for LLMs', 'Multi-Agent Security'],
        sections: [
            {
                id: 'problem-motivation',
                title: '1. Problem Statement & Motivation',
                subtitle: 'The Limits of Static Checklist Scanners',
                content: 'Modern enterprise AI architectures combine autonomous agent orchestration, tool calling, and vector retrieval backends (RAG). Traditional red-teaming tools execute predefined, linear lists of attack payloads. In practice, enterprise deployments incorporate active defenses — including output filters, rate limiters, and prompt guardrails — which can flag repetitive, static probing patterns.\n\nJust as importantly, a security finding is only as trustworthy as its verification: a single LLM asked whether an attack succeeded is a documented source of false positives, so findings need independent confirmation, not just detection.',
                keyPoints: [
                    'Static attack suites lack a memory of what a target has already revealed or blocked.',
                    'A single LLM\'s judgment of "did this attack work" is not sufficient evidence on its own.',
                    'Enterprise guardrails can detect and block repetitive, linear probing patterns.'
                ],
                callout: {
                    title: 'Core Research Approach',
                    type: 'highlight',
                    text: 'An adaptive red-teaming engine that maintains an evolving model of what it has learned about a target, and re-ranks candidate attacks at every step based on expected new information and prior outcomes, should reach the same findings with fewer attempts and lower defense-trigger rates than fixed-order or random attack selection — validated head-to-head against honest baselines, not just asserted.'
                }
            },
            {
                id: 'threat-models',
                title: '2. Published Attack Implementations & Threat Models',
                subtitle: 'Implementing Peer-Reviewed Security Research as Working Attacks',
                content: 'Aginiti Redteam implements 4 attacks drawn directly from peer-reviewed security venues, each from the paper\'s own methodology:',
                table: {
                    headers: ['Attack', 'Venue', 'Target Surface', 'Threat Objective'],
                    rows: [
                        ['IKEA', 'ICLR 2026', 'RAG Knowledge Base', 'Verbatim knowledge-base reconstruction via benign, natural-sounding queries — no jailbreak required'],
                        ['SECRET', 'IEEE TIFS 2026', 'RAG Knowledge Base', 'Jailbreak-calibrated exploration (global exploration + local exploitation) to systematically harvest unseen documents'],
                        ['Interrogation Attack', 'ACM CCS 2025', 'RAG Retrieval Corpus', 'Document-level membership inference — confirms whether a specific known document exists in the corpus, via calibrated yes/no probing'],
                        ['SPE-LLM', 'ICLR 2026', 'System Prompt', 'System-prompt extraction via three fixed, non-adaptive probe templates']
                    ]
                }
            },
            {
                id: 'system-architecture',
                title: '3. Adaptive Engine Architecture',
                subtitle: 'Evidence-Graph-Driven Attack Selection',
                content: 'The core engine separates planning from payload generation:\n\n1. **Evidence Store (ChromaDB)**: Maintains a persistent, evolving model of everything learned about a target — responses, defense triggers, and confirmed findings.\n2. **Adaptive Ranker**: At every step, scores all currently-eligible attacks using a weighted formula combining multiple factors — expected new information, potential impact, and prior failures — rather than a fixed priority list or random choice.\n3. **Provider-Agnostic LiteLLM Gateway**: Enables testing across different LLM providers through one unified interface, rather than being hardcoded to a single vendor.',
                keyPoints: [
                    'Persistent evidence tracking prevents redundant, repetitive probing.',
                    'Multi-factor scoring balances exploring new ground against following up on promising leads.',
                    'Provider-agnostic design avoids vendor lock-in for the attacker-side LLM.'
                ]
            },
            {
                id: 'verification-pipeline',
                title: '4. Three-Stage Verification Pipeline',
                subtitle: 'Reducing False Positives in Automated Red-Teaming',
                content: 'A single LLM\'s opinion is not treated as sufficient evidence. Every suspected finding passes through three independent stages before being recorded:',
                callout: {
                    title: 'The 3-Stage Verification Gate',
                    type: 'stats',
                    text: 'Stage 1: Deterministic text scan\n• A plain pattern/string check for obvious matches, requiring no model at all.\n\nStage 2: LLM judge against enumerated claims\n• An independent model scores the response against a specific, concrete list of what a real leak would look like — not an open-ended "was this bad?" question.\n\nStage 3: Direct source comparison\n• A final, non-LLM check comparing the suspected leaked content directly against real source data to confirm a genuine match.'
                }
            },
            {
                id: 'benchmarks-results',
                title: '5. Benchmark Results',
                subtitle: 'Evaluated Against Honest Baselines and an Industry-Standard Scanner',
                content: 'The planner was benchmarked against random and fixed-order attack selection on a target running 8 independent defense layers (RBAC-scoped retrieval, output redaction, rate limiting, per-persona memory, a system-prompt guardrail, an input-filter classifier, session/auth expiry, and RBAC-scoped tool-calling), with an equal request budget and a fresh target process per trial.',
                table: {
                    headers: ['Metric', 'Adaptive Planner', 'Fixed-Order Baseline', 'Result'],
                    rows: [
                        ['Avg. prompts to reach the same findings', '9.7', '50.7', '~5x fewer requests for identical outcomes'],
                        ['Avg. times blocked by the target\'s input filter', '0.7', '40.7', 'Adaptive planner steers around dead ends rather than brute-forcing through them']
                    ]
                },
                callout: {
                    title: 'Comparison Against NVIDIA garak',
                    type: 'info',
                    text: 'Run through the identical gateway and target as garak, the most widely used open-source LLM vulnerability scanner: on every directly comparable category (system-prompt extraction, jailbreak, indirect injection, markdown exfiltration), both tools reported exactly 0% ASR — full agreement, with neither tool producing a false positive against a well-defended target. Where this project goes further is structural, not a percentage improvement: garak\'s interface can only observe text in, text out, with no way to confirm a real tool invocation or network egress — exactly where the strongest confirmed findings against independently-built targets (e.g. AnythingLLM, a 19-agent multi-protocol test fleet) actually live.'
                }
            }
        ],
        bibtex: `@misc{irfan2026aginiti,
  title={Aginiti Redteam: Adaptive Red-Teaming Engine for Agentic AI and RAG Systems},
  author={Irfan, Muhammad Hammad},
  howpublished={Open-source software, DevNeuron},
  year={2026},
  url={https://github.com/dev-devneuron/aginiti-redteam}
}`
    },
    'kidneycare-assistant': {
        slug: 'kidneycare-assistant',
        title: 'KidneyCare: Explainable Clinical Decision Support System for Nephrology',
        subtitle: 'Deterministic 33-Situation Clinical Classification and Longitudinal Lab Validity Handling',
        category: 'Clinical Decision Support Systems (CDSS) & Healthcare AI',
        date: 'June 2025 – February 2026',
        authors: ['Muhammad Hammad Irfan'],
        supervisors: ['Dr. Syed Imran Ali (SEECS, NUST)'],
        institutions: ['SEECS, National University of Sciences and Technology (NUST)', 'Kyung Hee University Hospital (South Korea) — collaborating domain-knowledge partner'],
        collaboration: 'Industry Project in collaboration with Kyung Hee University Hospital',
        githubUrl: 'https://github.com/MuhammadHammadIrfan/kidneycare-assistant',
        abstract: 'Managing Chronic Kidney Disease – Mineral and Bone Disorder (CKD-MBD) requires nephrologists to synthesize interdependent laboratory parameters — including intact Parathyroid Hormone (iPTH), serum calcium, and phosphate — across time-stamped patient visits, where correcting one biomarker frequently affects another. In safety-critical clinical contexts, black-box probabilistic models are difficult to justify due to a lack of explainability and auditability. In this project, developed with SEECS, NUST in collaboration with nephrologists at Kyung Hee University Hospital, we engineered a deterministic, rule-based clinical decision support system. The engine classifies patients into one of 33 physician-validated clinical situations, enforces validity windows on lab recency so outdated results cannot silently influence a recommendation, computes corrected calcium from serum albumin, and compares current results against a patient\'s most recent prior visit to support longitudinal, guideline-informed treatment recommendations.',
        keyMetrics: [
            { label: 'Clinical Situations', value: '33 States', description: 'Physician-validated deterministic classification derived from clinical group, PTH, calcium, and phosphate categories' },
            { label: 'Design Principle', value: 'Fully Explainable', description: 'Every recommendation is traceable to the specific rule and situation that produced it — no black-box prediction' },
            { label: 'Validity Windows', value: 'Per-Test', description: 'Each lab type enforces its own validity window before a result can inform a recommendation' },
            { label: 'Validation', value: 'Historical Records', description: 'Rule engine validated against historical patient records from Kyung Hee University Hospital' }
        ],
        tags: ['Clinical Decision Support', 'Healthcare Informatics', 'Deterministic AI', 'CKD-MBD Management', 'Explainable AI'],
        sections: [
            {
                id: 'clinical-problem',
                title: '1. Clinical Challenge & Nephrology Context',
                subtitle: 'The Cognitive Load of CKD-MBD Management',
                content: 'Chronic Kidney Disease – Mineral and Bone Disorder (CKD-MBD) involves interconnected biochemical abnormalities in calcium, phosphorus, and PTH metabolism. In practice, nephrologists must:\n\n1. Interpret interdependent biomarkers, where an intervention on one parameter (e.g. a phosphate binder) can affect another (e.g. serum calcium).\n2. Work around missing or outdated lab values without making unsupported clinical assumptions.\n3. Track longitudinal trends between visits — for example, whether iPTH is rising, stable, or responding to treatment.\n\nManual review of fragmented lab histories under these constraints carries real cognitive load and risk of oversight.',
                keyPoints: [
                    'Multi-parameter feedback loops in CKD-MBD create real decision complexity.',
                    'Outdated lab results can lead to inappropriate treatment adjustments if used uncritically.',
                    'Clinical decision-support software needs to be explainable, not just accurate.'
                ]
            },
            {
                id: 'situation-matrix',
                title: '2. The 33-Situation Classification Matrix',
                subtitle: 'Translating Physician-Validated Clinical Logic into Deterministic Rules',
                content: 'Working from clinical guidelines, rule matrices, and heuristic decision boundaries provided by nephrologists at Kyung Hee University Hospital, the clinical space was formalized into 33 discrete situations based on:\n\n- **Clinical Group**: derived from broader diagnostic classification.\n- **iPTH Thresholds and Trends**: target range vs. suppressed vs. elevated, evaluated alongside the direction of change from the prior visit.\n- **Corrected Calcium and Serum Phosphate**: threshold-based categories, with calcium corrected for serum albumin.',
                callout: {
                    title: 'Corrected Calcium Formula',
                    type: 'info',
                    text: 'A standard clinical adjustment used when serum albumin is abnormal, since total measured calcium underestimates physiologically active calcium in that case:\n\nCorrected Calcium (mg/dL) = Total Measured Calcium + 0.8 × (4.0 − Serum Albumin [g/dL])\n\nThe engine applies this correction before evaluating any calcium-dependent branch of the rule matrix.'
                }
            },
            {
                id: 'temporal-validity',
                title: '3. Longitudinal Trend Handling & Lab Validity Windows',
                subtitle: 'Preventing Stale Data From Silently Influencing a Recommendation',
                content: 'Patients rarely have every lab test drawn on the same schedule — iPTH is typically tested far less frequently than calcium or phosphate. Treating a months-old iPTH value as current alongside a same-day phosphate result risks a misleading combined read. The system tracks each lab type against its own validity window, and flags a recommendation as needing a fresh draw when a relevant value has expired, rather than silently proceeding on stale data.',
                callout: {
                    title: 'Note on specific validity-window lengths',
                    type: 'warning',
                    text: 'Exact day-count thresholds per test type are implementation-specific — confirm the real values from the codebase before publishing specific numbers here, rather than listing placeholder figures.'
                }
            },
            {
                id: 'system-implementation',
                title: '4. System Engineering',
                subtitle: 'Next.js, Supabase, and Role-Based Access',
                content: 'The clinical assistant is built with Next.js and Supabase (PostgreSQL), with role-based access control separating doctor and administrative workflows. Every generated recommendation is traceable back to the specific rule and clinical situation that produced it, and a physician can review, override, and re-save a recommendation without creating duplicate records, using an upsert-based persistence model.',
                keyPoints: [
                    'Rule-level traceability lets a physician inspect exactly why a recommendation was generated.',
                    'Deterministic logic avoids the unpredictability of a black-box model in a safety-critical context.',
                    'Row-Level Security policies scope data access appropriately by role.'
                ]
            }
        ],
        bibtex: `@misc{irfan2026kidneycare,
  title={KidneyCare: Explainable Clinical Decision Support System for Nephrology},
  author={Irfan, Muhammad Hammad},
  howpublished={SEECS, NUST — Industry Project with Kyung Hee University Hospital},
  year={2026},
  url={https://github.com/MuhammadHammadIrfan/kidneycare-assistant}
}`
    },
    's2cool': {
        slug: 's2cool',
        title: 'S2Cool: Digital-Twin Modeling for Refrigerant-Free Evaporative Cooling',
        subtitle: 'A £2.8M UKRI-Funded Ayrton Challenge Consortium Research Project',
        category: 'Applied ML & Digital Twin Engineering',
        date: '2026 – Present',
        authors: ['Muhammad Hammad Irfan'],
        supervisors: ['Dr. Moazam Fraz (NUST SEECS)', 'Dr. Naseer Bajwa (NUST SEECS)'],
        institutions: ['National University of Sciences and Technology (NUST)', 'Northumbria University (UK) — consortium lead', '12+ additional UK and Pakistani partner institutions'],
        collaboration: 'UKRI Ayrton Challenge Consortium',
        funding: 'UK Research and Innovation (UKRI), Ayrton Challenge Programme — £2.8M consortium grant',
        abstract: 'Space cooling in extreme-heat climates is dominated by vapor-compression air conditioning, which carries a heavy electrical load and relies on high-GWP refrigerants. S2Cool is a £2.8M UKRI Ayrton Challenge consortium, led by Northumbria University with NUST SEECS among 12+ UK and Pakistani partner institutions, developing a refrigerant-free evaporative cooling system targeting up to 65% lower cooling energy demand. As part of the NUST SEECS team, this ongoing work contributes to the project\'s digital twin: a dual-track behavioral model combining first-principles heat and mass-transfer equations with data-driven ML surrogate models, trained on roughly 66,000 empirical observations from 11 instrumented test runs on the physical prototype. Current Ridge regression surrogate models reach an R² of at least 0.93 and an RMSE under 0.5 for supply-temperature and thermal-effectiveness prediction — figures that reflect current, ongoing progress rather than a finalized result.',
        keyMetrics: [
            { label: 'Consortium Funding', value: '£2.8M', description: 'UKRI Ayrton Challenge Programme' },
            { label: 'Empirical Dataset', value: '~66k Points', description: 'Sensor readings from 11 instrumented prototype test runs' },
            { label: 'Model Accuracy (current)', value: 'R² ≥ 0.93', description: 'Supply-temperature and thermal-effectiveness prediction — ongoing work, not finalized' },
            { label: 'Prediction Error (current)', value: 'RMSE < 0.5', description: 'Across tested ambient temperature and humidity conditions' }
        ],
        tags: ['Digital Twin', 'Applied Machine Learning', 'Clean Energy', 'Sustainable Cooling', 'UKRI Research'],
        sections: [
            {
                id: 'climate-impact',
                title: '1. Research Motivation',
                subtitle: 'Reducing Cooling Energy Demand in Extreme-Heat Climates',
                content: 'Cooling is one of the fastest-growing sources of energy demand in buildings, and extreme summer temperatures in regions like South Asia (exceeding 52°C) place heavy strain on electrical grids reliant on conventional refrigerant-based air conditioning. Refrigerant-free evaporative cooling offers a path to substantially lower energy demand without synthetic refrigerants, but designing and validating such systems across varied climates requires extensive performance modeling — motivating a digital-twin approach rather than physical prototyping alone.',
                keyPoints: [
                    'Conventional air conditioning drives significant peak electrical demand in extreme-heat regions.',
                    'Refrigerant-free evaporative cooling avoids high-GWP synthetic refrigerants.',
                    'Digital-twin modeling reduces the cost and time of physical prototype iteration.'
                ]
            },
            {
                id: 'dual-track-architecture',
                title: '2. Dual-Track Digital Twin Architecture',
                subtitle: 'Combining First-Principles Modeling with Data-Driven Surrogates',
                content: 'Purely analytical thermodynamic models can miss real-world hardware effects such as uneven wetting of the evaporative matrix or airflow non-uniformity. A purely data-driven model, on the other hand, risks fitting patterns that don\'t respect real physical constraints. The project combines both:\n\n- **First-principles track**: heat and mass-transfer equations governing the evaporative cooling process.\n- **ML surrogate track**: Ridge regression models trained on real sensor telemetry to capture behavior the analytical model alone doesn\'t fully account for.',
                callout: {
                    title: 'Wet-Bulb Effectiveness',
                    type: 'highlight',
                    text: 'A standard psychrometric measure of an evaporative cooler\'s performance:\n\nε_wb = (T_dry-bulb,in − T_dry-bulb,out) / (T_dry-bulb,in − T_wet-bulb,in)\n\nSurrogate models predict outlet dry-bulb temperature, from which effectiveness is derived and checked against the physical bound 0 ≤ ε_wb ≤ 1.'
                }
            },
            {
                id: 'sensor-dataset',
                title: '3. Physical Prototype Data',
                subtitle: '~66,000 Empirical Observations from 11 Test Runs',
                content: 'Data was collected from physical, sensor-instrumented test runs on the prototype cooling bench in London, across varying ambient temperature and humidity conditions, producing roughly 6,000 data points per component run and approximately 66,000 observations in total.',
                keyPoints: [
                    'Real sensor data, not simulated data, underlies the surrogate models.',
                    'Testing spans varying ambient temperature and humidity conditions.',
                    'Exact instrument specifications are not listed here — confirm real sensor/precision details from the lab setup before publishing specific hardware specs.'
                ]
            },
            {
                id: 'ml-results',
                title: '4. Current Model Performance',
                subtitle: 'Ongoing Work — Figures Reflect Current Progress',
                content: 'Ridge regression surrogate models are trained per subsystem (humidifier, wet channel, dry channel) against real sensor data. Current results reach an R² of at least 0.93 and an RMSE under 0.5 for supply-temperature and thermal-effectiveness prediction. As this is an active, ongoing research project, these figures represent current progress rather than a final, published result, and will be updated as work continues.',
                keyPoints: [
                    'Results are reported at the aggregate level (R² ≥ 0.93, RMSE < 0.5) rather than with false per-metric precision, since the work is still in progress.',
                    'Multiple modeling approaches were evaluated per subsystem, with Ridge regression performing best so far.'
                ]
            }
        ],
        bibtex: `@misc{irfan2026s2cool,
  title={S2Cool: Digital-Twin Modeling for Refrigerant-Free Evaporative Cooling (Ongoing)},
  author={Irfan, Muhammad Hammad},
  howpublished={NUST SEECS, UKRI Ayrton Challenge Consortium},
  year={2026}
}`
    }
};

export function getWriteupBySlug(slug: string): ResearchWriteup | undefined {
    return researchWriteups[slug];
}

export function getAllResearchWriteups(): ResearchWriteup[] {
    return Object.values(researchWriteups);
}
