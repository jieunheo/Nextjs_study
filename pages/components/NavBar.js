import Link from "next/link";
import { useRouter } from "next/router";
import classes from "./NavBar.module.css";

export default function NavBar() {
  const router = useRouter();

  return (
    <nav>
      <Link href="/">
        <a className={router.pathname === "/" && classes.active}>
          Home
        </a>
      </Link>
      <Link href="/sub">
        <a className={router.pathname === "/sub" && classes.active}>
          Sub
        </a>
      </Link>
      <Link href="/hello">
        <a className={router.pathname === "/hello" && classes.active}>
          Hello
        </a>
      </Link>
    </nav>
  );
}