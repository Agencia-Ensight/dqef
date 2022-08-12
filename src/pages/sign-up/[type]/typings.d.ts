type CreateUserEditorProps = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
  cpf: string;
  code: string;
  college: number;
  formation: number;
  knowledges: number[];
  termsOfUse: boolean;
  privacyPolicy: boolean;
};

type ICompleteSignUp = {
  type: "EDITOR" | "STUDENT";
};

export { CreateUserEditorProps, ICompleteSignUp };
