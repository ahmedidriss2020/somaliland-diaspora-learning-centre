export interface AccordionItem {
  /** The question, rendered in an h3 at 18px semibold. */
  q: string;
  a: React.ReactNode;
}

/**
 * FAQ accordion — single column, max-width 760px, fully ARIA-compliant.
 * @startingPoint section="Marketing" subtitle="ARIA accordion for the FAQ" viewport="700x300"
 */
export interface AccordionProps {
  items: AccordionItem[];
  /** Index open on mount, or -1 for all closed. */
  defaultOpen?: number;
  /** true keeps one item open at a time. Never force-close on scroll. */
  singleOpen?: boolean;
}
export function Accordion(props: AccordionProps): JSX.Element;
