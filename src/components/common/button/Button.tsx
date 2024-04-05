interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button
      role="button"
      onClick={onClick}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-4 rounded-lg cursor-pointer"
    >
      {children}
    </button>
  );
};

export default Button;
