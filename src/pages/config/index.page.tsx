import { useState } from "react";
import Router from "next/router";

import { useToast, useUser as useAuth } from "@/contexts";
import { Banner } from "./Banner";
import { ButtonKnewave, Input, ComboboxComp, MultiSelect } from "@/components";
import * as S from "./styles";
import {
  useColleges,
  useCourses,
  useFormations,
  useKnowledges,
  useUpdateUser,
  useUser,
} from "@/hooks";
import { ensureAuth } from "@/hocs";

function Profile() {
  const { updateUser, user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [collegeId, setCollegeId] = useState(1);
  const [courseId, setCourseId] = useState(1);
  const [formationId, setFormationId] = useState(1);
  const [knowledgeId, setKnowledgeId] = useState(1);
  const [cpf, setCpf] = useState(user?.cpf);
  const [payment, setPayment] = useState("");
  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [phone, setPhone] = useState(user?.phone);
  const { addToast } = useToast();
  const knowledges = useKnowledges();
  const colleges = useColleges();
  const courses = useCourses();
  const formations = useFormations();
  useUser(user!.id, {
    onCompleted: (data) => {
      setCollegeId(data.collegeId);
      setCourseId(data.courseId);
      setFormationId(data.formationId);
    },
  });
  const { updateUser: updateUserData } = useUpdateUser(user!.id);

  async function onSubmit() {
    setIsLoading(true);
    try {
      await updateUserData({ collegeId, courseId, formationId, knowledgeId });

      if (user!.type === "EDITOR") {
        await updateUser({
          type: "EDITOR",
          collegeId,
          courseId,
          cpf,
          email,
          formationId,
          knowledgeIds: [knowledgeId],
          name,
          payment,
          phone,
        });
      } else {
        await updateUser({
          type: "STUDENT",
          collegeId,
          courseId,
          email,
          name,
          phone,
        });
      }

      addToast({ type: "success", msg: "Perfil atualizado com sucesso" });
    } catch (err) {
      addToast({
        type: "error",
        msg: "Erro ao atualizar perfil, tente novamente mais tarde",
      });
    }
    setIsLoading(false);
  }

  return (
    <S.Wrapper>
      <Banner />
      <S.ContainerInformation>
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
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
              />
            </S.ContainerMini>
            <S.ContainerMini>
              <Input
                label="E-mail"
                placeholder="teste@gmail.com"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                  value={cpf}
                  onChange={(e) => setCpf(e.target.value)}
                />
              </S.ContainerMini>
            )}
            <S.ContainerMini>
              <ComboboxComp
                items={courses.data || []}
                value={courseId}
                label="Curso"
                onSelectedChange={(data) => setCourseId(data.id)}
              />
            </S.ContainerMini>
            <S.ContainerMini>
              <ComboboxComp
                items={formations.data || []}
                label="Formação"
                value={formationId}
                onSelectedChange={(data) => setFormationId(data.id)}
              />
            </S.ContainerMini>
            {user?.type === "STUDENT" && (
              <S.ContainerMini>
                <ComboboxComp
                  items={colleges.data || []}
                  label="Faculdade"
                  value={collegeId}
                  onSelectedChange={(data) => setCollegeId(data.id)}
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
                <ComboboxComp
                  items={knowledges.data || []}
                  label="Faculdade"
                  value={knowledgeId}
                  onSelectedChange={(data) => setKnowledgeId(data.id)}
                />
              </S.SpecialOne>
            </S.ContainerLine>
            <S.ContainerLine>
              <S.SpecialOne>
                <Input
                  label="Dados bancários para Pagamento"
                  placeholder="Pix"
                  type="text"
                  value={payment}
                  onChange={(e) => setPayment(e.target.value)}
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
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </S.ContainerMini>
          </S.ContainerLine>
        </S.ContainerInformationDosBang>

        <ButtonKnewave
          variant="PRIMARY"
          size="sm"
          onClick={onSubmit}
          loading={isLoading}
        >
          Salvar
        </ButtonKnewave>
      </S.ContainerInformation>
    </S.Wrapper>
  );
}

export default ensureAuth(Profile);
