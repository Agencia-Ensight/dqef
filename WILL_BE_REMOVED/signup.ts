import Router from "next/router";
import {
  ISignUpData,
  IValidateCodeData,
  signUp,
  validateCode,
} from "../services/auth";

export const getSignupStep3 = (
  userType: number,
  nextRoute: string,
  handleError?: Function
) => {
  const defaultHandleError = (error: any) => {
    // TODO: Implement error handling
    console.error(error);
  };

  const handleSubmit = async (data: any) => {
    try {
      await requestSignup(data);
      Router.push(nextRoute);
    } catch (error) {
      handleError ? handleError(error) : defaultHandleError(error);
    }
  };

  const requestSignup = async (data: { [key: string]: string }) => {
    // Prepare data
    const payload: ISignUpData = {
      email: data.email,
      password: data.password,
      name: data.name,
      phone: data.phone,
      cpf: data.cpf,
      type: userType,
      formation: parseInt(data.formation),
      course: parseInt(data.course),
      college: parseInt(data.college),
      knowledges: data.knowledges
        ? data.knowledges.split(",").map(Number)
        : undefined,
    };
    return await signUp(payload);
  };

  return {
    handleSubmit,
  };
};

export const getSignupStep4 = (
  userType: number,
  nextRoute: string,
  emailCode: string,
  existingDataName: string,
  handleError?: Function
) => {
  const getSignupData = () => {
    const existingData = sessionStorage.getItem(existingDataName);
    if (existingData) {
      return JSON.parse(existingData);
    }
    return null;
  };

  const resendCode = async () => {
    const data = getSignupData();
    if (data) {
      const payload: ISignUpData = {
        email: data.email,
        password: data.password,
        name: data.name,
        phone: data.phone,
        cpf: data.cpf,
        type: userType,
        formation: parseInt(data.formation),
        course: parseInt(data.course),
        college: parseInt(data.college),
      };
      return await signUp(payload);
    }
  };

  const validateEmailCode = async () => {
    const data = getSignupData();
    if (data) {
      const payload: IValidateCodeData = {
        email: data.email,
        code: emailCode,
        password: data.password,
      };
      return await validateCode(payload);
    }
  };

  const defaultHandleError = (error: any) => {
    // TODO: implement error handling
    console.error(error);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await validateEmailCode();
      Router.push(nextRoute);
    } catch (error) {
      handleError ? handleError(error) : defaultHandleError(error);
    }
  };

  return {
    handleSubmit,
    resendCode,
  };
};
