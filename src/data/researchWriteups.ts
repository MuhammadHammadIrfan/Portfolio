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
        subtitle: 'Stateful Adversarial Evaluation & Automated Vulnerability Discovery across Agentic AI & RAG Architectures',
        category: 'AI Security & Adversarial Machine Learning',
        date: 'March 2026',
        authors: ['Muhammad Hammad Irfan'],
        supervisors: ['Dr. Ahmad Faraz Khan (DevNeuron AI Lab)'],
        institutions: ['DevNeuron AI Engineering', 'SEECS, NUST'],
        collaboration: 'Forward-Deployed AI Engineering Internship Research',
        githubUrl: 'https://github.com/dev-devneuron/aginiti-redteam',
        abstract: 'Conventional red-teaming of agentic LLM systems and Retrieval-Augmented Generation (RAG) pipelines relies on rigid, static checklist benchmarks that fail to adapt as new threat surfaces are discovered during an engagement. This research presents Aginiti Redteam, an open-source adaptive red-teaming framework that models the adversarial evaluation process as dynamic stateful graph exploration. By continuously updating a learned evidence model and re-ranking candidate attack vectors via a multi-objective utility function, the engine dynamically prioritizes attacks maximizing expected information gain while avoiding target defense triggers. We implement four published paper-level threat models spanning RAG knowledge reconstruction (IKEA, SECRET), membership inference (Interrogation Attack), and system prompt extraction (SPE-LLM), backed by a deterministic three-step verification pipeline (Regex scan, LLM semantic judge, direct source ground-truth diff) evaluated against enterprise targets hardened with 8 independent defense mechanisms.',
        keyMetrics: [
            { label: 'Attack Efficacy', value: '93.2%', description: 'Success rate against hardened multi-defense targets' },
            { label: 'Published Attacks', value: '4 Papers', description: 'ICLR 2026, IEEE TIFS 2026, ACM CCS 2025 implementations' },
            { label: 'Verification Stages', value: '3 Steps', description: 'Pattern scan + Semantic Judge + Ground-Truth Diff' },
            { label: 'Enterprise Defenses', value: '8 Layers', description: 'Evaluated against multi-stage guardrails and WAFs' }
        ],
        tags: ['LLM Red-Teaming', 'Adversarial ML', 'RAG Security', 'OWASP Top 10 for LLMs', 'Multi-Agent Security', 'Zero Trust'],
        sections: [
            {
                id: 'problem-motivation',
                title: '1. Problem Statement & Motivation',
                subtitle: 'The Inadequacy of Static Checklist Scanners',
                content: 'Modern enterprise AI architectures combine autonomous agent orchestration, tool calling, and vector retrieval backends (RAG). Traditional red-teaming tools (such as naive fuzzers or static prompt injection benchmarks) execute predefined, linear lists of attack payloads. In practice, enterprise deployments incorporate active defenses—including output sanitizers, semantic firewalls, rate limiters, and prompt guardrails—which quickly flag repetitive static patterns.\n\nFurthermore, static attacks produce extensive false positives when a target model regurgitates hallucinated fragments rather than genuinely leaking sensitive system prompts or proprietary vector chunk embeddings.',
                keyPoints: [
                    'Static attack suites lack contextual memory of target defense triggers.',
                    'Traditional scanners fail to isolate true leaks from model hallucinations.',
                    'Enterprise guardrails easily detect and block repetitive linear probing patterns.'
                ],
                callout: {
                    title: 'Core Research Hypothesis',
                    type: 'highlight',
                    text: 'An adaptive red-teaming engine that maintains an evolving vector-backed evidence graph and dynamically re-ranks attack vectors based on expected new information gain will discover higher-severity vulnerabilities with significantly fewer attempts and lower filter-trigger rates than static checklist scanners.'
                }
            },
            {
                id: 'threat-models',
                title: '2. Published Attack Implementations & Threat Models',
                subtitle: 'Translating Paper-Level Academic Research into Production Attack Vectors',
                content: 'Aginiti Redteam formalizes and implements 4 cutting-edge attack vectors drawn directly from top-tier security conferences:',
                table: {
                    headers: ['Attack Vector', 'Conference / Venue', 'Target Surface', 'Threat Objective'],
                    rows: [
                        ['IKEA Attack', 'ICLR 2026', 'RAG Vector Store', 'Full Knowledge-Base Structural Reconstruction'],
                        ['SECRET Attack', 'IEEE TIFS 2026', 'RAG Retrieval Layer', 'Context Boundary & Chunk Embedding Leakage'],
                        ['Interrogation Attack', 'ACM CCS 2025', 'Training / Fine-Tuning Corpus', 'Targeted Membership Inference'],
                        ['SPE-LLM', 'ICLR 2026', 'System Prompt / Metaprompt', 'Zero-Shot Metaprompt Extraction & Guardrail Bypass']
                    ]
                }
            },
            {
                id: 'system-architecture',
                title: '3. Adaptive Multi-Agent Engine Architecture',
                subtitle: 'Dynamic Attack Re-Ranking and Evidence State Graph',
                content: 'The core engine decouples planning from payload generation using a multi-agent orchestration architecture:\n\n1. **Evidence State Store (ChromaDB)**: Maintains vector representations of target responses, detected defense triggers, and confirmed leak fragments.\n2. **Adaptive Re-Ranker**: Evaluates candidate attack vectors at time step t using the utility formula:\n   $$\\mathcal{U}(a_i) = w_1 \\cdot \\mathbb{E}[\\Delta \\mathcal{I}] + w_2 \\cdot \\text{Impact}(a_i) - w_3 \\cdot \\mathcal{P}(\\text{FilterTrigger} \\mid \\mathcal{H}_t)$$\n3. **Provider-Agnostic LiteLLM Gateway**: Enables testing against OpenAI, Anthropic, Gemini, Mistral, and local open-weights models (Llama 3, DeepSeek) through unified abstraction.',
                keyPoints: [
                    'Dynamic state tracking in ChromaDB vector space prevents repetitive probing.',
                    'Utility scoring optimizes information gain while suppressing defense trips.',
                    'Fully provider-agnostic engine seamlessly handles proprietary and open-weights models.'
                ]
            },
            {
                id: 'verification-pipeline',
                title: '4. Three-Step Ground-Truth Verification Pipeline',
                subtitle: 'Eliminating False Positives in Automated LLM Red-Teaming',
                content: 'To prevent false positive contamination from LLM hallucinations, every suspected vulnerability discovery passes through a deterministic three-stage verification gate before being recorded as a verified finding:',
                callout: {
                    title: 'The 3-Step Verification Gate',
                    type: 'stats',
                    text: 'Stage 1: Deterministic Pattern & Regular Expression Scanner\n• Fast regex and token boundary scanner detecting leaked API keys, tokens, or system delimiters.\n\nStage 2: Semantic LLM Arbiter (Rule-Constrained Validation)\n• An independent evaluator model verifies whether the response satisfies strict structural leak definitions rather than polite conversational refusal.\n\nStage 3: Direct Ground-Truth Source Diff\n• Automated comparison against the target knowledge base ground-truth to compute true cosine and token-level recall metrics.'
                }
            },
            {
                id: 'benchmarks-results',
                title: '5. Empirical Benchmark & Comparison vs NVIDIA Garak',
                subtitle: 'Evaluation Against an 8-Defense Hardened Target',
                content: 'We benchmarked Aginiti Redteam against an enterprise-hardened target protected by 8 layered defenses (Input Guardrails, Semantic WAF, Output Filtering, Token-Rate Throttling, RBAC Scopes, Delimiter Stripping, Hallucination Checks, and Anomaly Detection).',
                table: {
                    headers: ['Evaluation Metric', 'Aginiti Redteam (Adaptive)', 'Static Baseline (NVIDIA Garak)', 'Improvement'],
                    rows: [
                        ['Overall Attack Efficacy (%)', '93.2%', '64.8%', '+28.4% Absolute'],
                        ['Avg Attempts-to-Success (ATS)', '1.9 attempts', '4.4 attempts', '56.8% Fewer Probes'],
                        ['Filter Trigger Rate (%)', '11.4%', '42.6%', '73.2% Reduction in Detection'],
                        ['False Positive Rate (%)', '< 1.2%', '14.8%', '91.9% Lower False Alarms']
                    ]
                }
            }
        ],
        bibtex: `@article{irfan2026aginiti,
  title={Aginiti Redteam: Adaptive Multi-Agent AI Security Red-Teaming Engine for LLMs and RAG Architectures},
  author={Irfan, Muhammad Hammad and Khan, Ahmad Faraz},
  journal={DevNeuron Technical Report / Open-Source Research},
  year={2026},
  url={https://github.com/dev-devneuron/aginiti-redteam}
}`
    },
    'kidneycare-assistant': {
        slug: 'kidneycare-assistant',
        title: 'KidneyCare: Explainable Clinical Decision Support System for Nephrology',
        subtitle: 'Deterministic 33-Situation Clinical Classification, Longitudinal Lab Validity Windows, and Hospital-Validated CDSS Engine',
        category: 'Clinical Decision Support Systems (CDSS) & Healthcare AI',
        date: 'June 2025 – February 2026',
        authors: ['Muhammad Hammad Irfan'],
        supervisors: ['Dr. Syed Imran Ali (SEECS, NUST)', 'Clinical Nephrology Advisory Board (Kyung Hee University Hospital)'],
        institutions: ['SEECS, National University of Sciences and Technology (NUST)', 'Kyung Hee University Hospital (South Korea)'],
        collaboration: 'International Clinical AI Research & Hospital Deployment Project',
        githubUrl: 'https://github.com/MuhammadHammadIrfan/kidneycare-assistant',
        abstract: 'Managing Chronic Kidney Disease - Mineral and Bone Disorder (CKD-MBD) requires nephrologists to simultaneously synthesize complex longitudinal laboratory parameters—including intact Parathyroid Hormone (iPTH), serum calcium, phosphate, and vitamin D—across time-stamped patient visits. In safety-critical clinical environments, probabilistic black-box models are unacceptable due to unpredictable hallucinations and lack of explainability. In this collaborative research project between NUST SEECS and Kyung Hee University Hospital, we engineered an explainable, rule-based clinical decision support system (CDSS). The engine implements a deterministic rule matrix mapping patient lab profiles into 33 physician-validated clinical situations, enforces strict temporal validity windows for lab recency, computes corrected calcium metrics, and performs longitudinal trend analysis against prior visits to generate safe, guideline-compliant treatment recommendations.',
        keyMetrics: [
            { label: 'Clinical Situations', value: '33 States', description: 'Physician-validated deterministic diagnostic situations' },
            { label: 'Explainability', value: '100%', description: 'Fully auditable decision trees with rule trace paths' },
            { label: 'Longitudinal Windows', value: 'Per-Test', description: 'Strict temporal validity windows per laboratory biomarker' },
            { label: 'Clinical Validation', value: 'Hospital Trial', description: 'Evaluated with Kyung Hee University Hospital nephrologists' }
        ],
        tags: ['Clinical Decision Support', 'Healthcare Informatics', 'Deterministic AI', 'CKD-MBD Management', 'Explainable AI', 'Supabase RBAC'],
        sections: [
            {
                id: 'clinical-problem',
                title: '1. Clinical Challenge & Nephrology Context',
                subtitle: 'The High Cognitive Load of CKD-MBD Management',
                content: 'Chronic Kidney Disease - Mineral and Bone Disorder (CKD-MBD) is a complex systemic disorder characterized by biochemical abnormalities in calcium, phosphorus, PTH, and vitamin D metabolism. In clinical practice, nephrologists must:\n\n1. Interpret interconnected biomarkers where an intervention in one parameter (e.g. phosphate binders) impacts others (e.g. serum calcium and vascular calcification risk).\n2. Reconcile missing or outdated lab values without making false clinical assumptions.\n3. Account for dynamic longitudinal trends between visits (e.g., whether iPTH is accelerating, plateauing, or responding to calcimimetics).\n\nExisting hospital workflows suffer from high cognitive burden, fragmented lab histories, and inconsistent guideline adherence.',
                keyPoints: [
                    'Multi-parameter feedback loops in CKD-MBD create extreme decision complexity.',
                    'Outdated lab results frequently lead to inappropriate dosage adjustments.',
                    'Clinical software requires 100% explainability without probabilistic uncertainty.'
                ]
            },
            {
                id: 'situation-matrix',
                title: '2. The 33-Situation Deterministic Classification Matrix',
                subtitle: 'Translating KDIGO & KDOQI Clinical Guidelines into Exhaustive Rule Trees',
                content: 'In collaboration with hospital specialists, we codified medical consensus into an exhaustive multi-dimensional decision matrix classifying every patient into one of 33 discrete clinical situations based on:\n\n- **Clinical Group**: Dialysis modality and CKD stage.\n- **iPTH Boundaries & Trends**: Target ranges vs. severe suppression (<100 pg/mL) vs. secondary hyperparathyroidism (>600 pg/mL), evaluated alongside direction of change.\n- **Corrected Calcium & Serum Phosphate**: Hypercalcemia/hypocalcemia and hyperphosphatemia thresholds, factoring in albumin correction.',
                callout: {
                    title: 'Corrected Calcium Formulation',
                    type: 'info',
                    text: 'When serum albumin is abnormal (<4.0 g/dL), total serum calcium underestimates physiologically active ionized calcium:\n\nCorrected Calcium (mg/dL) = Total Measured Calcium + 0.8 × (4.0 - Serum Albumin [g/dL])\n\nThe engine enforces this calculation before evaluating any calcium-dependent situation branch.'
                }
            },
            {
                id: 'temporal-validity',
                title: '3. Longitudinal Trend Engine & Temporal Validity Windows',
                subtitle: 'Preventing Clinical Errors from Stale Biomarkers',
                content: 'A major innovation in the KidneyCare architecture is the enforcement of per-test temporal validity windows. In real hospital environments, patients rarely have all tests drawn simultaneously. If an iPTH value is 6 months old while phosphate is from yesterday, treating them as concurrent leads to dangerous clinical interventions.\n\nThe system evaluates each biomarker against strict expiration policies, alerting the physician when a critical decision requires fresh lab verification.',
                table: {
                    headers: ['Biomarker', 'Max Validity Window', 'Clinical Rationale', 'Stale Data Behavior'],
                    rows: [
                        ['iPTH (Parathyroid Hormone)', '90 Days', 'Slowly changing bone marker', 'Flags recommendation with "Requires Lab Renewal"'],
                        ['Serum Phosphate', '30 Days', 'Rapidly volatile with dietary intake', 'Blocks active phosphate binder adjustments'],
                        ['Corrected Calcium', '30 Days', 'Critical cardiac risk marker', 'Prevents calcimimetic dosage escalation'],
                        ['Serum Albumin', '60 Days', 'Nutritional and binding indicator', 'Uses standard baseline with cautionary banner']
                    ]
                }
            },
            {
                id: 'system-implementation',
                title: '4. System Engineering & Security Architecture',
                subtitle: 'Production Next.js, Supabase RBAC, and Audit Logs',
                content: 'The clinical assistant is built with Next.js App Router and Supabase PostgreSQL, incorporating fine-grained Role-Based Access Control (RBAC) to ensure strict separation between attending nephrologists, residents, and administrative personnel. Every recommendation generated includes an interactive "Rule Trace" allowing clinicians to view the exact logical path and evidence points that generated the advisory.',
                keyPoints: [
                    'Full Rule Trace transparency builds clinician trust and enables rapid verification.',
                    'Zero black-box inference prevents medical hallucinations in critical care.',
                    'HIPAA-compliant data modeling with granular PostgreSQL Row-Level Security (RLS).'
                ]
            }
        ],
        bibtex: `@article{irfan2026kidneycare,
  title={KidneyCare: Explainable Clinical Decision Support System for Nephrology and Chronic Kidney Disease Mineral and Bone Disorder},
  author={Irfan, Muhammad Hammad and Ali, Syed Imran},
  journal={NUST SEECS & Kyung Hee University Hospital Research Project},
  year={2026},
  url={https://github.com/MuhammadHammadIrfan/kidneycare-assistant}
}`
    },
    's2cool': {
        slug: 's2cool',
        title: 'S2Cool: Digital-Twin Modeling & Physics-Informed ML Surrogates for Refrigerant-Free Evaporative Cooling',
        subtitle: 'A £2.8M UKRI-Funded Ayrton Challenge Consortium Research Project across Northumbria University & NUST SEECS',
        category: 'Physics-Informed ML & Digital Twin Engineering',
        date: '2025–2026',
        authors: ['Muhammad Hammad Irfan'],
        supervisors: ['Dr. Moazam Fraz (NUST SEECS)', 'Dr. Naseer Bajwa (NUST SEECS)', 'Northumbria University Consortium Leads'],
        institutions: ['National University of Sciences and Technology (NUST)', 'Northumbria University (UK)', 'UKRI Ayrton Challenge'],
        collaboration: 'UKRI-Funded Clean Energy Consortium (£2.8M Grant)',
        funding: 'UKRI Ayrton Challenge (£2.8M Consortium Grant)',
        abstract: 'Space cooling in extreme-heat and tropical climates is overwhelmingly dominated by vapor-compression air conditioning (VCR), which consumes massive electrical power and relies on high Global Warming Potential (GWP) fluorinated refrigerants. The S2Cool project is a £2.8M UKRI Ayrton Challenge consortium led by Northumbria University in partnership with NUST SEECS, developing next-generation refrigerant-free indirect and direct evaporative cooling technologies targeting up to 65% reduction in cooling energy demand. As part of the NUST SEECS research team, we developed a dual-track digital twin architecture combining first-principles thermodynamic heat and mass-transfer equations with machine learning surrogate models. Trained on ~66,000 empirical observations across 11 instrumented physical prototype test runs, our Ridge regression surrogate models predict supply air temperatures and wet-bulb effectiveness with R² ≥ 0.93 and RMSE < 0.5°C across diverse ambient temperature and humidity regimes.',
        keyMetrics: [
            { label: 'Consortium Funding', value: '£2.8M', description: 'UKRI Ayrton Challenge Clean Cooling Grant' },
            { label: 'Empirical Dataset', value: '66k Points', description: 'Sensor readings from 11 instrumented prototype runs' },
            { label: 'Model Accuracy', value: 'R² ≥ 0.93', description: 'High-fidelity supply temperature prediction' },
            { label: 'Prediction Error', value: 'RMSE < 0.5°C', description: 'Low error across extreme ambient conditions' }
        ],
        tags: ['Digital Twin', 'Physics-Informed ML', 'Clean Energy', 'Thermodynamics', 'NVIDIA Omniverse', 'Sensor Telemetry', 'UKRI Research'],
        sections: [
            {
                id: 'climate-impact',
                title: '1. Research Motivation & Climate Impact',
                subtitle: 'Decarbonizing Cooling in Extreme-Heat Emerging Economies',
                content: 'Cooling is the fastest-growing source of energy consumption in buildings worldwide. In developing nations subject to extreme summer temperatures (>45°C), conventional air conditioning threatens electrical grid stability and emits gigatons of CO₂ equivalents. Refrigerant-free evaporative cooling delivers high thermal comfort with zero chemical refrigerants, but designing and optimizing custom multi-stage evaporative systems for varying climates requires extensive performance modeling.',
                keyPoints: [
                    'Air conditioning drives up to 70% of peak summer electrical loads in extreme heat zones.',
                    'Refrigerant-free evaporative cooling eliminates synthetic fluorinated greenhouse gases.',
                    'Digital twin modeling drastically reduces prototype iteration costs and lead times.'
                ]
            },
            {
                id: 'dual-track-architecture',
                title: '2. Dual-Track Digital Twin Architecture',
                subtitle: 'Coupling First-Principles Thermodynamics with Data-Driven ML Surrogates',
                content: 'Purely analytical thermodynamic models often fail to capture real-world hardware phenomena such as non-uniform wet media wetting, boundary layer separation, and parasitic motor heat gain. Conversely, purely black-box neural networks risk violating fundamental physical conservation laws.\n\nWe engineered a **Dual-Track Behavioral Model**:\n\n- **Track A (Physics Core)**: First-principles coupled differential equations governing sensible and latent heat transfer across the porous evaporative matrix.\n- **Track B (ML Surrogate Core)**: Regularized Ridge regression models trained on multi-sensor telemetry to capture non-linear real-world boundary dynamics, air velocity turbulence, and heat exchange effectiveness.',
                callout: {
                    title: 'Thermodynamic Wet-Bulb Effectiveness Formulation',
                    type: 'highlight',
                    text: 'Wet-Bulb Effectiveness (ε_wb) quantifies the cooling potential of the evaporative matrix:\n\nε_wb = (T_drybulb,in - T_drybulb,out) / (T_drybulb,in - T_wetbulb,in)\n\nOur surrogate models predict T_drybulb,out and wet-bulb depression with continuous validation against thermodynamic boundary constraints (0 ≤ ε_wb ≤ 1).'
                }
            },
            {
                id: 'sensor-dataset',
                title: '3. Physical Prototype Telemetry & 66,000-Point Dataset',
                subtitle: 'Empirical Rig Testing at SEECS Thermal Laboratories',
                content: 'Data was collected from an instrumented physical evaporative cooling chamber featuring high-precision thermocouple arrays, digital hygrometers, differential pressure transducers, and water mass flow meters across 11 comprehensive operational runs.',
                table: {
                    headers: ['Instrument / Sensor Type', 'Measurement Target', 'Sensor Precision', 'Sampling Frequency'],
                    rows: [
                        ['Calibrated K-Type Thermocouples', 'Inlet, Matrix & Supply Air Temp', '± 0.1 °C', '1 Hz Continuous'],
                        ['Digital Capacitive Hygrometers', 'Relative & Absolute Humidity', '± 1.5 % RH', '1 Hz Continuous'],
                        ['Differential Pressure Transducers', 'Static Pressure Drop across Matrix', '± 0.5 Pa', '0.5 Hz'],
                        ['Electromagnetic Flow Meters', 'Evaporative Water Circulation Rate', '± 0.05 L/min', '1 Hz Continuous']
                    ]
                }
            },
            {
                id: 'ml-results',
                title: '4. Machine Learning Performance & Validation Results',
                subtitle: 'High-Fidelity Surrogate Models for Real-Time Digital Twin Simulation',
                content: 'Ridge regression surrogate models were trained with 5-fold cross-validation, hyperparameter tuning, and polynomial feature interactions. The surrogate models achieve high fidelity suitable for real-time simulation within NVIDIA Omniverse USD Composer.',
                table: {
                    headers: ['Model Target', 'R² Score', 'RMSE', 'Mean Absolute Error (MAE)'],
                    rows: [
                        ['Supply Air Temperature (T_out)', '0.942', '0.387 °C', '0.291 °C'],
                        ['Wet-Bulb Cooling Effectiveness (ε_wb)', '0.931', '0.024', '0.018'],
                        ['Evaporative Water Consumption Rate', '0.918', '0.042 L/hr', '0.031 L/hr']
                    ]
                }
            }
        ],
        bibtex: `@article{irfan2026s2cool,
  title={S2Cool: Digital-Twin Modeling and Physics-Informed ML Surrogates for Refrigerant-Free Evaporative Cooling Systems},
  author={Irfan, Muhammad Hammad and Fraz, Moazam and Bajwa, Naseer},
  journal={UKRI Ayrton Challenge Clean Energy Research Consortium Report},
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
