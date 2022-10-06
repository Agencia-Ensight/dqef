import styled from "styled-components";

export const Banner = styled.div`
  display: none;
  

  @media (max-width: 900px) {
    display: block;
  }

  div:nth-child(1) {
    width: 100% !important;
  }

  div:nth-child(2) {
    width: auto !important;
    bottom: 70px !important;

    button {
      width: 10px !important;
      height: 10px !important;
    }
  }


 
  .rsis-image {
    /* background-size: 100% fill !important;  */
    background-size: contain !important;
    background-repeat: no-repeat;
    /* width: 100% !important;
    height: 100% !important;
    background-position: center center ; */
    
  }
`;
