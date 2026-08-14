export type IconName =
  | 'check' | 'arrow-right' | 'chevron-down' | 'x' | 'menu' | 'clock' | 'globe'
  | 'user-check' | 'users' | 'file-check' | 'eye' | 'heart' | 'book-open'
  | 'message-circle' | 'calendar' | 'sparkles' | 'star' | 'file-text';

export interface IconProps {
  /** Which glyph to draw. */
  name: IconName;
  /** Pixel box; icons are 24×24 outline drawings scaled down. Default 20. */
  size?: number;
  /** Stroke colour. Defaults to currentColor. */
  color?: string;
  /** Default 2 — do not thin the stroke below 1.5. */
  strokeWidth?: number;
  /** Mirror horizontally under [dir="rtl"] — true for arrows/chevrons, never for the checkmark. */
  mirrorRtl?: boolean;
  style?: React.CSSProperties;
}
export function Icon(props: IconProps): JSX.Element;
