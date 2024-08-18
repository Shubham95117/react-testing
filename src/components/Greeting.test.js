import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";

describe("Greeting component", () => {
  test("renders Hello world as text", () => {
    //Arrange
    render(<Greeting />);

    //Act
    //..nothing

    //Assert
    const helloWorldElement = screen.getByText("Hello World", {
      exact: false,
    });
    expect(helloWorldElement).toBeInTheDocument();
  });
  test("renders good to see you if the button was NOT clicked", () => {
    render(<Greeting />);
    const outputElement = screen.getByText("good to see you", {
      exact: false,
    });
    expect(outputElement).toBeInTheDocument();
  });

  test('renders "Changed!"if the button was clicked', () => {
    render(<Greeting />);
    //act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    //assert
    const outputElement = screen.getByText("Changed!", {
      exact: false,
    });
    expect(outputElement).toBeInTheDocument();
  });

  test('does not render "Its good to see you " if the button was clicked', () => {
    render(<Greeting />);

    //act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    //assert
    const outputElement = screen.queryByText("Its good to see you", {
      exact: false,
    });
    expect(outputElement).toBeNull();
  });
});
