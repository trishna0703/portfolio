import Link from "next/link";

export default function Footer() {
  return (<footer>
    <Link href="/" className="wordmark">
      trishna kashyap<i>.</i>
    </Link>
    <span>Made with thought, care & a little curiosity.</span>
    <a href="#main">Back to top ↑</a>
  </footer>);
}
