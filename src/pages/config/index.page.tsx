import Router from "next/router";

import { useToast, useUser } from "@/contexts";
import { Banner } from "./Banner";
import { ProfileProps } from "./typings";
import { ButtonKnewave, Input, ComboboxComp, MultiSelect } from "@/components";
import * as S from "./styles";
import { useColleges, useCourses, useFormations, useKnowledges } from "@/hooks";
import { useState } from "react";

function Profile(data: ProfileProps) {
  const { updateUser, user } = useUser();
  const [collegeId, setCollegeId] = useState(user);
  const [courseId, setCourseId] = useState();
  const [formationId, setFormationId] = useState();
  const [knowledgeId, setKnowledgeId] = useState();
  const [payment, setPayment] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();

  const { addToast } = useToast();
  const knowledges = useKnowledges();
  const colleges = useColleges();
  const courses = useCourses();
  const formations = useFormations();

  async function onSubmit() {
    try {
      await updateUser({
        type: "EDITOR",
        ...data,
      });
      addToast({ type: "success", msg: "Perfil atualizado com sucesso" });
    } catch (err) {
      addToast({
        type: "error",
        msg: "Erro ao atualizar perfil, tente novamente mais tarde",
      });
    }
  }

  return (
    <S.Wrapper>
      <Banner />
      <S.ContainerInformation>
        <form onSubmit={() => onSubmit()}>
          <a onClick={Router.back}>Voltar</a>
          <h1>Preencha os Campos</h1>
          <p>Edite o os campos desejados e salve no final da página</p>

          <S.ContainerInformationDosBang>
            <S.ContainerLine>
              <S.ContainerMini>
                <Input
                  label="Nome Completo"
                  placeholder="Seu nome..."
                  name="name"
                  type="text"
                />
              </S.ContainerMini>
              <S.ContainerMini>
                <Input
                  label="E-mail"
                  placeholder="teste@gmail.com"
                  name="email"
                  type="text"
                />
              </S.ContainerMini>
            </S.ContainerLine>
          </S.ContainerInformationDosBang>
          <S.ContainerInformationDosBang>
            <S.ContainerLine>
              {user?.type === "EDITOR" && (
                <S.ContainerMini>
                  <Input
                    label="CPF"
                    placeholder="129.189.287-98"
                    name="cpf"
                    type="text"
                  />
                </S.ContainerMini>
              )}
              <S.ContainerMini>
                <ComboboxComp
                  items={courses.data || []}
                  value={1}
                  label="Curso"
                  onSelectedChange={() => {}}
                />
              </S.ContainerMini>
              <S.ContainerMini>
                <ComboboxComp
                  items={formations.data || []}
                  label="Formação"
                  value={1}
                  onSelectedChange={() => {}}
                />
              </S.ContainerMini>
              {user?.type === "STUDENT" && (
                <S.ContainerMini>
                  <ComboboxComp
                    items={colleges.data || []}
                    label="Faculdade"
                    value={1}
                    onSelectedChange={() => {}}
                  />
                </S.ContainerMini>
              )}
            </S.ContainerLine>
          </S.ContainerInformationDosBang>

          {user?.type === "EDITOR" && (
            <>
              <S.ContainerLine>
                <S.SpecialOne>
                  <h3>Áreas de conhecimento</h3>
                  <MultiSelect
                    options={
                      knowledges.data?.map((knowledge) => ({
                        ...knowledge,
                        label: knowledge.name,
                      })) || []
                    }
                    id="knowledges"
                    name="knowledges"
                    onChange={() => {}}
                  />
                </S.SpecialOne>
              </S.ContainerLine>
              <S.ContainerLine>
                <S.SpecialOne>
                  <Input
                    label="Dados bancários para Pagamento"
                    placeholder="Pix"
                    type="text"
                  />
                </S.SpecialOne>
              </S.ContainerLine>
            </>
          )}

          <S.ContainerInformationDosBang>
            <S.ContainerLine>
              <S.ContainerMini>
                <Input
                  label="Telefone"
                  name="phone"
                  placeholder="+55 41 995556667"
                  type="text"
                />
              </S.ContainerMini>
            </S.ContainerLine>
          </S.ContainerInformationDosBang>

          <ButtonKnewave variant="PRIMARY" size="sm" type="submit">
            Salvar
          </ButtonKnewave>
        </form>
      </S.ContainerInformation>
    </S.Wrapper>
  );
}

export default Profile;
