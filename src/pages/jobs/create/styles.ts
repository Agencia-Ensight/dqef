import styled from "styled-components";


export const Wrapper = styled.div`
  display: flex;
  overflow: hidden;

`;

export const ContainerInformation = styled.div`
  padding: 4% 5%;
  width: 75%;
  overflow-y: scroll;


  @media (max-width: 768px){
      width: 100%;
  }

  .input-root{
    @media (max-width: 768px){
    width: 100%;
  }
  }

  .combobox-root{
    @media (max-width: 768px){
    width: 100%;
  }
  }
  `;