const Loader = () => {
  return (
    <span
      data-testid="loader-component"
      className="flex justify-center items-center h-32"
    >
      <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-gray-900" />
    </span>
  );
};

export default Loader;
