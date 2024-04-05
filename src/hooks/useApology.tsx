import { useState } from "react";
import { apologies } from "../data/apologies";

export const useApology = () => {
  const [currentApology, setCurrentApology] = useState<string>("");
  const [currentHttpCode, setCurrentHttpCode] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const generateNewApology = () => {
    setIsLoading(true);
    // Loading will be simulated to last between 1 and 5 seconds.
    const loadingTime = Math.floor(Math.random() * 4000) + 1000;
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * apologies.length);
      const newApology = apologies[randomIndex].message.trim();
      const newHttpCode = apologies[randomIndex].http_code;
      setCurrentApology(newApology);
      setCurrentHttpCode(newHttpCode);
      // Remove the loader when the loading time is finished.
      setIsLoading(false);
    }, loadingTime);
  };

  return { currentApology, currentHttpCode, isLoading, generateNewApology };
};
