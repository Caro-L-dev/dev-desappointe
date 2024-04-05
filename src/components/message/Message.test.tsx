import { render } from "@testing-library/react";
import Message from "./Message";

describe("Message component", () => {
  it("renders apology message correctly", () => {
    // Arrange
    const currentApology = "Sample apology";
    const currentHttpCode = 404;

    // Act
    const { getByText } = render(
      <Message
        currentApology={currentApology}
        currentHttpCode={currentHttpCode}
      />
    );

    // Assert
    const MessageElement = getByText(`" ${currentApology}."`);
    expect(MessageElement).toBeInTheDocument();

    const httpCodeMessageElement = getByText(
      `Code Http correspondant au message "${currentApology}" : ${currentHttpCode}`
    );
    expect(httpCodeMessageElement).toBeInTheDocument();
  });
});
