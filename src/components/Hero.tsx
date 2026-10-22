import RadioPlayer from "./RadioPlayer";
import StoreBadges from "./StoreBadges";
import { StreamingLinesIcon } from "../icons/Icons";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero__inner">
        <div className="hero__copy">
          <h1>Streaming The Living Word of Living God</h1>
          <p className="hero__subtitle">
            24×7 Telugu Christian Radio bringing Worship, Word, and Hope in
            Christ.
          </p>
          <RadioPlayer />
          <StoreBadges />
        </div>
      </div>
      <div className="hero__waveform" aria-hidden="true">
        <StreamingLinesIcon className="hero__waveform-icon" />
      </div>
    </section>
  );
}
