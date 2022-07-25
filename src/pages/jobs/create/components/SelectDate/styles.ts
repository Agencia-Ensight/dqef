import styled from "styled-components";

export const BackButton = styled.a`
    text-decoration: none;
    color: var(--blue);
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
`

export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between; 
`;

export const Steps = styled.h5`
    background-color: red;
    background-image: linear-gradient(180deg, #56ccf2 0%, #2f80ed 100%);
    background-size: 100%;
    background-repeat: repeat;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    font-size: 24px;
    @media (max-width: 600px) {
        display: none;
    }
`;


export const Title = styled.h1`
    margin-top: 10px;
    font-weight: 500;
    color: black;
    font-size: 36px;
`

export const Description = styled.p`
    color: #4e4e4e;
    font-size: 18px;
    margin-bottom: 2rem;
`;

export const InputsContainer = styled.div`
    margin-top: 50px;
    margin-bottom: 30px;
    display: flex;
    gap: 50px;
    .text-error{
        color: red;
    }
    .text-success{
        color: green;
    }
    @media (max-width: 600px) {
        flex-wrap: wrap;
        gap: 20px;
    }
    label{
        color: #53647E;
        font-size: 18px;
    }
    span{
        color: #e62f5b;
    }
    
    input{
        border: 2px solid #42A4EF;
        border-radius: 99px;
        width: 350px;
        font-size: 18px;
        height: 51px;
        padding: 0 20px;
        margin-top: 10px;
        @media (max-width: 600px) {
        width: 100%;
    }

    &::placeholder {
        color:#848484;
    }

    :disabled{
        background: #E0E0E0;
        cursor: not-allowed;
    }
}
`;