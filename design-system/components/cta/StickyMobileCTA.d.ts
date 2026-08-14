/** Full-width bottom bar carrying the free-lesson CTA on mobile. Safe-area aware; hides while the user scrolls up. */
export interface StickyMobileCTAProps {
  /** Drive from scroll direction — false slides the bar out. */
  visible?: boolean;
  label?: string;
  /** Small reassurance line under the button. */
  note?: string;
  onClick?: (e: React.MouseEvent) => void;
}
export function StickyMobileCTA(props: StickyMobileCTAProps): JSX.Element;
