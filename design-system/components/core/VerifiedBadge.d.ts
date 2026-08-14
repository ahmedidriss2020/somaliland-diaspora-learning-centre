/** Teal tick meaning "this teacher passed every vetting step". Sits ABOVE the teacher's name, before anything else. */
export interface VerifiedBadgeProps {
  size?: 'sm' | 'md' | 'lg';
  /** Label text for the verified state. Default "Verified". */
  label?: string;
  /** `new` swaps teal for gold and reads "Fully vetted, newly joined" — honest, not hidden. */
  state?: 'verified' | 'new';
  showLabel?: boolean;
}
export function VerifiedBadge(props: VerifiedBadgeProps): JSX.Element;
