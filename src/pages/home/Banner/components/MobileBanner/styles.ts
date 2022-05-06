import styled from "styled-components";

export const Banner = styled.div`
  display: none;

  @media (max-width: 800px) {
    display: block;
  }

  div:nth-child(1) {
    width: 100% !important;
  }

  div:nth-child(2) {
    width: auto !important;
  }
  .rsis-image {
    /* background-size: 100% 100% !important; */
    /* background-size: auto !important;
    background-repeat: no-repeat; */
    width: 100% !important;
    height: auto !important;
  }
`;
