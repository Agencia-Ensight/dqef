import { useDropzone } from "react-dropzone";
import { AiOutlineDownload } from "react-icons/ai";

import { IDropzone } from "./typings";
import * as S from "./styles";

export function Dropzone({
  label = "Anexar arquivos",
  defaulItems = [],
}: IDropzone) {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = [...defaulItems, ...acceptedFiles].map((file, key) => (
    <li key={key}>
      {file.name} - {file.size} bytes
    </li>
  ));

  return (
    <S.Container>
      <label>{label}</label>
      <section className="container">
        <div {...getRootProps({ className: "dropzone" })}>
          <S.Input {...getInputProps()} name="attachments" />
          <S.IconContainer>
            <AiOutlineDownload size={35} color="#000" />
          </S.IconContainer>
        </div>
        <aside>
          <ul>{files}</ul>
        </aside>
      </section>
    </S.Container>
  );
}
