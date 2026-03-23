export type AccentTone = "gold" | "slate" | "indigo" | "forest" | "rose";

export interface HeroFact {
  label: string;
  value: string;
  note: string;
}

export interface HeroHighlight {
  label: string;
  value: string;
}

export interface EvidenceMetric {
  value: string;
  label: string;
}

export interface RecognitionItem {
  id: string;
  number: string;
  category: string;
  title: string;
  framing: string;
  detail: string;
  evidence: string[];
  metrics?: EvidenceMetric[];
}

export interface ProjectItem {
  id: string;
  numeral: string;
  org: string;
  timeframe: string;
  title: string;
  status: "Ongoing" | "Complete";
  tone: AccentTone;
  question: string;
  approach: string;
  signal: string;
  significance: string;
  tools: string[];
}

export interface CapabilityGroup {
  id: string;
  title: string;
  description: string;
  items: string[];
  tone: AccentTone;
}

export interface LeadershipOutcome {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  context: string;
}

export interface ContactAction {
  label: string;
  href?: string;
  kind: "copy-email" | "link";
  ariaLabel: string;
}

export interface SiteContent {
  seoTitle: string;
  name: string;
  eyebrow: string;
  tagline: string;
  bio: string;
  thesis: string;
  collaboratorNote: string;
  heroFacts: HeroFact[];
  heroHighlights: HeroHighlight[];
  heroPhrases: string[];
  recognition: RecognitionItem[];
  projects: ProjectItem[];
  capabilities: CapabilityGroup[];
  leadership: {
    headlineValue: number;
    headlinePrefix: string;
    headlineSuffix: string;
    headlineLabel: string;
    summary: string;
    role: string;
    initiatives: string[];
    outcomes: LeadershipOutcome[];
  };
  contact: {
    email: string;
    phoneHref: string;
    footerEyebrow: string;
    footerTagline: string;
    footerNote: string;
    actions: ContactAction[];
  };
}

