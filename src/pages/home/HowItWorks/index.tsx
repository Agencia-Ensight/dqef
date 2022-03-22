import { useState } from "react";
import * as S from "./styles";
import { IMenu, Props } from "./typings";

export function HowItWorks() {
  const [menuItem, setMenuItem] = useState<IMenu>("STUDENT");
  return (
    <S.Wrapper>
      <S.Container>
        <S.Image src="/images/how-it-works.png" />
        <S.Info>
          <S.SubTitle>
            <S.Button
              selected={menuItem === "STUDENT"}
              onClick={() => setMenuItem("STUDENT")}
            >
              ESTUDANTE
            </S.Button>
            /
            <S.Button
              selected={menuItem === "EMPLOYEE"}
              onClick={() => setMenuItem("EMPLOYEE")}
            >
              REDATOR
            </S.Button>
          </S.SubTitle>
          <S.Title>COMO FUNCIONAMOS?</S.Title>
          {menuItem === "STUDENT" && (
            <S.Description>
              <S.Highlight>Projeto é</S.Highlight> composto por vários jobs
              individuais, dentro de um ambiente só. Por exemplo, a demanda de
              vários designers para diversos jobs.
            </S.Description>
          )}
          {menuItem === "EMPLOYEE" && (
            <S.Description>
              <S.Highlight>Job é</S.Highlight> uma demanda de um trabalho
              específico. Por exemplo, a demanda de um job de designer para uma
              landing page.
            </S.Description>
          )}
        </S.Info>
      </S.Container>
    </S.Wrapper>
  );
}
