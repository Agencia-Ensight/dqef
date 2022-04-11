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