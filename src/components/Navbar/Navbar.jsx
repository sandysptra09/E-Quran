import React, { useState } from "react";
import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";

import { Input } from "@nextui-org/input";

import styles from '../../styles/Font.module.css';

export default function CustomNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "Beranda",
    "Surah",
    "Doa",
    "Blog",
    "Forum",
  ];

  return (
    <NextUINavbar onMenuOpenChange={setIsMenuOpen} isBordered variant="sticky" className="py-4">
      {/* Left section */}
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className={`text-inherit text-black ${styles.quicksandHeading}`}>EQuran.san</p>
        </NavbarBrand>
      </NavbarContent>

      {/* Center section */}
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/" className={`${styles.quicksandSubHeading}`}>
            Beranda
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/surah" aria-current="page" className={`${styles.quicksandSubHeading}`}>
            Surah
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/doa" aria-current="page" className={`${styles.quicksandSubHeading}`}>
            Doa
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Input
            clearable
            placeholder="Cari Surah..."
            className={`w-72 ${styles.quicksandSubHeading} font-medium`}
            type="search"
          />
        </NavbarItem>
      </NavbarContent>

      {/* Right section */}
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile menu */}
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NextUINavbar>
  );
}
