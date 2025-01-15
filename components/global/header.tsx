import { FC } from "react";
import { AppContainer } from "./app-container";
import Image from "next/image";
import Link from "next/link";
import { LayoutGrid } from "lucide-react";
import { Button } from "../ui/button";
interface navItem {
  title: string;
  link: string;
}
export const Header: FC = () => {
  const navItems: navItem[] = [
    { title: "home", link: "/home" },
    { title: "page", link: "/page" },
    { title: "tours", link: "/tours" },
    { title: "blog", link: "/blog" },
    { title: "shop", link: "/shop" },
  ];
  return (
    <header>
      <AppContainer className="flex gap-8 justify-between items-center sm:p-6">
        <Link href={"/"}>
          <Image
            src={"/logo-light.png"}
            height={100}
            width={100}
            alt="logo image"
            className="h-auto w-auto"
          />
        </Link>
        <nav className="hidden md:flex justify-center items-center gap-8">
          {navItems &&
            navItems.length > 0 &&
            navItems.map((navItem) => (
              <Link
                key={navItem.title}
                href={navItem.link}
                className="uppercase font-normal text-xs tracking-widest hover:text-primary"
              >
                {navItem.title}
              </Link>
            ))}
        </nav>
        <Button variant={"ghost"} size={"icon"} className="md:hidden">
          <LayoutGrid />
        </Button>
      </AppContainer>
    </header>
  );
};