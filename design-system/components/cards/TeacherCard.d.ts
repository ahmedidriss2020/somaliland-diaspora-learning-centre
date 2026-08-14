/**
 * A teacher, with the verified tick above the name. Photography and names are
 * clearly-labelled placeholders until real teachers consent to being shown —
 * never present a generated person as real.
 */
export interface TeacherCardProps {
  /** Respectful form: "Ustaad Yusuf A.", "Macallin Farhia". */
  name: string;
  /** Tracks taught, rendered as chips; a Qur'aan track takes the gold tone. */
  tracks?: string[];
  /** e.g. "9 years". */
  years?: string;
  /** e.g. "Somali, Arabic, English". */
  languages?: string;
  /** e.g. "GMT+3". */
  timezone?: string;
  /** One sentence in the teacher's own voice. */
  quote?: string;
  /** Caption shown over the duotone placeholder panel. */
  photoLabel?: string;
  /** `new` shows the gold "Fully vetted, newly joined" badge. */
  state?: 'verified' | 'new';
  onBook?: (e: React.MouseEvent) => void;
}
export function TeacherCard(props: TeacherCardProps): JSX.Element;
