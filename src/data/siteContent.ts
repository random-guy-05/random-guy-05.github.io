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
  seoTitle: "Arnav Mana | Clinical AI Researcher in Cardiac Critical Care",
  name: "Arnav Mana",
  eyebrow: "Clinical AI Researcher | Computational Biology | Cardiac Critical Care",
  tagline:
    "Developing clinically grounded prediction systems and translational biology models to support earlier intervention in high-risk cardiac care.",
  bio:
    "My work sits at the intersection of computational biology, translational cardiology, and clinical AI. I design models that connect physiological and molecular signals to mechanism, early recognition, and better bedside decisions.",
  thesis:
    "The strongest questions in medicine do not split computation from biology. I work where model, mechanism, and clinical consequence have to hold together.",
  collaboratorNote:
    "I am actively seeking mentors and teams working in cardiac critical care, translational biology, and predictive modeling where rigor and clinical relevance are non-negotiable.",
  heroFacts: [
    {
      label: "Current focus",
      value: "Cardiac critical care and translational modeling",
      note: "Focused on problems where earlier signal detection can change intervention timing.",
    },
    {
      label: "Working modes",
      value: "Modeling, literature synthesis, wet-lab collaboration",
      note: "Comfortable moving between analysis, scientific framing, and experimental context.",
    },
    {
      label: "Looking for",
      value: "Rigorous mentors and clinically meaningful problems",
      note: "Best fit is a setting where careful reasoning and execution are expected.",
    },
  ],
  heroHighlights: [
    { label: "Selected investigations", value: "5 live research threads" },
    { label: "Primary domains", value: "Shock prediction, HLHS signaling, CAD inflammation" },
    { label: "Operating style", value: "Structured, fast-moving, execution-focused" },
  ],
  heroPhrases: [
    "Forecasting cardiogenic shock before deterioration becomes obvious.",
    "Linking physiologic signal structure to earlier bedside action.",
    "Tracing inflammatory and glycosphingolipid pathways in cardiac disease.",
    "Building research habits that hold up under clinical scrutiny.",
  ],
  recognition: [
    {
      id: "eagle-scout",
      number: "01",
      category: "Long-horizon execution",
      title: "Eagle Scout",
      framing: "A durable signal of planning discipline, follow-through, and leadership.",
      detail:
        "This distinction reflects repeated delivery, community accountability, and the ability to carry complex work from idea to execution.",
      evidence: [
        "Built a track record of planning, coordinating, and finishing complex work.",
        "Demonstrated sustained leadership rather than one-off achievement.",
      ],
    },
    {
      id: "usabo",
      number: "02",
      category: "Scientific fluency",
      title: "USA Biology Olympiad Semifinalist",
      framing: "Evidence of advanced bioscience reasoning under national competition standards.",
      detail:
        "Advancing to the semifinal stage required command of cellular biology, genetics, physiology, and systems-level reasoning, plus the ability to solve unfamiliar problems quickly.",
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
      framing: "A strong baseline in quantitative work, scientific coursework, and independent technical study.",
      detail:
        "I treat academic performance as supporting evidence. It matters because it shows consistency, but it is strongest when paired with real research judgment and execution.",
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
      numeral: "01",
      org: "UCSF Cardiac Critical Care",
      timeframe: "Aug 2025 - Present",
      title: "Forecasting Lactate in Cardiogenic Shock",
      status: "Ongoing",
      tone: "gold",
      question:
        "Can lactate become an earlier and more interpretable warning signal for shock progression rather than a late reaction marker?",
      approach:
        "Model how hemodynamic modifiers and SHARC phenotypes shape lactate across evolving cardiac failure states, with emphasis on prediction rather than retrospective description.",
      signal:
        "The work is aimed at isolating physiologic feature combinations that become informative before overt decompensation is clinically obvious.",
      significance:
        "If successful, this turns lactate from a generic severity marker into a more precise forecasting signal for the STEMI-to-heart-failure-shock transition.",
      tools: ["Python", "PyTorch", "High-dimensional physiology", "Network analysis"],
    },
    {
      id: "hlhs-axis",
      numeral: "02",
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
      numeral: "03",
      org: "Computational Cardiology",
      timeframe: "Aug 2025 - Present",
      title: "Latent Shock Topologies with GATv2",
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
      numeral: "04",
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
      numeral: "05",
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
        "I use modeling to sharpen clinical questions, not just to optimize metrics in isolation.",
      items: ["Python", "PyTorch", "Graph learning", "Time-series modeling", "Feature interpretation"],
      tone: "gold",
    },
    {
      id: "analysis",
      title: "Quantitative analysis",
      description:
        "I work comfortably with observational data, study design, and statistical workflows that need to stand up to scrutiny.",
      items: ["R", "SQL", "Mixed-effects models", "IPTW", "Cohort analysis"],
      tone: "slate",
    },
    {
      id: "biology",
      title: "Experimental and translational biology",
      description:
        "I connect computational outputs back to biological mechanism and experimental reality.",
      items: ["RT-qPCR", "ELISA", "Gel electrophoresis", "PAGE", "Molecular pathway reasoning"],
      tone: "forest",
    },
    {
      id: "execution",
      title: "Execution and communication",
      description:
        "Strong research also depends on operating rhythm, written clarity, and moving work forward with other people.",
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
      "I helped turn Hack4Health from an idea into a partner-backed initiative connecting students, mentors, and operators around applied health AI.",
    role: "Hack4Health · Co-Founder and Co-President",
    initiatives: [
      "Built an external partner network instead of depending on school momentum alone.",
      "Created structures that made ambitious projects easier to start and finish.",
      "Turned outreach, sponsorship, mentor recruitment, and event execution into repeatable operating work.",
    ],
    outcomes: [
      {
        label: "Participants engaged across AI4Alzheimers",
        value: 1470,
        context: "Showed the program could attract and keep real participation at scale.",
      },
      {
        label: "Corporate partners secured",
        value: 20,
        suffix: "+",
        context: "Repeated outreach and credibility-building turned into actual partner support.",
      },
      {
        label: "Research mentors recruited",
        value: 20,
        context: "Built a stronger environment by recruiting mentors with significant publication experience.",
      },
      {
        label: "Annual Coder.com fiscal agreement",
        value: 3,
        prefix: "$",
        suffix: "K/yr",
        context: "A concrete example of turning relationships into stable operating support.",
      },
    ],
  },
  contact: {
    email: "arnavmana.me@gmail.com",
    phoneHref: "",
    footerEyebrow: "Open to high-rigor research collaboration",
    footerTagline:
      "If your team is advancing cardiac critical care, clinical AI, or translational biology, I would welcome the opportunity to contribute.",
    footerNote:
      "Email is the best way to connect. I work best in environments with clear standards, direct feedback, and clinically meaningful objectives.",
    actions: [
      {
        label: "Copy email",
        kind: "copy-email",
        ariaLabel: "Copy email address to clipboard",
      },
    ],
  },
};
