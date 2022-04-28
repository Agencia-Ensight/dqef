import styled from "styled-components";

export const Image = styled.img`
width: 100%;

`
export const Wrapper = styled.div`
display: flex;

textarea {
    width: 100%;

    border: 2px solid #42a4ef;
    border-radius: 15px;

    font-size: 18px;
    padding: 10px 29px;

    &::placeholder {
      color: #848484;
    }
  }

label{
        color: #53647E;
        font-size: 18px;
        margin-bottom: 10px;
         }

    select{
        border: 2px solid #42A4EF;
        border-radius: 99px;
        width: 100%;
        font-size: 18px;

        


        &::placeholder {
            color:#848484;

        }
    }
    .padrao{
        width: 259.57px;
        height: 50px;

    }

`
export const ContainerImage = styled.div`
width: 40%;

`
export const ContainerInformation = styled.div`
margin: 4% 5%;

width: 60%;

/* padding: 144px 331px 143.7px 113px; */
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

`

export const InputFields = styled.div`
    margin-bottom: 1.5rem;
    margin-top: 2.8rem;
`

export const FirstInputContainer = styled.div`
    display: flex;
    gap: 0px;
    margin-bottom: 30px;




    




`
export const TextInputContainer = styled.div`
    display: flex;
    gap: 20px;
    margin-bottom: 30px;
   




    




`

export const SecondInputContainer = styled.div`
    width: 100%;
    gap: 20px;
    
    
    


    

`


