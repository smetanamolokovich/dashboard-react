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
        Overview
      </Link>
      <Link
        href={"/customers"}
        className={`text-sm font-medium transition-colors hover:text-primary ${
          pathname === "/customers" ? "" : "text-muted-foreground"
        }`}
      >
        Customers
      </Link>
      <Link
        href={"/products"}
        className={`text-sm font-medium transition-colors hover:text-primary ${
          pathname === "/products" ? "" : "text-muted-foreground"
        }`}
      >
        Products
      </Link>
      <Link
        href={"/settings"}
        className={`text-sm font-medium transition-colors hover:text-primary ${
          pathname === "/settings" ? "" : "text-muted-foreground"
        }`}
      >
        Settings
      </Link>
    </nav>
  );
}
