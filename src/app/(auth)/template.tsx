"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navlinks = [
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="flex space-x-4 mb-4">
        {navlinks.map((link) => {
          const isActive =
            pathname === link.href ||
            (pathname.startsWith(link.href) && link.href !== "/");

          return (
            <Link
              href={link.href}
              key={link.name}
              className={
                isActive ? "text-blue-500 font-semibold" : "text-gray-500"
              }>
              {link.name}
            </Link>
          );
        })}
      </nav>

      {/* Page Content */}
      <main>{children}</main>
    </div>
  );
}
