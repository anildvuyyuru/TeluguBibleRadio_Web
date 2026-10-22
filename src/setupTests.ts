import "@testing-library/jest-dom/vitest";

// jsdom does not implement media playback; stub it so RadioPlayer can run in tests.
window.HTMLMediaElement.prototype.play = vi.fn().mockResolvedValue(undefined);
window.HTMLMediaElement.prototype.pause = vi.fn();
