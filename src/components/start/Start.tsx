import Button from "../common/button/Button";
import { Title } from "../common/title/Title";
import Wrapper from "../common/wrapper/Wrapper";

const generateNewApology = () => {
  console.log("Le bouton a été cliqué !");
};

export const Start = () => {
  return (
    <Wrapper>
      <Title children="Excuses de Dev !" />
      <Button onClick={generateNewApology}>Générer une nouvelle excuse</Button>
    </Wrapper>
  );
};
