import styled from "styled-components";

export const Description = styled.p`
    font-size: 1.2rem;
    color: #4E4E4E;
    text-align: center;
`

export const List = styled.p`
    font-size: 1.2rem;
    color: #4E4E4E;
    margin-top: 1rem;
`

export const Button = styled.button`
    color: #42A4EF;
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
`

export const NerdImage = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 10px;


    @media (max-width: 600px){
        img{
            width: 200px;
            height: 170px;
        }
    }


`

export const TextInformation = styled.div`
    text-align: center;
    justify-content: center;
    margin-top: 10px;



    h3{  
        font-size: 24px;
        font-weight: 600;
        color: #4E4E4E;


    }

    span{
        color: #E6DE22;

    }

    div{ 
        margin-bottom: 20px;
        margin-top: 20px;

    }



`

export const ButtonFinaleira = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
    gap: 20px;


`
