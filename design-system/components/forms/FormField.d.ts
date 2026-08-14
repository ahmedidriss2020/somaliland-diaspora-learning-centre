/**
 * A labelled form control: persistent visible label, optional hint, error message
 * beneath. Label above the field, always — never placeholder-as-label.
 */
export interface FormFieldProps {
  label: string;
  /** Used for the id and the input name. */
  name: string;
  type?: 'text' | 'email' | 'tel' | 'number' | 'textarea';
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  /** Small caption under the label, e.g. "First name is all we need." */
  hint?: string;
  /** Coral message beneath the field, written as help not blame. Announced via role="alert". */
  error?: string;
  /** Appends " — optional" to the label. Say it in words, never leave it implied. */
  optional?: boolean;
  placeholder?: string;
  autoComplete?: string;
  inputMode?: string;
  maxLength?: number;
  rows?: number;
  /** Custom control (chip group, week grid) rendered in place of the input. */
  children?: React.ReactNode;
}
export function FormField(props: FormFieldProps): JSX.Element;
