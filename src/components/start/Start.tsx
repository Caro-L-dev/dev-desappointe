import Button from "../common/button/Button";
import { Title } from "../common/title/Title";
import Wrapper from "../common/wrapper/Wrapper";
import Message from "../message/Message";

const generateNewApology = () => {
  console.log("Le bouton a été cliqué !");
};

export const Start = () => {
  return (
    <Wrapper>
      <Title children="Excuses de Dev !" />
      <Message
        currentApology={"Mince, le métro est en panne"}
        currentHttpCode={null}
      />
      <Button onClick={generateNewApology}>Générer une nouvelle excuse</Button>
    </Wrapper>
  );
};
