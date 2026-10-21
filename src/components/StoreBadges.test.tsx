import { render, screen } from "@testing-library/react";
import StoreBadges from "./StoreBadges";

describe("StoreBadges", () => {
  it("renders the Google Play badge link", () => {
    render(<StoreBadges />);
    const link = screen.getByRole("link", {
      name: "Get Telugu Bible Radio on Google Play",
    });
    expect(link).toHaveAttribute(
      "href",
      "https://play.google.com/store/apps/details?id=com.revive.telugubibleradio",
    );
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noreferrer");
  });

  it("renders the App Store badge link", () => {
    render(<StoreBadges />);
    const link = screen.getByRole("link", {
      name: "Download Telugu Bible Radio on the App Store",
    });
    expect(link).toHaveAttribute(
      "href",
      "https://apps.apple.com/in/app/telugu-bible-radio/id1583965264",
    );
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noreferrer");
  });
});
