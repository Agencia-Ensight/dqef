import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useCallback,
} from "react";
import { CreateUserStudentProps } from "./typings";

type FormStep = "info" | "aditional-info" | "code" | "success";

type StudentProviderProps = {
  data: CreateUserStudentProps;
  step: FormStep;
  updateStep(step: FormStep): void;
  updateData(data: Partial<CreateUserStudentProps>): void;
};

type StudentContextProvider = {
  children: ReactNode;
};

const StudentContext = createContext<StudentProviderProps>(
  {} as StudentProviderProps
);

function StudentProvider({ children }: StudentContextProvider) {
  const [step, setStep] = useState<FormStep>("info");
  const [data, setData] = useState<CreateUserStudentProps>(
    {} as CreateUserStudentProps
  );

  const updateData = useCallback((newData: Partial<CreateUserStudentProps>) => {
    setData((oldData) => ({ ...oldData, ...newData }));
  }, []);

  const updateStep = useCallback((newStep: FormStep) => setStep(newStep), []);

  return (
    <StudentContext.Provider value={{ data, updateData, step, updateStep }}>
      {children}
    </StudentContext.Provider>
  );
}

function useStudent(): StudentProviderProps {
  const context = useContext(StudentContext);

  if (!context) {
    throw new Error(`useStudent must be used within a StudentProvider`);
  }

  return context;
}

export { StudentProvider, useStudent };
