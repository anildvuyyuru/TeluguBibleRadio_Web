import { render, screen } from "@testing-library/react";
import Hero from "./Hero";

describe("Hero", () => {
  it("renders the headline and subtitle", () => {
    render(<Hero />);
    expect(
      screen.getByRole("heading", {
        name: "Streaming The Living Word of Living God",
      }),
    ).toBeInTheDocument();
    expect(screen.getByText(/24×7 Telugu Christian Radio/)).toBeInTheDocument();
  });

  it("renders the radio player and store badges", () => {
    render(<Hero />);
    expect(screen.getByRole("status")).toBeInTheDocument();
    expect(
      screen.getByRole("link", {
        name: /Get Telugu Bible Radio on Google Play/,
      }),
    ).toBeInTheDocument();
  });
});
