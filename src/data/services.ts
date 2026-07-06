export interface ServiceCategory {
  title: string;
  description: string;
  items: string[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    title: 'Information Security',
    description:
      'Assessing exposure, hardening architecture, and proving compliance where it counts.',
    items: [
      'IT Security Consulting',
      'Security Architecture and Engineering',
      'Vulnerability Management',
      'Security Assessments',
      'CMMC Assessments and Audits',
    ],
  },
  {
    title: 'Digital Transformation',
    description:
      'Modernizing infrastructure and platforms without disrupting the business running on them.',
    items: [
      'Cloud Advisory',
      'Cloud Architecture',
      'Cloud Optimization',
      'Salesforce Consulting',
    ],
  },
  {
    title: 'Data Analytics and AI',
    description:
      'Turning operational data into systems that inform decisions, not just dashboards.',
    items: ['Data Management', 'Data Engineering', 'AI Engineering'],
  },
  {
    title: 'Management Consulting',
    description:
      "Program discipline and strategic clarity for initiatives that can't afford to drift.",
    items: ['Strategy Consulting', 'Program Management', 'IT Staff Augmentation'],
  },
];
