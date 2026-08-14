export interface MotifProps {
  /** Which cultural mark to draw. */
  name?: 'camel' | 'caravan' | 'aqal' | 'weave';
  /** Rendered height in px. `weave` always spans 100% width. */
  height?: number;
  /** Silhouette fill. */
  color?: string;
  /** Rib and doorway colour on `aqal` — should read as the surface behind it. */
  lineColor?: string;
  opacity?: number;
  /** Mirror horizontally, so a caravan can face either way. */
  flip?: boolean;
  style?: React.CSSProperties;
}

/**
 * Somali cultural motifs — camel, camel caravan, aqal Somali, alool weave band.
 * Decorative only: always `aria-hidden`, never carries meaning a sighted user
 * gets and a screen-reader user does not. Keep opacity at or below .12 when a
 * motif sits behind text.
 */
export declare function Motif(props: MotifProps): JSX.Element;
