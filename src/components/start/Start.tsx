import { useApology } from "@/hooks/useApology";
import Button from "../common/button/Button";
import { Title } from "../common/title/Title";
import Wrapper from "../common/wrapper/Wrapper";
import MessageWithLoader from "../messages/messageWithLoader/MessageWithLoader";

export const Start = () => {
  const { currentApology, currentHttpCode, isLoading, generateNewApology } =
    useApology();

  return (
    <Wrapper>
      <Title children="Excuses de Dev !" />
      <MessageWithLoader
        isLoading={isLoading}
        currentApology={currentApology}
        currentHttpCode={currentHttpCode}
      />
      <Button onClick={generateNewApology}>Générer une nouvelle excuse</Button>
      <div className="mt-6 text-xs pretty">
        <p>Seconde option :</p>
        <p>Entrez un code http compris entre 701 et 799 dans la barre URL.</p>
      </div>
    </Wrapper>
  );
};
