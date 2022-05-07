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
export const getProfile = async (): Promise<IProfile> => {
  const response = await axiosClient.get('/profile');
  return response.data;
}