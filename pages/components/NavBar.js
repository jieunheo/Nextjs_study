import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();

  return (
    <nav>
      <Link href="/">
        <a style={{color: router.pathname === "/" ? "red" : "blue"}}>
          Home
        </a>
      </Link>
      <Link href="/sub">
        <a style={{color: router.pathname === "/sub" ? "red" : "blue"}}>
          Sub
        </a>
      </Link>
      <Link href="/hello">
        <a style={{color: router.pathname === "/hello" ? "red" : "blue"}}>
          Hello
        </a>
      </Link>
    </nav>
  );
}