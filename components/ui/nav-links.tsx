"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center space-x-4 lg:space-x-6 mx-6">
      <Link
        href={"/"}
        className={`text-sm font-medium transition-colors hover:text-primary ${
          pathname === "/" ? "" : "text-muted-foreground"
        }`}
      >
        Přehled
      </Link>
      <Link
        href={"/damages"}
        className={`text-sm font-medium transition-colors hover:text-primary ${
          pathname === "/damages" ? "" : "text-muted-foreground"
        }`}
      >
        Seznam vozidel
      </Link>
      <Link
        href={"/assessment"}
        className={`text-sm font-medium transition-colors hover:text-primary ${
          pathname === "/assessment" ? "" : "text-muted-foreground"
        }`}
      >
        Ohodnocení poškození
      </Link>
      <Link
        href={"/controls"}
        className={`text-sm font-medium transition-colors hover:text-primary ${
          pathname === "/controls" ? "" : "text-muted-foreground"
        }`}
      >
        Kontrola
      </Link>
    </nav>
  );
}
