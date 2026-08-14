import type { IconName } from './Icon';

/**
 * Standard action button. The glowing gold-and-blue treatment is reserved for
 * FreeLessonCTA — never style a Button to imitate it.
 */
export interface ButtonProps {
  /** primary = the main action in a section; secondary = white card-style; outline/ghost = quiet; text = inline in copy with a gold underline. */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'text';
  /** sm 40px · md 48px · lg 56px min-height. md and up meet the 48px tap target. */
  size?: 'sm' | 'md' | 'lg';
  /** Button label. `children` works too. */
  label?: string;
  children?: React.ReactNode;
  iconStart?: IconName;
  /** Trailing icon; mirrored automatically in RTL. */
  iconEnd?: IconName;
  /** Renders an <a> instead of a <button>. */
  href?: string;
  /** Invert for navy sections. */
  onDark?: boolean;
  fullWidth?: boolean;
  loading?: boolean;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  type?: 'button' | 'submit' | 'reset';
}
export function Button(props: ButtonProps): JSX.Element;
