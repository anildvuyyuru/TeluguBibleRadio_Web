import { programs } from "../data/programs";
import "./Programs.css";

export default function Programs() {
  return (
    <section id="programs" className="programs section">
      <div className="container">
        <div className="programs__head">
          <h2>Our Programs</h2>
          <p>
            Worship, Scripture, and thoughtful reflections to encourage your
            daily walk with Christ.
          </p>
        </div>

        <ol className="programs__log">
          {programs.map((program) => (
            <li className="programs__row" key={program.title}>
              <div className="programs__text">
                <h3>{program.title}</h3>
                <p>{program.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
