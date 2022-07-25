import { useState } from "react";

import { Combobox } from "@headlessui/react";
import { BiChevronDown } from "react-icons/bi";

import * as S from "./styles";

type ComboboxData = {
  id: number;
  name: string;
};

interface ComboboxProps {
  list: ComboboxData[];
  onSelectedChange: (data: ComboboxData) => void;
  label: string;
}

function ComboboxComp({ onSelectedChange, list, label }: ComboboxProps) {
  const [selected, setSelected] = useState<ComboboxData>(list[0]);
  const [query, setQuery] = useState("");

  const filtered =
    query === ""
      ? list
      : list.filter((item) =>
          item.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  function handleChange(data: ComboboxData) {
    setSelected(data);
    onSelectedChange(data);
  }
  return (
    <S.Wrapper>
      <label>{label}</label>
      <Combobox value={selected} onChange={handleChange}>
        <S.ComboboxWrapper>
          <S.ComboboxContainer>
            <Combobox.Input
              className="combobox-input"
              displayValue={(item: ComboboxData) => item.name}
              onChange={(event) => setQuery(event.target.value)}
            />
            <Combobox.Button className="combobox-button">
              <BiChevronDown size={20} aria-hidden="true" />
            </Combobox.Button>
          </S.ComboboxContainer>

          <Combobox.Options className="combobox-options">
            {filtered.length === 0 && query !== "" ? (
              <div className="combobox-no-option">Não encontrado</div>
            ) : (
              filtered.map((item) => (
                <Combobox.Option
                  key={item.id}
                  value={item}
                  className="combobox-option"
                >
                  {({ selected, active }) => (
                    <>
                      <span>{item.name}</span>
                    </>
                  )}
                </Combobox.Option>
              ))
            )}
          </Combobox.Options>
        </S.ComboboxWrapper>
      </Combobox>
    </S.Wrapper>
  );
}

export { ComboboxComp };
