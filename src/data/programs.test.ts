import { programs } from "./programs";

describe("programs data", () => {
  it("has the expected number of entries", () => {
    expect(programs).toHaveLength(8);
  });

  it("gives every program a non-empty title, description, and icon component", () => {
    for (const program of programs) {
      expect(program.title.trim().length).toBeGreaterThan(0);
      expect(program.description.trim().length).toBeGreaterThan(0);
      expect(typeof program.icon).toBe("function");
    }
  });

  it("has unique titles, since Programs.tsx keys list items by title", () => {
    const titles = programs.map((program) => program.title);
    expect(new Set(titles).size).toBe(titles.length);
  });
});
