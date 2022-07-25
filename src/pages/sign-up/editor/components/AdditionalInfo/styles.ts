import styled from "styled-components";

export const InputContainer = styled.div`
  margin-top: 3rem;
  margin-bottom: 2rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  select {
    border: 2px solid #42a4ef;
    border-radius: 99px;
    width: 100%;
    height: 51px;
    margin-top: 10px;
    display: flex;
    align-items: center;
  }
  
  select:focus {
      display: none;
  }

 
 
`

export const Label = styled.label`
    color: #53647e;
    font-size: 18px;
`


export const InputCheckboxContainer = styled.div`
display: flex;
align-items: center;
gap: 0.5rem;

a {
    color: #42A4EF;
    cursor: pointer;
}
`


export const CheckboxContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    margin-bottom: 2rem;
    margin-left: 0.5rem;

`