import { render, screen } from "@testing-library/react";
import { Start } from "./Start";

jest.mock("../../hooks/useApology.tsx", () => ({
  useApology: () => ({
    currentApology: "current apology",
    currentHttpCode: 200,
    isLoading: false,
    generateNewApology: jest.fn(),
  }),
}));

describe("Start component", () => {
  test("renders with correct elements", () => {
    render(<Start />);

    // Assert
    expect(screen.getByText("Excuses de Dev !")).toBeInTheDocument();
    expect(screen.getByText("Générer une nouvelle excuse")).toBeInTheDocument();
  });
});
