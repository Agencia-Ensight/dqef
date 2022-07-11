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

export const ButtonBang = styled.div`
    padding: 8px;
    border: solid #ED3561;
    border-radius: 99px;
    margin: 0 auto;
    text-align: center;
    

    p{ 
    font-size: 16px;
    font-weight: 700;
    color: black;


    }

    


`
export const NerdImage = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;

    img{
        @media (max-width: 600px){
        width: 200px;
        height: 170px;
    }
    }

`

export const TextInformation = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 30px;



    h3{  
        font-size: 24px;
        font-weight: 600;
        color: #4E4E4E;


        @media (max-width: 600px){
            font-size: 18px;
            text-align: center;
        }
    }

    span{
        color: #ED3561;

    }



`

export const ButtonFinaleira = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;



`
