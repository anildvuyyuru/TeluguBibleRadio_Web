import { render, screen } from "@testing-library/react";
import Programs from "./Programs";
import { programs } from "../data/programs";

describe("Programs", () => {
  it("renders the section heading", () => {
    render(<Programs />);
    expect(
      screen.getByRole("heading", { name: "Our Programs" }),
    ).toBeInTheDocument();
  });

  it("renders one list entry per program with matching titles", () => {
    render(<Programs />);
    const items = screen.getAllByRole("listitem");
    expect(items).toHaveLength(programs.length);

    for (const program of programs) {
      expect(
        screen.getByRole("heading", { name: program.title }),
      ).toBeInTheDocument();
      expect(screen.getByText(program.description)).toBeInTheDocument();
    }
  });
});
