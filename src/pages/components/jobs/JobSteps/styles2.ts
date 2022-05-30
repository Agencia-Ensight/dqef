import styled from "styled-components";

export const Description = styled.p`
  color: #4e4e4e;
  font-size: 18px;
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

    span{
      color: #e62f5b;
    
    }
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
}
`;
