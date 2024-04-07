import Countdown from "@/components/common/countdown/Countdown";
import { Title } from "@/components/common/title/Title";
import Wrapper from "@/components/common/wrapper/Wrapper";

export const LostPage = () => {
  const REDIRECT_TO_WELCOME_PAGE = "/";

  const handleCountdownEnd = () => {
    window.location.href = REDIRECT_TO_WELCOME_PAGE;
  };

  return (
    <Wrapper>
      <Title children="I'm lost, damnit.." />
      <img
        src="https://i.gifer.com/origin/3f/3fcf565ccc553afcfd89858c97304705.gif"
        alt="Where I am?"
      />
      <p className="mt-9">
        🚀 Retour sur la page d'accueil dans{" "}
        <Countdown initialValue={5} onCountdownEnd={handleCountdownEnd} />{" "}
        secondes.
      </p>
    </Wrapper>
  );
};
