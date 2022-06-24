import Link from "next/link";

export default function NavBar() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/sub">Sub</Link>
      <Link href="/hello">Hello</Link>
    </nav>
  );
}