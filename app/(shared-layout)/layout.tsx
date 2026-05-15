import { NavBar } from "@/components/web/navbar";
import { ReactNode } from "react";

export default function SharedLayout({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-7xl mx-auto p-5 md:p-6 lg:p-7">
      <NavBar />
      {children}
    </div>
  );
}
