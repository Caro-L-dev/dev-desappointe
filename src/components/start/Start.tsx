import { useApology } from "@/hooks/useApology";
import Button from "../common/button/Button";
import { Title } from "../common/title/Title";
import Wrapper from "../common/wrapper/Wrapper";
import Message from "../message/Message";

export const Start = () => {
  const { currentApology, currentHttpCode, generateNewApology } = useApology();

  return (
    <Wrapper>
      <Title children="Excuses de Dev !" />
      <Message
        currentApology={currentApology}
        currentHttpCode={currentHttpCode}
      />
      <Button onClick={generateNewApology}>Générer une nouvelle excuse</Button>
    </Wrapper>
  );
};
