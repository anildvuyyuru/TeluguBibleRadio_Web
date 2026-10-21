import { fireEvent, render, screen } from "@testing-library/react";
import RadioPlayer from "./RadioPlayer";

const STREAM_URL = "https://gains.reviveradio.net/proxy/teluguradio?mp=/stream";

function getAudioElement(container: HTMLElement) {
  const audio = container.querySelector("audio");
  if (!audio) throw new Error("audio element not found");
  return audio;
}

describe("RadioPlayer", () => {
  it("starts in the idle state", () => {
    render(<RadioPlayer />);
    expect(screen.getByText("Press play to listen live")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Play live stream" }),
    ).toBeInTheDocument();
  });

  it("plays the stream and reflects the playing state once audio starts", async () => {
    const { container } = render(<RadioPlayer />);
    const audio = getAudioElement(container);

    fireEvent.click(screen.getByRole("button", { name: "Play live stream" }));
    expect(audio.play).toHaveBeenCalled();
    expect(audio.src).toBe(STREAM_URL);

    fireEvent.playing(audio);

    expect(
      await screen.findByText("Now playing — live broadcast"),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Pause live stream" }),
    ).toBeInTheDocument();
  });

  it("pauses playback and reverts the status immediately", async () => {
    const { container } = render(<RadioPlayer />);
    const audio = getAudioElement(container);

    fireEvent.click(screen.getByRole("button", { name: "Play live stream" }));
    fireEvent.playing(audio);
    await screen.findByText("Now playing — live broadcast");

    fireEvent.click(screen.getByRole("button", { name: "Pause live stream" }));

    expect(audio.pause).toHaveBeenCalled();
    expect(screen.getByText("Press play to listen live")).toBeInTheDocument();
  });

  it("shows an error message when playback fails to start", async () => {
    const audioProto = window.HTMLMediaElement.prototype;
    const playSpy = vi
      .spyOn(audioProto, "play")
      .mockRejectedValueOnce(new Error("blocked"));

    render(<RadioPlayer />);
    fireEvent.click(screen.getByRole("button", { name: "Play live stream" }));

    expect(
      await screen.findByText(
        "Unable to start the live stream. Please try again.",
      ),
    ).toBeInTheDocument();

    playSpy.mockRestore();
  });

  it("shows an error message on a native playback error", () => {
    const { container } = render(<RadioPlayer />);
    const audio = getAudioElement(container);

    fireEvent.error(audio);

    expect(
      screen.getByText("Live stream is currently unavailable."),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Play live stream" }),
    ).toBeInTheDocument();
  });

  it("updates the audio volume from the fader input", () => {
    const { container } = render(<RadioPlayer />);
    const audio = getAudioElement(container);
    const volumeSlider = screen.getByRole("slider", { name: "Volume" });

    fireEvent.change(volumeSlider, { target: { value: "0.3" } });

    expect(audio.volume).toBeCloseTo(0.3);
  });
});
