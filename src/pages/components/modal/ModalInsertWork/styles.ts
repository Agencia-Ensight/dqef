import styled from "styled-components";
import { Input } from "../../../../components/Input";

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

export const ButtonInputSolid = styled.div`

.inputsolido{ 
    margin-top: 20px;
    border-radius: 10px;
    height: 80px;


    &::placeholder{ 
        text-align: center;

    }

}


`


export const ButtonBang = styled.div`
    width: 500px;
    height: 50px;
    border: solid #42A4EF;
    border-radius: 99px;
    margin: 0 auto;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-top: 30px;


    
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



`

export const TextInformation = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 30px;
    gap: 30px;
    align-items: center;



    h3{  
        font-size: 18px;
        font-weight: 500;
        color: #4E4E4E;


    }

    h2{ 
        font-size: 36px;
        font-weight: 500;
        color: #42A4EF;


    }

    span{
        color: #E6DE22;

    }



`



export const ButtonFinaleira = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
    gap: 20px;


`
