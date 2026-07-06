export interface ServiceCategory {
  title: string;
  image: string;
  items: string[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    title: 'Information Security',
    image: '/images/information-security.jpg',
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
    image: '/images/digital-transformation.jpg',
    items: [
      'Cloud Advisory',
      'Cloud Architecture',
      'Cloud Optimization',
      'Salesforce Consulting',
    ],
  },
  {
    title: 'Data Analytics and AI',
    image: '/images/data-analytics-ai.jpg',
    items: ['Data Management', 'Data Engineering', 'AI Engineering'],
  },
  {
    title: 'Management Consulting',
    image: '/images/management-consulting.jpg',
    items: ['Strategy Consulting', 'Program Management', 'IT Staff Augmentation'],
  },
];
