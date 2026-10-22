import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer", () => {
  it("renders the copyright notice", () => {
    render(<Footer />);
    expect(
      screen.getByText("© Telugu Bible Radio. All rights reserved."),
    ).toBeInTheDocument();
  });

  it("renders the bible verse widget and store badges", () => {
    render(<Footer />);
    expect(screen.getByText("Bible Verse of the Day")).toBeInTheDocument();
    expect(
      screen.getByRole("link", {
        name: /Download Telugu Bible Radio on the App Store/,
      }),
    ).toBeInTheDocument();
  });
});
