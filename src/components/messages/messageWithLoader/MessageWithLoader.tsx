import Loader from "../../common/loader/Loader";
import Message from "../message/Message";

interface MessageWithLoaderProps {
  isLoading: boolean;
  currentApology: string | null;
  currentHttpCode: number | null;
}

const MessageWithLoader: React.FC<MessageWithLoaderProps> = ({
  isLoading,
  currentApology,
  currentHttpCode,
}) => {
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : currentApology ? (
        <Message
          currentApology={currentApology}
          currentHttpCode={currentHttpCode}
        />
      ) : (
        <p className="my-6">Prêt à découvrir des excuses spéciales dev ?</p>
      )}
    </>
  );
};

export default MessageWithLoader;
