import { useEffect, useRef, useState } from "react";
import { PauseIcon, PlayIcon, SpinnerIcon, VolumeIcon } from "../icons/Icons";
import "./RadioPlayer.css";

const STREAM_URL = "https://gains.reviveradio.net/proxy/teluguradio?mp=/stream";

export default function RadioPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [volume, setVolume] = useState(0.8);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    setError(null);
    setIsLoading(true);
    try {
      // (Re)assign the source so the live stream restarts from the current moment.
      if (!audio.src) audio.src = STREAM_URL;
      await audio.play();
    } catch {
      setError("Unable to start the live stream. Please try again.");
      setIsLoading(false);
    }
  };

  return (
    <div className="console">
      <audio
        ref={audioRef}
        preload="none"
        onWaiting={() => setIsLoading(true)}
        onPlaying={() => {
          setIsLoading(false);
          setIsPlaying(true);
        }}
        onPause={() => setIsPlaying(false)}
        onError={() => {
          setError("Live stream is currently unavailable.");
          setIsPlaying(false);
          setIsLoading(false);
        }}
      />

      <span
        className={`console__lamp ${isPlaying ? "is-on" : ""}`}
        aria-hidden="true"
      />
      <div className="console__info">
        <p className="console__title">Telugu Bible Radio</p>
        <p className="console__status" role="status">
          {error ??
            (isLoading
              ? "Buffering…"
              : isPlaying
                ? "Now playing — live broadcast"
                : "Press play to listen live")}
        </p>
      </div>

      <div className="console__fader">
        <VolumeIcon />
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={(event) => setVolume(Number(event.target.value))}
          aria-label="Volume"
        />
      </div>

      <button
        type="button"
        className="console__play"
        onClick={togglePlay}
        aria-label={isPlaying ? "Pause live stream" : "Play live stream"}
      >
        {isLoading ? (
          <SpinnerIcon className="console__spinner" />
        ) : isPlaying ? (
          <PauseIcon />
        ) : (
          <PlayIcon />
        )}
      </button>
    </div>
  );
}
