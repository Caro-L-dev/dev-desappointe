import { render } from "@testing-library/react";
import Loader from "./Loader";

describe("Loader component", () => {
  it("renders correctly", () => {
    const { container } = render(<Loader />);

    expect(container.firstChild).toHaveClass(
      "flex justify-center items-center h-32"
    );

    const spinnerElement = container.querySelector(".animate-spin");
    expect(spinnerElement).toBeInTheDocument();
    expect(spinnerElement).toHaveClass(
      "rounded-full h-10 w-10 border-t-2 border-b-2 border-gray-900"
    );
  });
});
