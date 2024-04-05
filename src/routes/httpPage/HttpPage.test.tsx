import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { HttpPage } from "./HttpPage";

describe("HttpPage component", () => {
  it("renders HTTP code message when code is provided", () => {
    // Arrange
    const errorCode = "701";
    const expectedMessage = `Http code: ${errorCode}`;

    render(
      <MemoryRouter initialEntries={[`/${errorCode}`]}>
        <Routes>
          <Route path="/:code" Component={HttpPage} />
        </Routes>
      </MemoryRouter>
    );

    // Assert
    expect(screen.getByText(expectedMessage)).toBeInTheDocument();
  });
});
