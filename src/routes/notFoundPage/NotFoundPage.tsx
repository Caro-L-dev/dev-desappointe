import { Title } from "@/components/common/title/Title";
import Wrapper from "@/components/common/wrapper/Wrapper";

export default function NotFoundPage() {
  return (
    <Wrapper>
      <Title children="Page 404 !" />
      <p className="m-6">La page que vous cherchez n'existe pas.</p>
    </Wrapper>
  );
}
