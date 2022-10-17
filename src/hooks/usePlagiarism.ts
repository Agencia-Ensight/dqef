import { api } from "@/services/api";
import { useCallback, useState } from "react";

export function usePlagiarism() {
  const [isLoading, setIsLoading] = useState(false);

  const checkPlagiarism = useCallback(async (mediaId: string) => {
    setIsLoading(true);

    try {
      const { data } = await api.post(`/leaks/${mediaId}`);

      console.log(data);

      return true;
    } catch (error) {
      setIsLoading(false);
      return false;
    }
  }, []);

  return { checkPlagiarism, isLoading };
}
