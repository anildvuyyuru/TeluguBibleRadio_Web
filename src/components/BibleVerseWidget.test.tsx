import { render, screen } from "@testing-library/react";
import BibleVerseWidget from "./BibleVerseWidget";

describe("BibleVerseWidget", () => {
  it("renders the verse, citation, and source link", () => {
    render(<BibleVerseWidget />);
    expect(
      screen.getByText(/Jesus Christ is the same yesterday/),
    ).toBeInTheDocument();
    expect(screen.getByText("Hebrews 13:8")).toBeInTheDocument();

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "https://dailyverses.net");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noreferrer");
  });
});
