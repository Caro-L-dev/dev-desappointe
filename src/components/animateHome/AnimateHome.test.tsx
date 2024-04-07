// AnimateHome.test.tsx
import { render, screen } from "@testing-library/react";
import { AnimateHome } from "./AnimateHome";

describe("AnimateHome", () => {
  it("displays the title correctly", () => {
    render(<AnimateHome />);
    const titleElement = screen.getByText("Dev désappointé");
    expect(titleElement).toBeInTheDocument();
  });

  it("displays the start component when visible", () => {
    render(<AnimateHome />);
    const startElement = screen.getByTestId("start-component");
    expect(startElement).toBeInTheDocument();
  });
});
