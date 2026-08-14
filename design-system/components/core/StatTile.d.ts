/** One figure from the monthly parent report: attendance, new words, homework, Qur'aan progress. */
export interface StatTileProps {
  /** Uppercase 12px label, e.g. "Lessons attended". */
  label: string;
  /** The figure — a string so "4/4" and "42" both work. */
  value: string | number;
  /** Small trailing unit, e.g. "words". */
  suffix?: string;
  /** 0–100. Adds a slim progress bar; use with tone="gold" for Qur'aan progress. */
  progress?: number;
  tone?: 'neutral' | 'teal' | 'gold';
}
export function StatTile(props: StatTileProps): JSX.Element;
