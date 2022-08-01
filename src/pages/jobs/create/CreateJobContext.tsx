import {
  ReactNode,
  createContext,
  useState,
  useCallback,
  useContext,
} from "react";
import { CreateJobProps } from "./typings";

type FormStep = "main-info" | "select-date" | "additional-info" | "success";

type JobProps = {
  data: CreateJobProps;
  step: FormStep;
  updateStep(step: FormStep): void;
  updateData(data: Partial<CreateJobProps>): void;
};

type CreateJobContextProvider = {
  children: ReactNode;
};

const CreateJobContext = createContext<JobProps>({} as JobProps);

function JobProvider({ children }: CreateJobContextProvider) {
  const [step, setStep] = useState<FormStep>("main-info");
  const [data, setData] = useState<CreateJobProps>({} as CreateJobProps);

  const updateData = useCallback((newData: Partial<CreateJobProps>) => {
    setData((oldData) => ({ ...oldData, ...newData }));
  }, []);

  const updateStep = useCallback((newStep: FormStep) => setStep(newStep), []);

  return (
    <CreateJobContext.Provider value={{ data, updateData, step, updateStep }}>
      {children}
    </CreateJobContext.Provider>
  );
}

function useCreateJob(): JobProps {
  const context = useContext(CreateJobContext);

  if (!context) {
    throw new Error(`useCreateJob must be used within a CreateJobContext`);
  }

  return context;
}

export { useCreateJob, JobProvider };
