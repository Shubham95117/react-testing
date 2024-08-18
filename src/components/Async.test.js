import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async Component", () => {
  test("renders posts if requests succeeds", async () => {
    render(<Async />);

    const listItemElement = await screen.findAllByRole("listitem");

    expect(listItemElement).not.toHaveLength(0);
  });
});
