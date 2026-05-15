import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { ThemeToggle } from "./theme-toggle";

export function NavBar() {
  return (
    <nav className="flex items-center gap-5 ">
      <header className="flex items-center justify-between w-full">
        <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl font-mono">
          Next<span className="text-blue-500 ">Pro</span>
        </h1>
        <div className="flex items-center gap-2">
          <Link href="/" className={buttonVariants({ variant: "ghost" })}>
            Home
          </Link>
          <Link href="/blog" className={buttonVariants({ variant: "ghost" })}>
            Blog
          </Link>
          <Link
            href="/contact"
            className={buttonVariants({ variant: "ghost" })}
          >
            Contact
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/auth/log-out" className={buttonVariants()}>
            Log Out
          </Link>
          <Link
            href="/auth/login"
            className={buttonVariants({ variant: "secondary" })}
          >
            Login
          </Link>
        </div>
      </header>
      <ThemeToggle />
    </nav>
  );
}
