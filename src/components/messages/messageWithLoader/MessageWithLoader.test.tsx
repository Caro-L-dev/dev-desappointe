import { render } from "@testing-library/react";
import MessageWithLoader from "./MessageWithLoader";

describe("MessageWithLoader component", () => {
  it("renders Loader when isLoading is true", () => {
    // Arrange
    const isLoading = true;
    const currentApology = null;
    const currentHttpCode = null;

    // Act
    const { getByTestId } = render(
      <MessageWithLoader
        isLoading={isLoading}
        currentApology={currentApology}
        currentHttpCode={currentHttpCode}
      />
    );

    // Assert
    const loaderElement = getByTestId("loader-component");
    expect(loaderElement).toBeInTheDocument();
  });

  it("renders default message when isLoading is false and currentApology is null", () => {
    // Arrange
    const isLoading = false;
    const currentApology = null;
    const currentHttpCode = null;

    // Act
    const { getByText } = render(
      <MessageWithLoader
        isLoading={isLoading}
        currentApology={currentApology}
        currentHttpCode={currentHttpCode}
      />
    );

    // Assert
    const defaultMessageElement = getByText(
      "Prêt à découvrir des excuses spéciales dev ?"
    );
    expect(defaultMessageElement).toBeInTheDocument();
  });
});
