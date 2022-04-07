import styled from "styled-components";

export const Image = styled.img`


`
export const Wrapper = styled.div`
display: flex;
`
export const ContainerImage = styled.div`

`


export const ContainerInformation = styled.div`

padding: 144px 331px 143.7px 113px;
a{
    text-decoration: none;
    color: var(--blue);
}
h1 {
    margin-top: 10px;
    font-weight: 500;
    color: black;
    font-size: 36px;
}
h3{ 
    font-size: 18px;
    font-weight: 600;
    color: #42A4EF;

}

p{ 
    margin-top: 10px;
    color: #4e4e4e;
    font-weight: 400;
    font-size: 18px;
    


}

span{ 
    color: var(--blue);


    
}

button{ 
    margin-top: 50px;

}

    
label{
        color: #53647E;
        font-size: 18px;
         }

input{
    border: 2px solid #42A4EF;
        border-radius: 99px;
        width: 100%;
        font-size: 18px;
       height: 51px;
       padding: 0 20px;
       margin-top: 10px;


        &::placeholder {
            color:#848484;

        }
    }
}
`;

export const Description = styled.p`
    color: #4E4E4E;
    font-size: 18px;
`
