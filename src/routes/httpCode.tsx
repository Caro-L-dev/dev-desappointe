import { useParams } from "react-router-dom";

import Wrapper from "@/components/common/wrapper/Wrapper";
import { Title } from "@/components/common/title/Title";
import { apologies } from "@/data/apologies";

import NotFoundPage from "@/notFoundPage/NotFoundPage";

interface Params {
  code: string;
  [key: string]: string | undefined;
}

export const HttpPage: React.FC = () => {
  const params = useParams<Params>();
  const code = params.code;

  if (code === undefined) {
    return <NotFoundPage />;
  }

  const errorCode = parseInt(code, 10);
  const apologyErrorCode = apologies.find(
    (apology) => apology.http_code === errorCode
  );

  return (
    <>
      {apologyErrorCode ? (
        <Wrapper>
          <Title children={`Http code: ${errorCode}`} />
          <p className="text-3xl my-6">"{apologyErrorCode.message}"</p>
          <p className="my-3 text-xs">
            Veuillez rentrer un code http compris entre 701 et 799 dans la barre
            URL.
          </p>
        </Wrapper>
      ) : (
        <NotFoundPage />
      )}
    </>
  );
};
