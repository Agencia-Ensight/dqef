import styled from "styled-components";

export const Image = styled.img`
height: 100%;
width: 100%;

`
export const Wrapper = styled.div`
display: flex;

span{
    color: #4e4e4e;
    font-weight: 400;
    font-size: 16px;
    

}
`
export const ContainerImage = styled.div`
    height: 100%;
    width: 30%;



`

export const ContainerLine = styled.div`
display: flex;
gap: 20px;
margin-bottom: 20px;


`
export const SpecialOne = styled.div`
width: 100%;

div{ 
    width: 100%;

}

`




export const ContainerMini = styled.div`

    

    align-items: center;
    width: 260px;
    h3{
        color: #53647E;
        font-size: 18px;
        margin-bottom: 10px;
         }

    select{
        border: 2px solid #42A4EF;
        border-radius: 99px;
        width: 260px;
        height: 51px;
        font-size: 18px;
        padding: 10px 29px;

        &::placeholder {
            color:#848484;

        }
    }


`


export const ContainerInformationDosBang = styled.div`
display: flex;
align-items: center;




`

export const ContainerInformation = styled.div`
width: 70%;
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

p{ 
    margin-top: 10px;
    color: #4e4e4e;
    font-weight: 400;
    font-size: 18px;
    margin-bottom: 30px;
    


}



padding: 47px 120px 26px 69px;

`