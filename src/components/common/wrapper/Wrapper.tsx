import Root from "@/routes/root";

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <div>
      <div className="flex flex-col text-center justify-center items-center h-screen">
        <div className="max-w-lg w-dvw mx-auto p-9 bg-white rounded-lg overflow-hidden shadow-md">
          {children}
        </div>
        <Root />
      </div>
    </div>
  );
};

export default Wrapper;
