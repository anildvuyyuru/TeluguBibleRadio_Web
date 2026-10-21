import solomonPhoto from "../assets/solomon.png";
import "./AboutFounder.css";

export default function AboutFounder() {
  return (
    <section id="about" className="about-founder section">
      <div className="container about-founder__inner">
        <div className="about-founder__media">
          <div className="about-founder__photo-frame">
            <img
              src={solomonPhoto}
              alt="Pastor N. I. Solomon Raju"
              className="about-founder__photo"
            />
          </div>
          <div className="about-founder__caption">
            <p className="about-founder__caption-name">
              Pastor N. I. Solomon Raju
            </p>
            <p className="about-founder__caption-role">
              Founder of Telugu Bible Radio | Pastor, Bethel Baptist Gospel
              Church
            </p>
          </div>
        </div>

        <div className="about-founder__content">
          <p className="about-founder__eyebrow">About the Founder-Director</p>
          <h2>Sharing God's Word with care and compassion</h2>
          <p className="about-founder__telugu" lang="te">
            ప్రతి స్వరంలో… ప్రతి సందేశంలో… కృప మరియు సత్యం
          </p>

          <div className="about-founder__bio">
            <p>
              Pastor Solomon Raju comes from a remarkable family legacy shaped
              by faith, suffering, and God's unfailing grace. After the
              catastrophic 1977 Diviseema tidal wave tragedy, his parents
              devoted their lives to rebuilding communities, serving the
              hurting, and proclaiming the Gospel. This legacy of compassion and
              commitment became the foundation of Pastor Solomon Raju's own
              calling.
            </p>
            <p>
              Along with his wife Kezia, he has faithfully shepherded the Bethel
              Baptist Gospel Church and contributed to social, educational, and
              missionary initiatives across India. As the Chief Trustee of the
              Indigenous Mission Centre for Christ Trust, he works to strengthen
              local leadership and empower indigenous missions for long-term
              Gospel impact.
            </p>
            <p>
              Pastor Solomon Raju's heart for people and his passion for media
              ministry led to the creation of Telugu Bible Radio. This platform
              is dedicated to sharing the Good News of Jesus Christ,
              strengthening faith, restoring hope, and bringing the Living Word
              of the Living God into every home — 24×7.
            </p>
            <p className="about-founder__vision">
              His vision is simple yet profound: "To glorify God and reach lives
              through worship, the Word, and the transforming power of His
              love."
            </p>
          </div>

          <a className="btn btn-primary" href="#footer">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
