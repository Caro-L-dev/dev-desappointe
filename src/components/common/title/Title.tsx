interface TitleProps {
  children: React.ReactNode;
}

export const Title: React.FC<TitleProps> = ({ children }) => {
  return (
    <h1
      style={{ fontFamily: "var(--title-font)" }}
      className="text-5xl font-bold mb-2 uppercase"
    >
      {children}
    </h1>
  );
};
