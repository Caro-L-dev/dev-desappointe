import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { LostPage } from "./LostPage";

describe("LostPage component", () => {
  it("renders title, gif, and countdown", () => {
    // Arrange
    render(
      <MemoryRouter>
        <LostPage />
      </MemoryRouter>
    );

    // Assert

    // Title
    expect(screen.getByText("I'm lost, damnit..")).toBeInTheDocument();
    // Gif
    expect(screen.getByRole("img")).toBeInTheDocument();
    // Countdown
    expect(screen.getByTestId("countdown-component")).toBeInTheDocument();
  });
});
