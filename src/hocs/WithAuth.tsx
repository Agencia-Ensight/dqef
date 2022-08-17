import { ComponentType } from "react";

import { useUser } from "@/contexts";

function ensureAuth<T>(WrappedComponent: ComponentType<T>) {
  return (hocProps: T) => {
    const { user } = useUser();

    if (!user) return null;

    return <WrappedComponent {...hocProps} />;
  };
}

export { ensureAuth };
