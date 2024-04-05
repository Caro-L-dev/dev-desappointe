import { render } from "@testing-library/react";
import { Title } from "./Title";

describe("Title component", () => {
  it("renders correctly", () => {
    // Arrange
    const textContent = "Sample Title";
    // Act
    const { getByText } = render(<Title>{textContent}</Title>);
    // Assert
    const titleElement = getByText(textContent);
    expect(titleElement).toBeInTheDocument();
    expect(titleElement.tagName).toBe("H1");
    expect(titleElement).toHaveClass("text-5xl font-bold mb-2");
  });
});
