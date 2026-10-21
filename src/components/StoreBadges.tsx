import playStoreBadge from "../assets/playstore.png";
import appStoreBadge from "../assets/app.png";
import "./StoreBadges.css";

export default function StoreBadges() {
  return (
    <div className="store-badges">
      <a
        href="https://play.google.com/store/apps/details?id=com.revive.telugubibleradio"
        target="_blank"
        rel="noreferrer"
        aria-label="Get Telugu Bible Radio on Google Play"
      >
        <img
          src={playStoreBadge}
          alt="Get it on Google Play"
          className="store-badges__img"
        />
      </a>
      <a
        href="https://apps.apple.com/in/app/telugu-bible-radio/id1583965264"
        target="_blank"
        rel="noreferrer"
        aria-label="Download Telugu Bible Radio on the App Store"
      >
        <img
          src={appStoreBadge}
          alt="Download on the App Store"
          className="store-badges__img"
        />
      </a>
    </div>
  );
}
