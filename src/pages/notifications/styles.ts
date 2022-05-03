import styled from "styled-components";

export const Image = styled.img``;
export const Wrapper = styled.div`
  margin: 67px 60px 269.99px 130px;

  .botaopadraosolido{ 
    font-family: arial, sans-serif

  }

  @media(max-width:600px){
    margin: 10%;
  }

  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;




    @media (max-width: 600px) {
      display: none;
    }
  }

  td {
    text-align: left;
    padding: 8px;
    border-top: 1px solid #d1d1d1;
  }

  th {
    color: #42a4ef;
    text-align: left;
    padding: 8px;
    font-size: 24px;
    font-weight: 400;
  }

  tr {
    background-color: #FAFAFA;
    width: 100%;
  }

  .headerContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 600px) {
      display: block;
    }
  }
`;

export const ContainerImage = styled.div`
  /* width: 100%;
  justify-content: space-between;
  display: flex; */
`;
export const ContainerInformation = styled.div`
  margin-bottom: 38px;

  h1 {
    font-weight: 500;
    color: #000000;
    font-size: 36px;
  }
  h2 {
    font-weight: 400;
    color: #4e4e4e;
    font-size: 24px;
  }
`;

export const NotificationsContainerMobile = styled.div`
  display: none;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 27px;
  }
`;
