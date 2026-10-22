import "./Welcome.css";

export default function Welcome() {
  return (
    <section id="welcome" className="welcome section">
      <div className="container welcome__inner">
        <div className="welcome__copy">
          <h2>Welcome to Telugu Bible Radio</h2>
          <p className="welcome__tagline">Worship. Word. Hope. 24×7.</p>

          <p>
            Telugu Bible Radio is more than an online Christian radio station —
            it is a spiritual companion, carrying the life-giving message of our
            Lord and Saviour Jesus Christ to hearts across the world.
          </p>
          <p>
            Rooted in God's Word and driven by the Great Commission, we bring
            you worship songs, inspiring messages, testimonies, devotional
            reflections, and programs designed to strengthen faith, build hope,
            and foster love.
          </p>
          <p>
            Whether you are seeking encouragement or a moment of quiet worship,
            you are welcome here. Listen, reflect on Scripture, and find space
            for prayer as you go about your day.
          </p>
        </div>

        <aside className="welcome__pull">
          <p>
            It's not just about listening - it's about encountering Christ,
            every single day.
          </p>
        </aside>
      </div>
    </section>
  );
}
