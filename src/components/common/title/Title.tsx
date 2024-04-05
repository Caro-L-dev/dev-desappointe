interface TitleProps {
  children: React.ReactNode;
}

export const Title: React.FC<TitleProps> = ({ children }) => {
  return <h1 className="text-5xl font-bold mb-2">{children}</h1>;
};
