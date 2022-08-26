import { InputHTMLAttributes, useRef, useState } from "react";
import { Combobox } from "@headlessui/react";
import { BiChevronDown } from "react-icons/bi";
import { FixedSizeList as List } from "react-window";

import * as S from "./styles";

type ComboboxData = {
  id: number;
  name: string;
};

type ComboboxProps = {
  items: ComboboxData[];
  onSelectedChange: (data: ComboboxData) => void;
  label: string;
  mandatory?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

function ComboboxComp({
  onSelectedChange,
  items,
  mandatory = false,
  label,
  ...rest
}: ComboboxProps) {
  const [selected, setSelected] = useState<ComboboxData | undefined>(() => {
    if (items.length > 0) return items[0];
    return undefined;
  });
  const [query, setQuery] = useState("");

  const filtered =
    query === ""
      ? items
      : items.filter((item) =>
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
    <S.Container>
      <label>
        {label} <span>{mandatory && "*"}</span>
      </label>
      <Combobox value={selected} onChange={handleChange}>
        <S.ComboWrapper>
          {/* <S.ComboboxWrapper> */}
          {/* <S.ComboboxContainer> */}
          <Combobox.Input
            {...rest}
            displayValue={(item: ComboboxData) => item?.name}
            onChange={(event) => setQuery(event.target.value)}
          />
          <Combobox.Button>
            <BiChevronDown size={20} aria-hidden="true" />
          </Combobox.Button>
        </S.ComboWrapper>
        {/* </S.ComboboxContainer> */}

        <Combobox.Options className="combobox-options">
          {filtered.length === 0 && query !== "" ? (
            <div className="combobox-no-option">Não encontrado</div>
          ) : (
            <List
              height={150}
              itemCount={items.length}
              itemSize={35}
              width="100%"
            >
              {({ index, style }) => (
                <Combobox.Option
                  key={filtered[index]?.id}
                  value={filtered[index]}
                  className="combobox-option"
                  style={style}
                >
                  {({ selected, active }) => (
                    <span style={{ color: selected ? "#42a4ef" : "#222" }}>
                      {filtered[index]?.name}
                    </span>
                  )}
                </Combobox.Option>
              )}
            </List>
          )}
        </Combobox.Options>
        {/* </S.ComboboxWrapper> */}
      </Combobox>
    </S.Container>
  );
}

export { ComboboxComp };
