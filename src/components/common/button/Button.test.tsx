import { render, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button component", () => {
  it("renders button text correctly", () => {
    const buttonText = "Click me";
    const { getByText } = render(
      <Button onClick={() => {}}>{buttonText}</Button>
    );
    expect(getByText(buttonText)).toBeInTheDocument();
  });

  it("calls onClick function when clicked", () => {
    const onClickMock = jest.fn();
    const { getByText } = render(
      <Button onClick={onClickMock}>Click me</Button>
    );
    fireEvent.click(getByText("Click me"));
    expect(onClickMock).toHaveBeenCalled();
  });
});
