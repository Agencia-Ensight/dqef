import styled from "styled-components";

export const Wrapper = styled.div`
  label {
    color: #53647e;
    font-size: 18px;
    margin-bottom: 10px;
  }
`;

export const ComboboxWrapper = styled.div`
  position: relative;
  margin-top: 0.25rem;

  ul {
    overflow: scroll;
    list-style-type: none;
    background: white;
    border-radius: 8px;
    margin-top: 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    max-height: 200px;
    box-shadow: 0 5px 3px -3px rgba(198, 198, 198, 0.1),
      0 4px 6px -2px rgba(198, 198, 198, 0.1);
    padding: 0.5rem 1rem;
  }

  li {
    cursor: pointer;
  }
`;

export const ComboboxContainer = styled.div`
  overflow: hidden;
  text-align: left;
  cursor: default;
  border: 2px solid #42a4ef;
  border-radius: 99px;
  width: 100%;
  height: 51px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  position: relative;

  @media (min-width: 640px) {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  .combobox-input {
    outline: 0;
    background: transparent;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 0.75rem;
    padding-right: 2.5rem;
    color: #111827;
    font-size: 0.875rem;
    line-height: 1.25rem;
    line-height: 1.25rem;
    width: 100%;
    border-style: none;
  }

  .combobox-button {
    display: flex;
    border: 0;
    outline: 0;
    background: transparent;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    padding-right: 0.5rem;
    align-items: center;
  }

  .combobox-options {
    overflow: auto;
    border: 0;
    outline: 0;
    background: transparent;
    position: absolute;
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    margin-top: 0.25rem;
    background-color: red;
    font-size: 1rem;
    line-height: 1.5rem;
    width: 100%;
    border-radius: 0.375rem;
    box-shadow: var(--tw-ring-inset) 0 0 0
      calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
    --ring-color: #000000;
    --ring-opacity: 0.05;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);

    @media (min-width: 640px) {
      font-size: 0.875rem;
      line-height: 1.25rem;
    }
  }

  .combobox-no-option {
    position: relative;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    color: #374151;
    cursor: default;
    user-select: none;
  }

  .combobox-option {
    position: relative;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-right: 1rem;
    padding-left: 2.5rem;
    cursor: pointer;
    user-select: none;
  }
`;
