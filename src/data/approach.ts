export interface ApproachPhase {
  number: string;
  title: string;
  description: string;
}

export const approachPhases: ApproachPhase[] = [
  {
    number: '01',
    title: 'Assess',
    description:
      "We start by understanding your environment as it actually operates, not as it's documented — systems, dependencies, and where the real risk sits.",
  },
  {
    number: '02',
    title: 'Plan',
    description:
      'A scoped, sequenced plan tied to your constraints: budget, timeline, staffing, and what can and cannot change in production.',
  },
  {
    number: '03',
    title: 'Execute',
    description:
      'Work happens with your team, not around it. Regular checkpoints, clear ownership, no black-box delivery.',
  },
  {
    number: '04',
    title: 'Verify',
    description:
      'Findings are validated, not assumed. Every engagement ends with evidence of what changed and why it holds up.',
  },
];
