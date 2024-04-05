import { render, act } from "@testing-library/react";
import Countdown from "./Countdown";

// Mock setTimeout to control time in tests
jest.useFakeTimers();

describe("Countdown component", () => {
  it("renders initial value and counts down to 0", () => {
    // Arrange
    const initialValue = 5;
    const onCountdownEnd = jest.fn();

    // Act
    const { getByText } = render(
      <Countdown initialValue={initialValue} onCountdownEnd={onCountdownEnd} />
    );

    // Assert
    expect(getByText(String(initialValue))).toBeInTheDocument();

    // Fast-forward time by 5 seconds
    act(() => {
      jest.advanceTimersByTime(initialValue * 1000);
    });

    // Assert
    expect(onCountdownEnd).toHaveBeenCalled();
    expect(getByText("0")).toBeInTheDocument();
  });

  it("calls onCountdownEnd when countdown reaches 0", () => {
    // Arrange
    const initialValue = 3;
    const onCountdownEnd = jest.fn();

    // Act
    render(
      <Countdown initialValue={initialValue} onCountdownEnd={onCountdownEnd} />
    );

    // Fast-forward time by 3 seconds
    act(() => {
      jest.advanceTimersByTime(initialValue * 1000);
    });

    // Assert
    expect(onCountdownEnd).toHaveBeenCalled();
  });
});
