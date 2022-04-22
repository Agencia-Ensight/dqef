import styled from "styled-components";

export const Image = styled.img``;
export const Wrapper = styled.div`
  display: flex;

  span {
    color: #4e4e4e;
    font-weight: 400;
    font-size: 16px;
  }
`;
export const ContainerImage = styled.div`
  @media (max-width: 600px) {
    display: none;
  }
`;

export const InputContainer = styled.div`
  margin-top: 3rem;
  margin-bottom: 2rem;

  div {
    margin-bottom: 1rem;
  }

  label {
    color: #53647e;
    font-size: 18px;
    margin-bottom: 10px;
  }

  select {
    border: 2px solid #42a4ef;
    border-radius: 99px;
    width: 100%;
    height: 50px;
    font-size: 18px;
    padding: 10px 29px;

    &::placeholder {
      color: #848484;
    }
  }
  input {
    border: 2px solid #42a4ef;
    border-radius: 99px;
    width: 100%;
    height: 50px;
    font-size: 18px;
    padding: 10px 29px;

    &::placeholder {
      color: #848484;
    }
  }

  .cpf-input {
    margin-bottom: 1rem;
  }
`;

export const ContainerDoBang = styled.div`
  margin-bottom: 35px;
`;

export const ContainerInformation = styled.div`
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
    color: #53647E;
    font-size: 18px;
    margin-bottom: 10px;
         }

}

p{ 
    margin-top: 10px;
    color: #4e4e4e;
    font-weight: 400;
    font-size: 18px;
    


}





padding: 47px 120px 26px 69px;

@media (max-width: 600px) {
    padding: 10% 5%;
  }

`;
