interface MessageProps {
  currentApology: string;
  currentHttpCode: number | null;
}

const Message: React.FC<MessageProps> = ({
  currentApology,
  currentHttpCode,
}) => {
  return (
    <div className="p-6">
      {currentApology ? (
        <blockquote className="text-xl italic mb-6">
          "{currentApology}"
        </blockquote>
      ) : (
        <p>Prêt à découvrir des excuses spéciales dev ?</p>
      )}
      {currentHttpCode && (
        <p className="text-sm">
          Code Http correspondant au message "{currentApology}" :{" "}
          {currentHttpCode}
        </p>
      )}
    </div>
  );
};

export default Message;
