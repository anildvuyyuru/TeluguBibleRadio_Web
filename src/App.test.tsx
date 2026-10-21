import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders the header, main sections, and footer in order", () => {
    const { container } = render(<App />);

    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
    expect(container.querySelector("#home")).toBeInTheDocument();
    expect(container.querySelector("#programs")).toBeInTheDocument();
    expect(container.querySelector("#about")).toBeInTheDocument();

    const sectionIds = Array.from(
      container.querySelectorAll("main > section"),
    ).map((section) => section.id);
    expect(sectionIds).toEqual(["home", "welcome", "programs", "about"]);
  });
});
