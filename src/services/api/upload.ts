import { api } from "@/services/api";

type IUploadFileReq = {
  file: File;
  title: string;
  type?: number;
};

type IUploadFileRes = {
  id: string;
  link: string;
};

export async function uploadFile({
  file,
  title,
  type = 1,
}: IUploadFileReq): Promise<IUploadFileRes> {
  const formData = new FormData();
  formData.append("media", file);
  formData.append("title", title);
  formData.append("type", type.toString());

  const { data } = await api.patch("/media", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  const { id, link } = data.media;

  return { id, link };
}
