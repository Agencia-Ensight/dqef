type OptionProps = {
  label: string;
  id: number;
};

export type Props = {
  options: OptionProps[];
  id: string;
  name: string;
  onChange: (options: OptionProps) => void;
};
