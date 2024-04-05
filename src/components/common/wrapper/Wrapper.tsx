interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <div className="flex flex-col text-center justify-center items-center mt-20">
      <div className="max-w-lg w-dvw mx-auto p-9 bg-white rounded-lg overflow-hidden shadow-md">
        {children}
      </div>
    </div>
  );
};

export default Wrapper;
