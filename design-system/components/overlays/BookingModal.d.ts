/**
 * The free-first-lesson booking flow: four steps, slim progress bar, visible step
 * counter, Back always available. Nothing here asks for payment.
 */
export interface BookingModalProps {
  open?: boolean;
  onClose?: () => void;
  /** Pre-select a track when opened from a TrackCard, e.g. "Qur'aan". */
  initialTrack?: string;
  initialStep?: 1 | 2 | 3 | 4;
  /** Save the draft to localStorage so an accidental close does not lose progress. Default true. */
  persist?: boolean;
  /** Called with the draft when step 3 is submitted. */
  onSubmit?: (draft: Record<string, unknown>) => void;
}
export function BookingModal(props: BookingModalProps): JSX.Element | null;
