type ModalContentProps = {
  close: () => void;
};

type ModalContextOpenOptions = {
  content?: (contentProps: ModalContentProps) => React.ReactNode;
  onClose?: () => void;
};

export type ModalContextProps = {
  open: (title: string, options?: ModalContextOpenOptions) => void;
  close: () => void;
};
