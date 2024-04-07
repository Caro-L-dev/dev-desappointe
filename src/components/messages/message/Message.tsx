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
      <blockquote
        data-testid="apology-message"
        style={{ fontFamily: "var(--message-font)" }}
        className="text-xl italic mb-6"
      >
        "{currentApology}"
      </blockquote>
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
