import { gql } from '@apollo/client';
import { axiosClient, apolloClient } from './api';

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
  const response = await axiosClient.post('/auth/sign-up', data);
  return response.data;
}

export interface IValidateCodeData {
  email: string;
  code: string;
  password: string;
}
export const validateCode = async (data: IValidateCodeData) => {
  const response = await axiosClient.post('/auth/sign-up/code', data);
  return response.data;
}

export interface ICourse {
  id: number;
  name: string;
}
export const getCourses = async (): Promise<ICourse[]> => {
  const result = await apolloClient.query({
    query: gql`
      query {
        higher_courses {
          id
          name
        }
      }
    `
  })
  return result.data.higher_courses;
}