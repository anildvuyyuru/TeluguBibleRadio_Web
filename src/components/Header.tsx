import tbrLogo from "../assets/TBR.png";
import "./Header.css";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Programs", href: "#programs" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#footer" },
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a href="#home" className="site-header__brand">
          <img
            src={tbrLogo}
            alt="Telugu Bible Radio"
            className="site-header__logo"
          />
        </a>

        <nav className="site-header__nav" aria-label="Primary">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
