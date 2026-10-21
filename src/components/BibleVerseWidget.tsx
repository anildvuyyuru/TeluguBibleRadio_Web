import "./BibleVerseWidget.css";

export default function BibleVerseWidget() {
  return (
    <aside className="bible-verse">
      <p className="bible-verse__label">Bible Verse of the Day</p>
      <a
        className="bible-verse__link"
        href="https://dailyverses.net"
        target="_blank"
        rel="noreferrer"
      >
        <blockquote>
          "Jesus Christ is the same yesterday and today and forever."
          <cite>Hebrews 13:8</cite>
        </blockquote>
      </a>
    </aside>
  );
}
