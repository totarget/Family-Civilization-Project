import Link from 'next/link';

const nav = [
  ['人是目的', '/humans-are-ends'],
  ['Manifesto', '/manifesto'],
  ['Books', '/books'],
  ['Dictionary', '/dictionary'],
  ['Start Here', '/start-here'],
  ['About', '/about'],
  ['Videos', '/videos'],
  ['GitHub', '/github']
];

export default function Header() {
  return (
    <header className="site-header">
      <Link href="/" className="brand">家庭文明工程</Link>
      <nav className="nav">
        {nav.map(([label, href]) => (
          <Link href={href} key={href}>{label}</Link>
        ))}
      </nav>
    </header>
  );
}
