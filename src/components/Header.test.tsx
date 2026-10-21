import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  it("renders the brand logo linking home", () => {
    render(<Header />);
    const logo = screen.getByRole("img", { name: "Telugu Bible Radio" });
    expect(logo).toBeInTheDocument();
    expect(logo.closest("a")).toHaveAttribute("href", "#home");
  });

  it("renders the primary navigation links", () => {
    render(<Header />);
    const nav = screen.getByRole("navigation", { name: "Primary" });
    const links = [
      { label: "Home", href: "#home" },
      { label: "Programs", href: "#programs" },
      { label: "About", href: "#about" },
      { label: "Contact", href: "#footer" },
    ];

    for (const { label, href } of links) {
      const link = screen.getByRole("link", { name: label });
      expect(nav).toContainElement(link);
      expect(link).toHaveAttribute("href", href);
    }
  });
});
