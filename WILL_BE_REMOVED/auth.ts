import {} from "../src/services/api";

export interface IDefaultResponse {
  status: number;
  message: string;
  data: any;
}

export interface ISignUpData {
  email: string;
  password: string;
  name: string;
  phone: string;
  cpf: string;
  type: number;
  formation: number;
  course: number;
  college: number;
  knowledges?: number[];
}
export const signUp = async (data: ISignUpData) => {
  const response = await axiosClient.post("/auth/sign-up", data);
  return response.data;
};

export interface IValidateCodeData {
  email: string;
  code: string;
  password: string;
}
export const validateCode = async (data: IValidateCodeData) => {
  const response = await axiosClient.post("/auth/sign-up/code", data);
  return response.data;
};

export const forgotPassword = async (
  email: string
): Promise<IDefaultResponse> => {
  const response = await axiosClient.post("/auth/forget-password", { email });
  return response.data;
};

export const forgotPasswordCode = async (
  email: string,
  code: string,
  password: string
): Promise<IDefaultResponse> => {
  const response = await axiosClient.post("/auth/forget-password/code", {
    email,
    code,
    password,
  });
  return response.data;
};

export const signIn = async (
  email: string,
  password: string
): Promise<IDefaultResponse> => {
  const response = await axiosClient.post("/auth/sign-in", { email, password });
  return response.data;
};
