import type { IconName } from '../core/Icon';

export interface TimelineStep {
  title: string;
  body: string;
  /** Used instead of the number when numbered={false} — e.g. the five vetting steps. */
  icon?: IconName;
}

/**
 * Numbered or icon steps on a connecting line. Horizontal on desktop, vertical on
 * mobile; the line's flow direction mirrors under RTL.
 * @startingPoint section="Marketing" subtitle="Four-step how-it-works line with a gold emphasis" viewport="700x260"
 */
export interface StepTimelineProps {
  steps: TimelineStep[];
  orientation?: 'horizontal' | 'vertical';
  /** dark = on the navy safeguarding section. */
  tone?: 'light' | 'dark';
  /** Index of the step to emphasise with a gold marker and a slightly larger card — step 3, the free lesson. */
  emphasisIndex?: number;
  /** false swaps numbers for icons (the vetting timeline). */
  numbered?: boolean;
}
export function StepTimeline(props: StepTimelineProps): JSX.Element;
