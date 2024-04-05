import { render } from "@testing-library/react";
import Wrapper from "./Wrapper";

describe("Wrapper component", () => {
  it("renders children within a wrapper div", () => {
    // Arrange
    const sampleChild = <div data-testid="sample-child">Sample Child</div>;

    // Act
    const { getByTestId } = render(<Wrapper>{sampleChild}</Wrapper>);

    // Assert
    const wrapperElement = getByTestId("sample-child").parentElement;
    expect(wrapperElement).toBeInTheDocument();
  });
});
