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
          <Link
            href="/dashboard/usuarios"
            className={buttonVariants({ variant: "ghost" })}
          >
            Usuarios
          </Link>
          <Link
            href="/dashboard/analytics"
            className={buttonVariants({ variant: "ghost" })}
          >
            Analises
          </Link>
          <Link href="/aula" className={buttonVariants({ variant: "ghost" })}>
            Aula
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/auth/sign-up" className={buttonVariants()}>
            Sign up
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
