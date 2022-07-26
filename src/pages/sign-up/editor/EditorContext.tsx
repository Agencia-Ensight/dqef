import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useCallback,
} from "react";

import { CreateUserEditorProps } from "./typings";

type FormStep = "info" | "aditional-info" | "code" | "success";

type EditorProviderProps = {
  data: CreateUserEditorProps;
  step: FormStep;
  updateStep(step: FormStep): void;
  updateData(data: Partial<CreateUserEditorProps>): void;
};

type EditorContextProvider = {
  children: ReactNode;
};

const EditorContext = createContext<EditorProviderProps>(
  {} as EditorProviderProps
);

function EditorProvider({ children }: EditorContextProvider) {
  const [step, setStep] = useState<FormStep>("info");
  const [data, setData] = useState<CreateUserEditorProps>(
    {} as CreateUserEditorProps
  );

  const updateData = useCallback((newData: Partial<CreateUserEditorProps>) => {
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
