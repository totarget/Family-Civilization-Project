import Link from 'next/link';

const nav = [
  ['Manifesto', '/manifesto'],
  ['Books', '/books'],
  ['Volume I', '/books/volume-01-relationships'],
  ['Dictionary', '/dictionary'],
  ['Start Here', '/start-here'],
  ['About', '/about'],
  ['Videos', '/videos'],
  ['GitHub', '/github']
];

export default function Header() {
  return (
    <header className="site-header">
      <Link href="/" className="brand">家 Family Civilization Project</Link>
      <nav className="nav">
        {nav.map(([label, href]) => (
          <Link href={href} key={href}>{label}</Link>
        ))}
      </nav>
    </header>
  );
}
