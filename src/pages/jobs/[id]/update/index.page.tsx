import { useCallback, useState } from "react";
import { nanoid } from "nanoid";
import Router from "next/router";
import { GetServerSidePropsContext } from "next";

import {
  ButtonKnewave,
  Input,
  Loading,
  ComboboxComp,
  DatePicker,
  Dropzone,
} from "@/components";
import * as S from "./styles";
import {
  useCourses,
  useJob,
  useJobFormats,
  useKnowledges,
  useMediaTypes,
  useUpdateJob,
} from "@/hooks";
import { useToast } from "@/contexts";
import { JobMediaProps } from "@/types/Job";

type IUpdateJob = {
  id: string;
};

type IFileWithId = {
  file: File;
  id: string;
};

function UpdateJob({ id }: IUpdateJob) {
  const [title, setTitle] = useState("");
  const [theme, setTheme] = useState("");
  const [instructions, setInstructions] = useState("");
  const [pages, setPages] = useState(1);
  const [words, setWords] = useState(1);
  const [deliveryAt, setDeliveryAt] = useState(new Date());
  const [dateLimit, setDateLimit] = useState(new Date());
  const [maxPlagiarism, setMaxPlagiarism] = useState(1);
  const [price, setPrice] = useState(1);
  const [editorPrice, setEditorPrice] = useState(1);
  const [mediaTypeId, setMediaTypeId] = useState(1);
  const [courseId, setCourseId] = useState(1);
  const [knowledgeIds, setKnowledgeIds] = useState<number[]>([1]);
  const [formatId, setFormatId] = useState(1);
  const [obs, setObs] = useState("");
  const [files, setFiles] = useState<IFileWithId[]>([]);
  const [isFileLoaded, setIsFileLoaded] = useState(false);

  const mediaTypes = useMediaTypes();
  const courses = useCourses();
  const knowledges = useKnowledges();
  const formats = useJobFormats();
  const { addToast } = useToast();
  const job = useJob(id, {
    onCompleted: async (job) => {
      setTitle(job.title);
      setTheme(job.theme);
      setInstructions(job.instructions);
      setPages(job.pages);
      setWords(job.words);
      setDeliveryAt(job.deliveryAt);
      setDateLimit(job.dateLimit);
      setMaxPlagiarism(job.maximumPlagiarism);
      setPrice(job.price);
      setMediaTypeId(job.jobType.id);
      setCourseId(job.higherCourse.id);
      setKnowledgeIds(job.knowledges.map((knwowledge) => knwowledge.id));
      setFormatId(job.format.id);
      setObs(job.obs);
      setFiles(await loadFiles(job.medias));
      setIsFileLoaded(true);
    },
  });
  const { updateJob, isLoading } = useUpdateJob(id);

  /*
    - maria
    - joana
    - sergio

    files -> [margia, sergio]

  */

  async function handleJob() {
    const mediasToBeAdded = files
      .filter((file) => !job.data?.medias.find((media) => media.id === file.id))
      .map((file) => file.file);

    const mediaIdsTobeDeleted =
      job.data?.medias
        .filter((media) => !files.find((file) => file.id === media.id))
        .map((media) => media.id) || [];

    await updateJob({
      title,
      theme,
      editorPrice,
      dateLimit,
      deliveryAt,
      formatId,
      instructions,
      courseId,
      maximumPlagiarism: maxPlagiarism,
      knowledgeIds,
      obs,
      mediaTypeId,
      pages,
      price,
      words,
      mediasToBeAdded,
      mediaIdsTobeDeleted,
    });
    addToast({ msg: "Atualizado com sucesso!", type: "success" });
  }

  const createNewFiles = useCallback((newFiles: File[]) => {
    setFiles((oldFiles) =>
      newFiles.map((file) => {
        const fileExists = oldFiles.find((f) => f.file === file);
        if (fileExists) return fileExists;
        return { file, id: nanoid() };
      })
    );
  }, []);

  async function loadFiles(medias: JobMediaProps[]) {
    return Promise.all(
      medias.map(async (media) => {
        const res = await fetch(media.link);
        const buf = await res.arrayBuffer();
        const file = new File([buf], media.title, { type: "image/png" });
        return { file, id: media.id };
      })
    );
  }

  if (job.isLoading || !isFileLoaded) {
    return <Loading />;
  }

  return (
    <S.Wrapper>
      <S.ContainerImage>
        <S.Image src="/images/editpage.png" />
      </S.ContainerImage>

      <S.ContainerInformation>
        <a onClick={() => Router.back()}>Voltar</a>

        <h1>Preencha os Campos</h1>
        <p>Edite o os campos desejados e salve no final da página</p>

        <S.ContainerInformationDosBang>
          <S.ContainerLine>
            <Input
              label="Título do Trabalho*"
              placeholder="Insira o nome"
              type="text"
              required
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />

            <S.ContainerMini>
              <ComboboxComp
                items={formats.data || []}
                label="Tipo de trabalho"
                mandatory
                value={formatId}
                onSelectedChange={({ id }) => setFormatId(id)}
              />
            </S.ContainerMini>
          </S.ContainerLine>
        </S.ContainerInformationDosBang>
        <S.ContainerInformationDosBang>
          <S.ContainerLine>
            <S.ContainerMini>
              <ComboboxComp
                items={courses.data || []}
                label="Curso"
                mandatory
                value={courseId}
                onSelectedChange={({ id }) => setCourseId(id)}
              />
            </S.ContainerMini>
            <S.ContainerMini>
              <ComboboxComp
                items={knowledges.data || []}
                label="Disciplina"
                mandatory
                value={knowledgeIds[0]}
                onSelectedChange={({ id }) => {
                  setKnowledgeIds([id]);
                }}
              />
            </S.ContainerMini>
            <S.ContainerMini>
              <Input
                label="Tema"
                placeholder="Digite o Tema"
                type="text"
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
                required
                mandatory
              />
            </S.ContainerMini>
          </S.ContainerLine>
        </S.ContainerInformationDosBang>

        <S.ContainerLine></S.ContainerLine>
        <S.ContainerMini>
          <h3>Instruções*</h3>
          <textarea
            name=""
            id=""
            rows={5}
            placeholder="Ex: escreva sobre o trabalho"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
          ></textarea>
        </S.ContainerMini>

        <S.ContainerLine>
          <Input
            label="Número de Páginas"
            placeholder="Quantidade"
            type="text"
            required
            value={pages}
            onChange={(e) => setPages(Number(e.target.value))}
          />
          <Input
            label="Número de Palavras"
            placeholder="Quantidade"
            type="text"
            required
            value={words}
            onChange={(e) => setWords(Number(e.target.value))}
          />
        </S.ContainerLine>

        <h1>Informações de Entrega</h1>

        <S.InputsContainer>
          <div>
            <label>
              Data de entrega solicitada pelo professor<span>*</span>
            </label>
            <DatePicker
              selected={deliveryAt}
              onChange={() => {}}
              placeholder="Selecione a Data"
              minDate={new Date()}
            />
          </div>
          <div>
            <label>Nossa previsão de entrega</label>
            <DatePicker
              selected={dateLimit}
              onChange={() => {}}
              placeholder="Selecione a Data"
              minDate={new Date()}
              disabled
            />
          </div>
        </S.InputsContainer>
        <p>
          Conforme previsão acima, a entrega do seu trabalho é efetuada com
          grande antecedência. Isso porque, o estudante tem direito de solicitar
          as alterações que desejar, após a entrega. A previsão é calculada com
          base no dia do pagamento do trabalho, logo após o interesse do
          redator, portanto, pode variar.
        </p>
        <h1>Informações Extras</h1>

        <S.InputsContainer>
          <div>
            <Input
              label="Máximo de Plágio Aceitável"
              placeholder="Insira o Valor"
              type="text"
              required
              value={maxPlagiarism}
              onChange={(e) => setMaxPlagiarism(Number(e.target.value))}
            />
          </div>
          <ComboboxComp
            items={mediaTypes.data || []}
            label="Formato de Trabalho"
            mandatory
            value={mediaTypeId}
            onSelectedChange={(mediaType) => setMediaTypeId(mediaType.id)}
          />
          <div />
        </S.InputsContainer>
        <S.InputsContainer>
          <div>
            <Input
              label="Disposto a Pagar"
              placeholder="Insira o Valor"
              type="text"
              required
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
            />
          </div>
          <S.ContainerMini>
            <div>
              <Input
                label="Valor pago ao Redator"
                placeholder="R$"
                type="text"
                required
                disabled
                value={editorPrice}
              />
            </div>
          </S.ContainerMini>
          <div />
        </S.InputsContainer>

        <S.ContainerMini>
          <h3>Observações</h3>
          <textarea
            value={obs}
            onChange={(e) => setObs(e.target.value)}
            rows={5}
            placeholder="Ex: Espaço para adicionar algum comentário, dica ou pedido ao redator."
          />
        </S.ContainerMini>

        <Dropzone
          onChange={createNewFiles}
          defaultItems={files.map((file) => file.file)}
        />

        <ButtonKnewave
          style={{ marginTop: 20 }}
          variant="PRIMARY"
          size="sm"
          onClick={handleJob}
          disabled={isLoading}
          loading={isLoading}
        >
          Salvar
        </ButtonKnewave>
      </S.ContainerInformation>
    </S.Wrapper>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { id } = context.query;

  return {
    props: { id },
  };
}

export default UpdateJob;
