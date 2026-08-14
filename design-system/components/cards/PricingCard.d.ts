/**
 * One package. Three exist: One child, Two children (featured), Three or more
 * (custom quote). Prices come from the pricing config keyed by currency — never
 * hard-code them, and never show a number in the custom-quote card.
 */
export interface PricingCardProps {
  /** e.g. "Two children". */
  name: string;
  /** Formatted headline price for the active currency, e.g. "$70". */
  price?: string;
  /** e.g. "per child, per month". */
  unit?: string;
  /** Smaller muted line under the price, e.g. the two-child total. */
  priceNote?: string;
  /** Gold savings pill, e.g. "Save $10 per child, every month." */
  savings?: string;
  features?: string[];
  /** Must contain the word "free" in every card. Default "Start with a free lesson". */
  ctaLabel?: string;
  /** Middle card — teal ribbon, glowing CTA, taller padding. */
  featured?: boolean;
  ribbon?: string;
  /** Shows "Custom pricing" instead of a number. */
  custom?: boolean;
  customLine?: string;
  onCta?: (e: React.MouseEvent) => void;
}
export function PricingCard(props: PricingCardProps): JSX.Element;
