import { useState } from "react";
import { apologies } from "../data/apologies";

export const useApology = () => {
  const [currentApology, setCurrentApology] = useState<string>("");
  const [currentHttpCode, setCurrentHttpCode] = useState<number | null>(null);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const MAX_LOADING_TIME = 4000;
  const MIN_LOADING_TIME = 1000;

  const generateNewApology = () => {
    setIsLoading(true);
    const loadingTime =
      Math.floor(Math.random() * MAX_LOADING_TIME) + MIN_LOADING_TIME;
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * apologies.length);
      const newApology = apologies[randomIndex].message.trim();
      const newHttpCode = apologies[randomIndex].http_code;
      setCurrentApology(newApology);
      setCurrentHttpCode(newHttpCode);
      setIsLoading(false);
    }, loadingTime);
  };

  return { currentApology, currentHttpCode, isLoading, generateNewApology };
};
