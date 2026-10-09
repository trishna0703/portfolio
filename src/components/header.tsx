import Link from "next/link";
export default function Header() {
  return (
    <header className="header">
      <Link href="/" className="wordmark" aria-label="Trishna Kashyap home">
        trishna<span> kashyap</span>
        <i>.</i>
      </Link>
      <nav aria-label="Main navigation">
        <Link href="/#work">Work</Link>
        <Link href="/#about">About</Link>
        <Link href="/#workbench">Workbench</Link>
        <Link className="nav-contact" href="/#contact">
          Let&apos;s talk <span>↗</span>
        </Link>
      </nav>
    </header>
  );
}
