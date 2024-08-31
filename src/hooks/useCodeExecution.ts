import { useState } from "react";
import apiClient from "@/services/apiClient";

interface ExecuteParams {
  language: string;
  version: string;
  code: string;
}

function useCodeExecution() {
  const [output, setOutput] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const execute = async ({
    language,
    version,
    code,
  }: ExecuteParams): Promise<void> => {
    setIsLoading(true);

    try {
      const res = await apiClient({
        method: "POST",
        url: "/execute",
        data: {
          language,
          version,
          files: [
            {
              content: code,
            },
          ],
        },
      });

      const result = res.data.run;
      setOutput(result.output.split("\n"));
    } catch (error) {
      console.error(error); // More descriptive logging
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    output,
    isLoading,
    isError,
    execute,
  };
}

export default useCodeExecution;
