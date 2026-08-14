/**
 * The single most important element on the site: the glowing free-first-lesson
 * call to action. Four glow layers — aurora bloom, rotating conic ring, gradient
 * face with inner highlight, idle pulse + shimmer. Premium and confident, never
 * neon. Everything is tunable from the --cta-* custom properties.
 */
export interface FreeLessonCTAProps {
  /** hero = pill + button + caption · header = 40px compact, single soft bloom, no shimmer · sticky = full-width mobile bar · dark = navy sections (bloom dropped to .3) · inline = mid-copy, no glow, gold underline. */
  variant?: 'hero' | 'header' | 'sticky' | 'dark' | 'inline';
  /** Default "Book your free first lesson". */
  label?: string;
  /** Gold pill above the button (hero only). */
  pillText?: string;
  /** Muted caption under the button (hero and dark). */
  caption?: string;
  /** Label → "Finding a time…", spinner replaces the arrow, glow drops to 40%. */
  loading?: boolean;
  /** Face morphs to teal, the checkmark draws in 240ms, label → "Lesson booked". */
  success?: boolean;
  fullWidth?: boolean;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
}
export function FreeLessonCTA(props: FreeLessonCTAProps): JSX.Element;
