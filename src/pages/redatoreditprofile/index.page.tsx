import { ButtonKnewave } from "../../components/ButtonKnewave";
import * as S from "./styles";

import { Select } from '@chakra-ui/react';
import { Input } from "../../components/Input";
import { getProfile, IProfile, IProfileSimple, updateProfile } from "../../services/common";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import {
  getCourses,
  getFormations,
  getKnowledges,
  ICourse,
  IFormation,
  IKnowledge,
} from "../../services/auth";
export default function redatoreditprofile() {
  const [userProfile, setUserProfile] = useState<IProfile>({} as IProfile);
  const [courses, setCourses] = useState<ICourse[]>([]);
  const [formations, setFormations] = useState<IFormation[]>([]);
  const [knowledges, setKnowledges] = useState<IKnowledge[]>([]);

  const { hasuraToken } = useContext(AuthContext)!;

  useEffect(() => {
    async function loadCourses() {
      const res = await getCourses();
      setCourses(res);
    }

    async function loadFormations() {
      const res = await getFormations();
      setFormations(res);
    }

    async function loadKnowledges() {
      const res = await getKnowledges();
      setKnowledges(res);
    }

    loadCourses();
    loadFormations();
    loadKnowledges();

    getProfile(hasuraToken!).then((profile) => {
      setUserProfile(profile);
    });
  }, []);

  const updateField = (field: keyof IProfile, value: any) => {
    setUserProfile({ ...userProfile, [field]: value });
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload: IProfileSimple = {
      college: userProfile.college_id,
      course: userProfile.higher_course_id,
      formation: userProfile.formation_id,
      name: userProfile.name,
      cpf: userProfile.cpf,
      email: userProfile.email,
      phone: userProfile.phone,
    }

    updateProfile(hasuraToken!, payload).then(() => {
      alert("Perfil atualizado com sucesso!");
    });
  }

  return (
    <S.Wrapper>
      <S.ContainerImage>
        <S.Image src="/images/editprofile.png" />
      </S.ContainerImage>
      <form onSubmit={handleSubmit}>
        <S.ContainerInformation>
          <a href="#">Voltar</a>
          <h1>Preencha os Campos</h1>
          <p>Edite o os campos desejados e salve no final da página</p>


          <S.ContainerInformationDosBang>
            <S.ContainerLine>
              <S.ContainerMini>
                <Input
                  label="Nome Completo"
                  placeholder="Bruno Vencato"
                  name="name"
                  value={userProfile.name}
                  onChange={(e) => updateField('name', e.target.value)}
                  type="text"
                  required
                />
              </S.ContainerMini>
              {/* TODO: Backend is not updating this */}
              <S.ContainerMini>
                <Input
                  label="E-mail"
                  placeholder="teste@gmail.com"
                  name="email"
                  value={userProfile.email}
                  onChange={(e) => updateField('email', e.target.value)}
                  type="text"
                  required
                />
              </S.ContainerMini>

            </S.ContainerLine>


          </S.ContainerInformationDosBang>
          <S.ContainerInformationDosBang>
            <S.ContainerLine>

              <S.ContainerMini>
                <Input
                  label="CPF"
                  placeholder="129.189.287-98"
                  name="cpf"
                  value={userProfile.cpf}
                  onChange={(e) => updateField('cpf', e.target.value)}
                  type="text"
                  required
                />

              </S.ContainerMini>
              <S.ContainerMini>
                <h3>Curso</h3>
                <Select placeholder="Selecione" name="course" onChange={(e) => updateField('higher_course_id', e.target.value)}>
                  {courses.map((course: ICourse) => (
                    <option key={course.id} value={course.id} selected={course.id === userProfile.higher_course_id}>
                      {course.name}
                    </option>
                  ))}
                </Select>
              </S.ContainerMini>
              <S.ContainerMini>
                <h3>Formação</h3>
                <Select name="formation" placeholder="Selecione" onChange={(e) => updateField('formation_id', e.target.value)}>
                  {formations.map((formation: IFormation) => (
                    <option key={formation.id} value={formation.id} selected={formation.id === userProfile.formation_id}>
                      {formation.name}
                    </option>
                  ))}
                </Select>

              </S.ContainerMini>
            </S.ContainerLine>


          </S.ContainerInformationDosBang>

          <S.ContainerLine>

            <S.SpecialOne>
              {/* TODO: Add multiselect here */}
              <Input
                label="Áreas de Conhecimento"
                placeholder="Tags aqui"
                type="text"
                required
              />
            </S.SpecialOne>



          </S.ContainerLine>




          <S.ContainerLine>
            {/* TODO: Pix field here */}
            <S.SpecialOne>
              <Input
                label="Dados bancários para Pagamento"
                placeholder="Pix no meu CPF Banco Inter, aproveita e paga o vape :)"
                type="text"
                required
              />
            </S.SpecialOne>



          </S.ContainerLine>



          <S.ContainerInformationDosBang>
            <S.ContainerLine>
              <S.ContainerMini>

                <Input
                  label="Telefone"
                  name="phone"
                  placeholder="+55 41 995556667"
                  type="text"
                  value={userProfile.phone}
                  onChange={(e) => updateField('phone', e.target.value)}
                  required
                />

              </S.ContainerMini>


            </S.ContainerLine>


          </S.ContainerInformationDosBang>

          <ButtonKnewave variant="PRIMARY" size="sm" type="submit">Salvar</ButtonKnewave>
        </S.ContainerInformation>
      </form>


    </S.Wrapper>
  )
}

redatoreditprofile.auth = true;