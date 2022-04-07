import styled from "styled-components";

export const Banner = styled.div`
    display: none;

    @media(max-width: 800px){
        display: block;
    }

    div:nth-child(1){
        width: 100% !important;
    }
    .rsis-image{
        background-size: 100% 100% !important;
    }
`
