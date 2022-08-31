import { useDropzone } from "react-dropzone";
import { AiOutlineDownload } from "react-icons/ai";

import { IDropzone } from "./typings";
import * as S from "./styles";
import { useEffect, useState } from "react";

export function Dropzone({
  label = "Anexar arquivos",
  defaultItems = [],
  onChange,
}: IDropzone) {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
  const [files, setFiles] = useState([...defaultItems, ...acceptedFiles]);

  const removeFile = (key: number) => {
    setFiles((oldFiles) => {
      const newFiles = oldFiles.filter((_, index) => index !== key);
      onChange && onChange(newFiles);
      return newFiles;
    });
  };

  useEffect(() => {
    setFiles((oldFiles) => {
      const newFiles = [...oldFiles, ...acceptedFiles];
      onChange && onChange(newFiles);
      return newFiles;
    });
  }, [acceptedFiles, onChange]);

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
          <ul>
            {files.map((file, key) => (
              <li key={key}>
                {file.name} - {file.size} bytes{" "}
                <button type="button" onClick={() => removeFile(key)}>
                  X
                </button>
              </li>
            ))}
          </ul>
        </aside>
      </section>
    </S.Container>
  );
}
