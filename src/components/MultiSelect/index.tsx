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
    <S.Wrapper>
      <Select
        options={options}
        filterOption={createFilter({ ignoreAccents: false })}
        className="basic-multi-select"
        onChange={(e) => handleChange(e!)}
      />
      <input type="hidden" name={name} id={id} value={inputValue} />
    </S.Wrapper>
  );
}

export { MultiSelect };
