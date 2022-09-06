import { useCallback, useState } from "react";

export function usePlagiarism() {
  const [isLoading, setIsLoading] = useState(false);

  const checkPLagiarism = useCallback(async () => {
    setIsLoading(true);

    try {
      return true;
    } catch (error) {
      return false;
    }

    setIsLoading(false);
  }, []);

  return { checkPLagiarism, isLoading };
}
