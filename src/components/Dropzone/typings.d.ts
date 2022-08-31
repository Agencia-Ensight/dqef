export type IDropzone = {
  label?: string;
  defaultItems?: File[];
  onChange?: (files: File[]) => void;
};
