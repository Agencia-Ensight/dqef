import { ButtonKnewave } from "../../components/ButtonKnewave";

import * as S from "./styles";

import { RiLockPasswordFill } from "react-icons/ri";

import { UrgentWorkCard } from "../../components/UrgentWorkCard";

import { ProfileCard } from "../../components/ProfileCard";

import { ProfileCardEmployee } from "../../components/ProfileCardEmployee";

import { AiFillStar } from "react-icons/ai";

export default function redatorreview() {
  return (
    <S.Wrapper>
      <div className="backContainer">
        <a href="#">Voltar</a>
      </div>
      <S.Container>
        <S.ContainerJobCard>
          <div>
            <ProfileCardEmployee
              img="/images/fotobraba.png"
              price={150}
              course="Direito"
              profileName="Bruno Vencato o brabo do nome do grande"
              jobs={25}
              studying="Cursando Oitavo Período"
            />
          </div>
        </S.ContainerJobCard>
        <S.ContainerReview>
          <h1>Avaliações Recebidas</h1>

          <S.ContainerBigCard>
            <div>
              <AiFillStar size={20} color="#ffb200" />
              <AiFillStar size={20} color="#ffb200" />
              <AiFillStar size={20} color="#ffb200" />
              <AiFillStar size={20} color="#ffb200" />
              <AiFillStar size={20} />
            </div>
            <h3>
              Trabalho entregue de maneira muito rápida, tirei 10! Um ótimo
              redator. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Maiores, expedita vero placeat labore, recusandae officiis nulla
              eos, excepturi culpa quas exercitationem esse voluptatem unde? Ut
              illo inventore enim ea fugit.
            </h3>
            <p>
              entregue em: <span>12/08/2021</span>
            </p>
          </S.ContainerBigCard>
          <S.ContainerBigCard>
            <div>
              <AiFillStar size={20} color="#ffb200" />
              <AiFillStar size={20} color="#ffb200" />
              <AiFillStar size={20} color="#ffb200" />
              <AiFillStar size={20} />
              <AiFillStar size={20} />
            </div>
            <h3>
              Trabalho entregue de maneira muito rápida, tirei 10! Um ótimo
              redator. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Vel architecto fugit adipisci autem iste accusamus totam, animi
              aspernatur ad sunt molestiae maiores ratione necessitatibus quis
              earum consequuntur et. Velit, sequi.{" "}
            </h3>
            <p>
              entregue em: <span>12/08/2021</span>
            </p>
          </S.ContainerBigCard>
          <S.ContainerBigCard>
            <div>
              <AiFillStar size={20} color="#ffb200" />
              <AiFillStar size={20} color="#ffb200" />
              <AiFillStar size={20} color="#ffb200" />
              <AiFillStar size={20} color="#ffb200" />
              <AiFillStar size={20} />
            </div>
            <h3>
              Trabalho entregue de maneira muito rápida, tirei 10! Um ótimo
              redator. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quas rem nemo, earum incidunt laudantium facilis minus repellendus
              iusto libero similique commodi, eos ipsam quod exercitationem
              quibusdam assumenda. Itaque, expedita harum!{" "}
            </h3>
            <p>
              entregue em: <span>12/08/2021</span>
            </p>
          </S.ContainerBigCard>
        </S.ContainerReview>
      </S.Container>
    </S.Wrapper>
  );
}
