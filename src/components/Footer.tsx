import tbrLogo from "../assets/TBR.png";
import BibleVerseWidget from "./BibleVerseWidget";
import StoreBadges from "./StoreBadges";
import "./Footer.css";

export default function Footer() {
  return (
    <footer id="footer" className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__brand">
          <a href="#home" className="site-footer__logo-chip">
            <img src={tbrLogo} alt="Telugu Bible Radio" />
          </a>
          <p>
            Worship, Scripture, and encouragement for your daily walk with
            Christ. Take a quiet moment to listen and reflect on God's Word.
          </p>
          <StoreBadges />
        </div>

        <BibleVerseWidget />
      </div>

      <div className="site-footer__bottom">
        <p>
          It's not just about listening - it's about encountering Christ, every
          single day.
        </p>
        <p>© Telugu Bible Radio. All rights reserved.</p>
      </div>
    </footer>
  );
}
