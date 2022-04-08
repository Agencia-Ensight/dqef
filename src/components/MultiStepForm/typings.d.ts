import React from "react";

export type Props = React.PropsWithChildren<{
  firstStep?: boolean;
  onSubmit: (_: Object) => void;
  onFail: () => void;
  stateName: string;
}>;
  

