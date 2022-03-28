import styled from "styled-components";

export const Wrapper = styled.div`
    input, label{
        display: block;

    }

    label{
        color: #53647E;
        font-size: 18px;
        margin-bottom: 10px;
         }

    input{
        border: 2px solid #42A4EF;
        border-radius: 99px;
        width: 100%;
        font-size: 18px;
        padding: 10px 29px;

        &::placeholder {
            color:#848484;

        }
    }
`