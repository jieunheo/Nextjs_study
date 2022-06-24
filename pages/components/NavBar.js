import Link from "next/link";
import { useRouter } from "next/router";
import classes from "./NavBar.module.css";

export default function NavBar() {
  const router = useRouter();

  return (
    <nav>
      <Link href="/">
        <a className={`${classes.link} ${router.pathname === "/" && classes.active}`}>
          Home
        </a>
      </Link>
      <Link href="/sub">
        <a className={[classes.link, router.pathname === "/sub" && classes.active].join(" ")}>
          Sub
        </a>
      </Link>
      <Link href="/hello">
        <a className={`${classes.link} ${router.pathname === "/hello" && classes.active}`}>
          Hello
        </a>
      </Link>
    </nav>
  );
}