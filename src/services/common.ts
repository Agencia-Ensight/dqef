import { axiosClient } from "./api";

export interface IProfile {
  id: string;
  user_type_id: number;
  formation_id: number;
  higher_course_id: number;
  college_id: number;
  email: string;
  remember_me_token: string;
  enable: boolean;
  avatar: string;
  name: string;
  phone: string;
  cpf: string;
  firebase_token: string;
  birth_date: Date;
  created_at: Date;
  updated_at: Date;
  userType: {
    id: number;
    name: string;
    created_at: Date;
    updated_at: Date;
  },
  formation: {
    id: number;
    name: string;
    created_at: Date;
    updated_at: Date;
  }
}
export const getProfile = async (token: string): Promise<IProfile> => {
  const response = await axiosClient.get('/profile', {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  return response.data.data[0];
}


export interface IProfileSimple {
  name?: string;
  phone?: string;
  cpf?: string;
  password?: string;
  type?: number;
  formation?: number;
  course?: number;
  college?: number;
  email?: string;
}
export const updateProfile = async (token: string, payload: IProfileSimple): Promise<boolean> => {
  const response = await axiosClient.put('/profile', payload, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  return true;
}