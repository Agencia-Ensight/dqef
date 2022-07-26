export interface ModalProps {
  close(): void;
  /**
   * Define that modal is open or closed state.
   */
  show?: boolean;
  /**
   * Any React element to render inside modal content.
   */
  children: React.ReactNode;
  /**
   * Title of modal
   */
  title?: string;
}
