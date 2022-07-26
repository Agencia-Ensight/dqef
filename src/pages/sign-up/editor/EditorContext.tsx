import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useCallback,
} from "react";

import { CreateUserEditProps } from "./typings";

type FormStep = "info" | "aditional-info" | "code" | "success";

type EditorProviderProps = {
  data: CreateUserEditProps;
  step: FormStep;
  updateStep(step: FormStep): void;
  updateData(data: Partial<CreateUserEditProps>): void;
};

type EditorContextProvider = {
  children: ReactNode;
};

const EditorContext = createContext<EditorProviderProps>(
  {} as EditorProviderProps
);

function EditorProvider({ children }: EditorContextProvider) {
  const [step, setStep] = useState<FormStep>("info");
  const [data, setData] = useState<CreateUserEditProps>(
    {} as CreateUserEditProps
  );

  const updateData = useCallback((newData: Partial<CreateUserEditProps>) => {
    setData((oldData) => ({ ...oldData, ...newData }));
  }, []);

  const updateStep = useCallback((newStep: FormStep) => setStep(newStep), []);

  return (
    <EditorContext.Provider value={{ data, updateData, step, updateStep }}>
      {children}
    </EditorContext.Provider>
  );
}

function useEditor(): EditorProviderProps {
  const context = useContext(EditorContext);

  if (!context) {
    throw new Error(`useEditor must be used within a EditorProvider`);
  }

  return context;
}

export { EditorProvider, useEditor };
