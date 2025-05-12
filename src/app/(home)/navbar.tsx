import Link from "next/link";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button";
import { ChildProcess } from "child_process";
import { Children } from "react";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ["700"]
})

interface NavbarItemProps {
  href: string;
  children: React.ReactNode;
  isActive: boolean
};

const NavbarItem = ({
  href,
  children,
  isActive
}:NavbarItemProps) => {
  return (
    <Button>
      {children}
    </Button>
  );
};

const navbarItems = [
  { href: '/', children: "home" },
  { href: '/about', children: "About" },
  { href: '/features', children: "Features" },
  { href: '/pricing', children: "Pricing" },
  { href: '/contact', children: "Contact" },
]

export const Navbar = () => {
  return (
    <nav className="h-20 flex border-b justify-between font-medium bg-white">
      <Link href="/" className="pl-6 flex items-center">
        <span className={cn("text-5xl font-semibold", poppins.className)}>
          funrod
        </span>
      </Link>

      <div className="items-center gap-4 hidden lg:flex">
        {navbarItems.map((item) => (
          <NavbarItem
            key={item.href}
            href={item.href}
          >
            {item.children}
          </NavbarItem>
        ))}
      </div>
    </nav>
  );
};