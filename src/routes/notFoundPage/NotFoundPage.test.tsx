import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";

describe("NotFoundPage component", () => {
  it("renders title and message 404", () => {
    // Arrange
    render(
      <MemoryRouter>
        <NotFoundPage />
      </MemoryRouter>
    );

    // Assert

    // Title
    expect(screen.getByText("Page 404 !")).toBeInTheDocument();
    // 404 message
    expect(
      screen.getByText("La page que vous cherchez n'existe pas.")
    ).toBeInTheDocument();
  });
});
