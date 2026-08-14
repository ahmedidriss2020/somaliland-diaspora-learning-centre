import type { IconName } from './Icon';

/** Pill label. Static for metadata (tracks, languages); selectable for booking-flow answers. */
export interface ChipProps {
  label?: string;
  children?: React.ReactNode;
  /** blue = language tracks · teal = teacher · gold = achievement / new teacher · violet = AI only. */
  tone?: 'neutral' | 'blue' | 'teal' | 'gold' | 'violet' | 'onDark';
  icon?: IconName;
  /** Renders a real button with role="checkbox" and a 48px tap target. */
  selectable?: boolean;
  selected?: boolean;
  onChange?: (next: boolean) => void;
  size?: 'sm' | 'md';
}
export function Chip(props: ChipProps): JSX.Element;
