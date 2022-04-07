import { ButtonKnewave } from "../../components/ButtonKnewave";
import * as S from "./styles";
import { Checkbox, CheckboxGroup, Select } from '@chakra-ui/react';
import { Input } from "../../components/Input";


export default function editpage() {
    return (
        <S.Wrapper>
            <S.ContainerImage>
            <S.Image src="/images/editpage.png" />
            </S.ContainerImage>

            <S.ContainerInformation>
            <a href="#">Voltar</a>
            <h1>Preencha os Campos</h1>
            <p>Edite o os campos desejados e salve no final da página</p>


            <S.ContainerInformationDosBang> 
             <S.ContainerLine>
            <S.ContainerMini>
            <Input
              label="Título do Trabalho*"
              placeholder="Bruno Vencato"
              type="text"
              required
            />
            </S.ContainerMini>    
            <S.ContainerMini>
            <h3>Tipo de trabalho*</h3> 
            <Select placeholder="Selecione">
            <option value="option1">Cursando</option>
            <option value="option2">Graduado</option>
            <option value="option3">Pós-graduado</option>
            <option value="option3">Mestrado</option>
            <option value="option3">Doutorado</option>
          </Select>
            </S.ContainerMini>
            </S.ContainerLine>   
            
            
            </S.ContainerInformationDosBang>
            <S.ContainerInformationDosBang> 
             <S.ContainerLine>
             <S.ContainerMini>
            <h3>Curso*</h3> 
            <Select placeholder="Selecione">
            <option value="option1">Cursando</option>
            <option value="option2">Graduado</option>
            <option value="option3">Pós-graduado</option>
            <option value="option3">Mestrado</option>
            <option value="option3">Doutorado</option>
          </Select>
            </S.ContainerMini>  
            <S.ContainerMini>
            <h3>Disciplina*</h3> 
            <Select placeholder="Selecione">
            <option value="option1">Cursando</option>
            <option value="option2">Graduado</option>
            <option value="option3">Pós-graduado</option>
            <option value="option3">Mestrado</option>
            <option value="option3">Doutorado</option>
          </Select>
            </S.ContainerMini>
            <S.ContainerMini>
            <Input
              label="Tema*"
              placeholder="Digite o Tema"
              type="text"
              required
            />

            </S.ContainerMini>
            </S.ContainerLine>   
            
            
            </S.ContainerInformationDosBang>

             <S.ContainerLine>

            <S.SpecialOne>  
            <Input
              label="Áreas de Conhecimento"
              placeholder="Tags aqui"
              type="text"
              required
            />
            </S.SpecialOne>  
 
            
            
            </S.ContainerLine>   
            
            

            <S.ContainerInformationDosBang> 
             <S.ContainerLine>
            <S.ContainerMini>
            <S.SpecialOne>  
            <Input
              label="Dados bancários para Pagamento"
              placeholder="Dados"
              type="text"
              required
            />
            </S.SpecialOne>  
            </S.ContainerMini>    
            
            
            </S.ContainerLine>   
            
            
            </S.ContainerInformationDosBang>
            <S.ContainerInformationDosBang> 
             <S.ContainerLine>
            <S.ContainerMini>

            <Input
              label="Telefone"
              placeholder="+55 41 995556667"
              type="text"
              required
            />

            </S.ContainerMini>    
            
            
            </S.ContainerLine>   
            
            
            </S.ContainerInformationDosBang>
            
            <ButtonKnewave   variant="PRIMARY" size="sm" >Próximo</ButtonKnewave>
            </S.ContainerInformation>



        </S.Wrapper>
    )
    }
