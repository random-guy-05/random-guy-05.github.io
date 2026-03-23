export type AccentTone = "gold" | "slate" | "indigo" | "forest" | "rose";

export interface HeroFact {
  label: string;
  value: string;
}

export interface RecognitionItem {
  id: string;
  number: string;
  org: string;
  title: string;
  pull?: string;
  detail?: string;
  statBlocks?: Array<{ value: string; label: string }>;
  footer?: string;
}

export interface ProjectItem {
  id: string;
  numeral: string;
  org: string;
  timeframe: string;
  title: string;
  summary: string;
  status: "Ongoing" | "Complete";
  tone: AccentTone;
}

export interface SkillRow {
  direction: "left" | "right";
  items: string[];
  italicEveryOther?: boolean;
}

export interface LeadershipStat {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
}

export interface ContactAction {
  label: string;
  href?: string;
  kind: "copy-email" | "link";
  ariaLabel: string;
}

export interface SiteContent {
  seoTitle: string;
  eyebrow: string;
  name: string;
  tagline: string;
  bio: string;
  heroFacts: HeroFact[];
  heroPhrases: string[];
  recognition: RecognitionItem[];
  projects: ProjectItem[];
  skills: SkillRow[];
  leadership: {
    headlineValue: number;
    headlinePrefix: string;
    headlineSuffix: string;
    headlineLabel: string;
    role: string;
    stats: LeadershipStat[];
  };
  contact: {
    email: string;
    phoneHref: string;
    footerTagline: string;
    actions: ContactAction[];
  };
}

export const siteContent: SiteContent = {
  seoTitle: "Arnav Mana | Clinical AI Researcher",
  eyebrow: "Computational Biology & Clinical AI",
  name: "Arnav Mana",
  tagline: "The heart speaks in data. I translate.",
  bio: "I work at the intersection of computational biology, cardiac critical care, and predictive modeling, translating high-dimensional physiological signals into earlier clinical insight and sharper intervention strategy.",
  heroFacts: [
    { label: "Based in", value: "Los Gatos, CA" },
    { label: "Pursuing", value: "MD / PhD trajectory" },
    { label: "Focus", value: "Cardiac critical care + molecular biology" },
  ],
  heroPhrases: [
    "Redefining the predictive architecture of lactate in cardiogenic shock.",
    "Building GATv2 models for earlier shock detection.",
    "Mapping cytokine networks in coronary artery disease.",
    "Studying HLHS through glycosphingolipid signaling.",
    "Investigating ischemic tolerance in OSA patient cohorts.",
  ],
  recognition: [
    {
      id: "eagle-scout",
      number: "01",
      org: "Boy Scouts of America · Class of 2027",
      title: "Eagle Scout",
      pull: "One of ten youngest Eagle Scouts in a century.",
      detail:
        "Earned one of the rarest distinctions in the organization’s modern history through sustained leadership, community infrastructure work, and long-horizon execution.",
    },
    {
      id: "usabo",
      number: "02",
      org: "Center for Excellence in Education · 2025",
      title: "USA Biology Olympiad Semifinalist",
      pull: "Nationally competitive in advanced biosystems reasoning.",
      detail:
        "Advanced to the national qualifying stage, demonstrating fluency in cellular biology, physiology, genetics, and system-level scientific problem solving.",
    },
    {
      id: "academics",
      number: "03",
      org: "Los Gatos High School · Class of 2028",
      title: "Strong across the board",
      statBlocks: [
        { value: "1570", label: "SAT on first attempt" },
        { value: "4.67", label: "Weighted GPA" },
      ],
      footer:
        "AP Calculus BC · AP Biology · AP Chemistry · AP Statistics · MIT OCW: Computation & AI",
    },
  ],
  projects: [
    {
      id: "lactate-architecture",
      numeral: "No. I",
      org: "UCSF Cardiac Critical Care",
      timeframe: "Aug 2025",
      title: "Redefining the Predictive Architecture of Lactate",
      summary:
        "Engineering network analyses around hemodynamic modifiers and SHARC phenotypes to reposition lactate from a reactionary marker into an earlier precision forecast for STEMI-to-heart-failure-shock transition.",
      status: "Ongoing",
      tone: "gold",
    },
    {
      id: "hlhs-axis",
      numeral: "No. II",
      org: "CU Anschutz School of Medicine",
      timeframe: "May 2024",
      title: "Glycosphingolipid-Cytokine Axis in HLHS",
      summary:
        "Tracing the molecular interplay between glycosphingolipid signaling and cytokine cascades to better understand severity drivers in hypoplastic left heart syndrome using computational and wet-lab validation workflows.",
      status: "Ongoing",
      tone: "slate",
    },
    {
      id: "physiograph",
      numeral: "No. III",
      org: "Computational Cardiology",
      timeframe: "Aug 2025",
      title: "Latent Topologies of Cardiogenic Shock via GATv2",
      summary:
        "Designing a graph attention framework over high-fidelity hemodynamic time series to surface latent shock signatures earlier than baseline staging approaches permit.",
      status: "Ongoing",
      tone: "indigo",
    },
    {
      id: "hypoxia-shield",
      numeral: "No. IV",
      org: "Clinical Outcomes Analysis",
      timeframe: "Aug 2025",
      title: "Chronic Intermittent Hypoxia & the Metabolic Shield",
      summary:
        "Analyzing 2,653 cardiac arrest cases with weighting and mixed-effects modeling to test whether OSA-associated hypoxia confers measurable post-arrest protection.",
      status: "Ongoing",
      tone: "forest",
    },
    {
      id: "cytokine-cad",
      numeral: "No. V",
      org: "Pathophysiology Review",
      timeframe: "Mar 2024 – Nov 2025",
      title: "Cytokine Networks in Coronary Artery Disease",
      summary:
        "Systematically mapping inflammatory signaling in coronary artery disease across more than 150 publications to isolate mechanistic bottlenecks and therapeutic candidates.",
      status: "Complete",
      tone: "rose",
    },
  ],
  skills: [
    {
      direction: "left",
      italicEveryOther: true,
      items: ["Python", "PyTorch", "R", "MATLAB", "Swift", "SQL", "JavaScript", "HTML & CSS"],
    },
    {
      direction: "right",
      italicEveryOther: true,
      items: ["RT-qPCR", "Gel Electrophoresis", "ELISA Assays", "PAGE", "Quantitative PCR"],
    },
  ],
  leadership: {
    headlineValue: 100000,
    headlinePrefix: "$",
    headlineSuffix: "+",
    headlineLabel: "raised in operational sponsorships and prize distributions for Hack4Health",
    role: "Hack4Health · Co-Founder & Co-President",
    stats: [
      { label: "Participants across AI4Alzheimers", value: 1470 },
      { label: "Corporate partners secured", value: 20, suffix: "+" },
      { label: "Research mentors recruited", value: 20 },
      { label: "Annual Coder.com fiscal agreement", value: 3, prefix: "$", suffix: "K/yr" },
    ],
  },
  contact: {
    email: "arnavmana.me@gmail.com",
    phoneHref: "tel:+14086561171",
    footerTagline: "Computational biology, cardiac critical care, and predictive architectures for earlier intervention.",
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
