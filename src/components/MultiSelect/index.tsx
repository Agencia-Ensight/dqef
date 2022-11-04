import { useMemo, useState } from "react";
import Select, { createFilter } from "react-select";

import * as S from "./styles";
import { Props, OptionProps } from "./typings";

function MultiSelect({ options, id, name, onChange }: Props) {
  const [selectedOption, setSelectedOption] = useState<OptionProps[]>([]);

  const handleChange = (selected: OptionProps) => {
    setSelectedOption((data) => {
      const newData = [...data, selected];
      onChange(selected);
      return newData;
    });
  };

  const inputValue = useMemo(() => {
    return selectedOption.map((option) => option.id).join(",");
  }, [selectedOption]);

  return (
    <>
      <Select
        placeholder="Selecione..."
        options={options}
        filterOption={createFilter({ ignoreAccents: false, ignoreCase: true })}
        className="basic-multi-select"
        classNamePrefix="Selecione"
        onChange={(e) => handleChange(e!)}
        styles={{
          control: (provided, state) => ({
            ...provided,
            borderRadius: 99,
            padding: "6px 5px",
            background: "white",
            border: "2px solid #42a4ef",
          }),
          option: (provided) => ({
            ...provided,
            background: "white",
            color: "#222",
          }),
        }}
      />
      <input type="hidden" name={name} id={id} value={inputValue} />
    </>
  );
}

export { MultiSelect };
