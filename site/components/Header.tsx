import Link from "next/link";

const nav = [
  { href: "/manifesto", label: "Manifesto" },
  { href: "/books", label: "Books" },
  { href: "/books/volume-01-relationships", label: "Volume I" },
  { href: "/start-here", label: "Start Here" },
  { href: "/about", label: "About" },
  { href: "/videos", label: "Videos" },
  { href: "/github", label: "GitHub" },
];

export function Header() {
  return (
    <header className="site-header">
      <Link href="/" className="brand">
        <span className="brand-mark">家</span>
        <span>
          <strong>Family Civilization</strong>
          <small>Project</small>
        </span>
      </Link>

      <nav className="nav">
        {nav.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
