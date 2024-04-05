import { useState } from "react";
import { apologies } from "../data/apologies";

export const useApology = () => {
  const [currentApology, setCurrentApology] = useState<string>("");
  const [currentHttpCode, setCurrentHttpCode] = useState<number | null>(null);

  const generateNewApology = () => {
    const randomIndex = Math.floor(Math.random() * apologies.length);
    const newApology = apologies[randomIndex].message.trim();
    const newHttpCode = apologies[randomIndex].http_code;
    setCurrentApology(newApology);
    setCurrentHttpCode(newHttpCode);
  };

  return { currentApology, currentHttpCode, generateNewApology };
};
