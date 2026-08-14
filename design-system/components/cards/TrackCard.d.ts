import type { IconName } from '../core/Icon';

/**
 * One of the three subjects: Somali language, Arabic, Qur'aan. Equal weight, no upsell.
 */
export interface TrackCardProps {
  title: string;
  /** One-line promise. */
  promise: string;
  /** Exactly three outcome bullets. */
  bullets?: string[];
  /** e.g. "Ages 5–15 · Complete beginners welcome". */
  ages?: string;
  icon?: IconName;
  /** blue for Somali and Arabic; gold for Qur'aan only. */
  accent?: 'blue' | 'gold';
  /** Quiet text link, e.g. "Book a free lesson in Somali". */
  ctaLabel?: string;
  onCta?: (e: React.MouseEvent) => void;
}
export function TrackCard(props: TrackCardProps): JSX.Element;
