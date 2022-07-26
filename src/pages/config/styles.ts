import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  overflow: hidden;



`;

export const ContainerInformation = styled.div`
  padding: 4% 5%;
  width: 75%;
  overflow-y: scroll;


  a {
    text-decoration: none;
    color: var(--blue);
  }
  h1 {
    margin-top: 10px;
    font-weight: 500;
    color: black;
    font-size: 36px;
  }

  p {
    margin-top: 10px;
    color: #4e4e4e;
    font-weight: 400;
    font-size: 18px;
    margin-bottom: 30px;
  }


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