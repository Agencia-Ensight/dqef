import { ReactNode, useReducer } from "react";

export type IRenderProps<T = any> = {
  onComplete: (res?: T) => void;
  onPrevStep: (res?: T) => void;
  prevRes?: T;
};

export type IRenderStop<T> = {
  onPrevStep: (res: T) => void;
  onComplete: (res: T) => void;
  prevRes: T;
};

interface IStep<T> {
  label: string;
  render: (data: IRenderStop<T>) => ReactNode;
}

type IStepper<T> = {
  onComplete: (data: T) => void;
  steps: IStep<T>[];
};

type IStepState<T> = {
  currentStep: number;
  responses: T[];
};

type IStepNextAction<T> = {
  type: "next";
  response: T;
};

type IStepPrevAction<T> = {
  type: "prev";
  response: T;
};

type IStepAction<T> = IStepNextAction<T> | IStepPrevAction<T>;

const initialState = {
  currentStep: 0,
  responses: [],
};

function Stepper<T>({ onComplete, steps }: IStepper<T>) {
  const [state, dispatch] = useReducer(
    (state: IStepState<T>, action: IStepAction<T>) => {
      switch (action.type) {
        case "next":
          if (state.currentStep === steps.length - 1) return state;

          return {
            currentStep: Math.min(state.currentStep + 1, steps.length - 1),
            responses: [...state.responses, action.response],
          };
        case "prev":
          return {
            responses: [...state.responses, action.response],
            currentStep: Math.max(state.currentStep - 1, 0),
          };
      }
    },
    initialState
  );

  function onStepComplete(response: T) {
    dispatch({ type: "next", response });
    if (state.currentStep === steps.length - 1) onComplete(response);
  }

  function onPrevStep(response: T) {
    dispatch({ type: "prev", response });
  }

  return (
    <>
      {steps[state.currentStep].render({
        prevRes: state.responses[state.currentStep - 1],
        onComplete: onStepComplete,
        onPrevStep,
      })}
    </>
  );
}

export { Stepper };
