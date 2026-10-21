import { render, screen } from "@testing-library/react";
import Welcome from "./Welcome";

describe("Welcome", () => {
  it("renders the heading and tagline", () => {
    render(<Welcome />);
    expect(
      screen.getByRole("heading", { name: "Welcome to Telugu Bible Radio" }),
    ).toBeInTheDocument();
    expect(screen.getByText("Worship. Word. Hope. 24×7.")).toBeInTheDocument();
  });
});