export const siteContent: SiteContent = {
  seoTitle: "Arnav Mana | Clinical AI Researcher",
  name: "Arnav Mana",
  eyebrow: "Clinical AI Researcher | Computational Biology | Cardiac Critical Care",
  tagline: "Building clinically grounded prediction systems for earlier intervention in high-risk cardiac care.",
  bio: "My work sits at the intersection of computational biology, translational cardiology, and clinical AI. I am interested in how physiological and molecular signals can be modeled with enough discipline to improve early recognition, sharpen mechanistic hypotheses, and support more timely decision-making in acute care.",
  thesis:
    "The most useful research questions in medicine are rarely only computational or only biological. I try to work where the model, the mechanism, and the clinical consequence need to be understood together.",
  collaboratorNote:
    "I am especially drawn to mentors and teams working on cardiac critical care, translational biology, and clinically meaningful prediction problems where rigor matters more than novelty theatre.",
  heroFacts: [
    {
      label: "Current lane",
      value: "Cardiac critical care + translational modeling",
      note: "Focusing on problems where earlier signal detection can change intervention timing.",
    },
    {
      label: "Working modes",
      value: "Prediction, literature synthesis, wet-lab collaboration",
      note: "Comfortable moving between technical analysis, scientific framing, and experimental context.",
    },
    {
      label: "Looking for",
      value: "Rigorous mentors and clinically meaningful problems",
      note: "Most interested in environments where careful reasoning and execution are expected.",
    },
  ],
  heroHighlights: [
    { label: "Selected investigations", value: "5 active research threads" },
    { label: "Primary domains", value: "Shock prediction, HLHS biology, CAD inflammation" },
    { label: "Operating style", value: "Structured, fast-learning, execution-focused" },
  ],
  heroPhrases: [
    "Modeling early deterioration in cardiogenic shock.",
    "Connecting physiological signal structure to bedside intervention windows.",
    "Studying inflammatory and glycosphingolipid pathways in cardiac disease.",
    "Building research habits that hold up under clinical scrutiny.",
  ],
  recognition: [
    {
      id: "eagle-scout",
      number: "01",
      category: "Long-horizon execution",
      title: "Eagle Scout",
      framing:
        "A durable signal of follow-through, planning discipline, and leadership over time.",
      detail:
        "This distinction reflects more than a single milestone. It captures repeated delivery, community accountability, and the ability to carry work from idea to execution in environments that require consistency rather than short bursts of performance.",
      evidence: [
        "Built a track record of planning, coordinating, and finishing complex work.",
        "Demonstrated sustained leadership rather than isolated achievement.",
      ],
    },
    {
      id: "usabo",
      number: "02",
      category: "Scientific fluency",
      title: "USA Biology Olympiad Semifinalist",
      framing:
        "Evidence of advanced bioscience reasoning under competitive national standards.",
      detail:
        "Advancing to the semifinal stage required strong command of cellular biology, genetics, physiology, and systems-level reasoning, along with the ability to work quickly through unfamiliar scientific problems.",
      evidence: [
        "Comfort with advanced biology content beyond routine coursework.",
        "Strong performance in high-pressure analytical settings.",
      ],
    },
    {
      id: "academic-foundation",
      number: "03",
      category: "Quantitative foundation",
      title: "Academic record with range",
      framing:
        "A strong baseline in quantitative work, scientific coursework, and independent technical study.",
      detail:
        "I treat academic performance as supporting evidence rather than the headline. It matters because it shows consistency, but it is most valuable when paired with real research judgment and execution.",
      evidence: [
        "Coursework spanning calculus, biology, chemistry, and statistics.",
        "Independent exposure to computation and AI through MIT OpenCourseWare.",
      ],
      metrics: [
        { value: "1570", label: "SAT on first attempt" },
        { value: "4.67", label: "Weighted GPA" },
      ],
    },
  ],
  projects: [
    {
      id: "lactate-architecture",
      numeral: "Chapter I",
      org: "UCSF Cardiac Critical Care",
      timeframe: "Aug 2025 - Present",
      title: "Redefining the Predictive Architecture of Lactate",
      status: "Ongoing",
      tone: "gold",
      question:
        "Can lactate become an earlier and more interpretable warning signal for shock progression rather than a late reaction marker?",
      approach:
        "Model interactions among hemodynamic modifiers and SHARC phenotypes to understand how lactate behaves across evolving cardiac failure states, with emphasis on prediction rather than retrospective description.",
      signal:
        "The work is aimed at isolating combinations of physiologic features that become informative before overt decompensation is clinically obvious.",
      significance:
        "If successful, this reframes lactate from a generic severity marker into a more precise forecasting signal for the STEMI-to-heart-failure-shock transition.",
      tools: ["Python", "PyTorch", "High-dimensional physiology", "Network analysis"],
    },
    {
      id: "hlhs-axis",
      numeral: "Chapter II",
      org: "CU Anschutz School of Medicine",
      timeframe: "May 2024 - Present",
      title: "Glycosphingolipid-Cytokine Axis in HLHS",
      status: "Ongoing",
      tone: "slate",
      question:
        "Which signaling relationships may help explain severity and progression in hypoplastic left heart syndrome?",
      approach:
        "Pair computational pathway reasoning with RT-qPCR and ELISA-informed validation to examine the interplay between glycosphingolipid signaling and inflammatory cascades.",
      signal:
        "The project focuses on whether specific pathway interactions are consistently associated with more severe structural and inflammatory patterns.",
      significance:
        "This creates a tighter bridge between computational interpretation and experimentally grounded biological hypotheses in congenital heart disease.",
      tools: ["RT-qPCR", "ELISA", "Pathway analysis", "Translational biology"],
    },
    {
      id: "physiograph",
      numeral: "Chapter III",
      org: "Computational Cardiology",
      timeframe: "Aug 2025 - Present",
      title: "Latent Topologies of Cardiogenic Shock via GATv2",
      status: "Ongoing",
      tone: "indigo",
      question:
        "Can graph attention models surface earlier latent structure in cardiogenic shock than conventional staging systems?",
      approach:
        "Use graph attention over high-fidelity hemodynamic time series to capture relational patterns that standard sequential summaries may miss.",
      signal:
        "The target is better early-stage separation of clinically meaningful shock states before deterioration becomes easier to classify with coarse staging alone.",
      significance:
        "The project explores whether a graph-native view of physiology can improve both early detection and the interpretability of transition dynamics in shock.",
      tools: ["GATv2", "PyTorch", "Time-series physiology", "Representation learning"],
    },
    {
      id: "hypoxia-shield",
      numeral: "Chapter IV",
      org: "Clinical Outcomes Analysis",
      timeframe: "Aug 2025 - Present",
      title: "Chronic Intermittent Hypoxia and the Metabolic Shield",
      status: "Ongoing",
      tone: "forest",
      question:
        "Does chronic intermittent hypoxia from OSA produce measurable protective effects after cardiac arrest?",
      approach:
        "Analyze a 2,653-patient cohort with weighting and mixed-effects methods to evaluate whether prior hypoxic exposure is associated with reduced mortality after arrest.",
      signal:
        "The central question is whether a reproducible ischemic-tolerance pattern is visible in real-world outcome data rather than only in theory.",
      significance:
        "This work matters because it tests a clinically consequential hypothesis about endogenous protection using population-scale evidence.",
      tools: ["R", "IPTW", "Mixed-effects models", "Outcomes analysis"],
    },
    {
      id: "cytokine-cad",
      numeral: "Chapter V",
      org: "Pathophysiology Review",
      timeframe: "Mar 2024 - Nov 2025",
      title: "Cytokine Networks in Coronary Artery Disease",
      status: "Complete",
      tone: "rose",
      question:
        "Where do inflammatory signaling networks in coronary artery disease appear mechanistically fragile or therapeutically underexplored?",
      approach:
        "Synthesize more than 150 papers to map cytokine interactions, identify recurring failure points, and clarify how inflammatory pathways relate to disease progression.",
      signal:
        "The review highlights persistent patterns in immune signaling architecture that may help organize future targeted intervention work.",
      significance:
        "This project strengthened my ability to turn a large literature base into a structured mechanistic map rather than a loose summary of findings.",
      tools: ["Literature synthesis", "Network mapping", "CAD pathophysiology", "Scientific writing"],
    },
  ],
  capabilities: [
    {
      id: "computation",
      title: "Computation and modeling",
      description:
        "I use modeling as a way to ask better clinical questions, not just to optimize metrics in isolation.",
      items: ["Python", "PyTorch", "Graph learning", "Time-series modeling", "Feature interpretation"],
      tone: "gold",
    },
    {
      id: "analysis",
      title: "Quantitative analysis",
      description:
        "Comfortable with observational data, study design logic, and statistical workflows that need to stand up to scrutiny.",
      items: ["R", "SQL", "Mixed-effects models", "IPTW", "Cohort analysis"],
      tone: "slate",
    },
    {
      id: "biology",
      title: "Experimental and translational biology",
      description:
        "I value the ability to connect computational outputs back to biological mechanism and experimental reality.",
      items: ["RT-qPCR", "ELISA", "Gel electrophoresis", "PAGE", "Molecular pathway reasoning"],
      tone: "forest",
    },
    {
      id: "execution",
      title: "Execution and communication",
      description:
        "Strong research work also depends on operating rhythm, written clarity, and the ability to move projects forward with other people.",
      items: ["Scientific writing", "Literature synthesis", "Partner outreach", "Mentor coordination", "Project delivery"],
      tone: "indigo",
    },
  ],
  leadership: {
    headlineValue: 100000,
    headlinePrefix: "$",
    headlineSuffix: "+",
    headlineLabel: "mobilized across sponsorships, prize support, and operating resources for Hack4Health",
    summary:
      "I helped build Hack4Health from an idea into a partner-backed initiative that connected students, mentors, and operators around applied health and AI work.",
    role: "Hack4Health · Co-Founder and Co-President",
    initiatives: [
      "Built an external partner network rather than relying on internal school momentum alone.",
      "Created structures that made ambitious projects easier for other students to enter and finish.",
      "Focused on operational follow-through: outreach, sponsorship, mentor recruitment, and event execution.",
    ],
    outcomes: [
      {
        label: "Participants engaged across AI4Alzheimers",
        value: 1470,
        context: "Evidence that the program was able to attract real interest and sustained participation at scale.",
      },
      {
        label: "Corporate partners secured",
        value: 20,
        suffix: "+",
        context: "Partnership development required repeated outreach, credibility building, and operational clarity.",
      },
      {
        label: "Research mentors recruited",
        value: 20,
        context: "Built a stronger intellectual environment by bringing in mentors with substantial publication experience.",
      },
      {
        label: "Annual Coder.com fiscal agreement",
        value: 3,
        prefix: "$",
        suffix: "K/yr",
        context: "A concrete example of turning relationship-building into stable operating support.",
      },
    ],
  },
  contact: {
    email: "arnavmana.me@gmail.com",
    phoneHref: "tel:+14086561171",
    footerEyebrow: "Open to serious research conversations",
    footerTagline:
      "If you lead work in cardiac critical care, clinical AI, or translational biology, I would welcome the opportunity to contribute thoughtfully, learn fast, and do reliable work.",
    footerNote:
      "Email is the best starting point. I am most useful in environments that value rigor, clear feedback, and clinically meaningful questions.",
    actions: [
      {
        label: "Copy email",
        kind: "copy-email",
        ariaLabel: "Copy email address to clipboard",
      },
      {
        label: "Call",
        href: "tel:+14086561171",
        kind: "link",
        ariaLabel: "Call phone number",
      },
    ],
  },
};
