import { render, screen } from "@testing-library/react";
import AboutFounder from "./AboutFounder";

describe("AboutFounder", () => {
  it("renders the founder's name and photo", () => {
    render(<AboutFounder />);
    expect(screen.getAllByText("Pastor N. I. Solomon Raju")).not.toHaveLength(
      0,
    );
    expect(
      screen.getByRole("img", { name: "Pastor N. I. Solomon Raju" }),
    ).toBeInTheDocument();
  });

  it("renders the section heading and a contact link", () => {
    render(<AboutFounder />);
    expect(
      screen.getByRole("heading", {
        name: "Sharing God's Word with care and compassion",
      }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Get in Touch" })).toHaveAttribute(
      "href",
      "#footer",
    );
  });
});
