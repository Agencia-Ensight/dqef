import { apiClient } from './api';

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
}
export const signUp = async (data: ISignUpData) => {
  const response = await apiClient.post('/auth/sign-up', data);
  return response.data;
}

export interface IValidateCodeData {
  email: string;
  code: string;
  password: string;
}
export const validateCode = async (data: IValidateCodeData) => {
  const response = await apiClient.post('/auth/sign-up/code', data);
  return response.data;
}