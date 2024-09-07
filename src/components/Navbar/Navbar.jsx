import React, { useState } from "react";
import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link as NextUILink,
} from "@nextui-org/react";

import { Input } from "@nextui-org/input";
import { Link as RouterLink } from "react-router-dom"; // Import Link dari react-router-dom
import styles from "../../styles/Font.module.css";

export default function CustomNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ["Beranda", "Surah", "Doa", "Blog", "Forum"];

  return (
    <NextUINavbar
      onMenuOpenChange={setIsMenuOpen}
      isBordered
      variant="sticky"
      className="py-4"
    >
      {/* Left section */}
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <RouterLink to='/' className={`text-inherit text-black ${styles.quicksandHeading}`}>
            EQuran.san
          </RouterLink>
        </NavbarBrand>
      </NavbarContent>

      {/* Center section */}
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <NextUILink
            as={RouterLink}
            to="/"
            className={`${styles.quicksandSubHeading}`}
          >
            Beranda
          </NextUILink>
        </NavbarItem>
        <NavbarItem>
          <NextUILink
            as={RouterLink}
            to="/surah"
            className={`${styles.quicksandSubHeading}`}
          >
            Surah
          </NextUILink>
        </NavbarItem>
        <NavbarItem>
          <NextUILink
            as={RouterLink}
            to="/doa"
            className={`${styles.quicksandSubHeading}`}
          >
            Doa
          </NextUILink>
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
          <NextUILink as={RouterLink} to="/blog">
            Blog
          </NextUILink>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <NextUILink as={RouterLink} to="/forum">
            Forum
          </NextUILink>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile menu */}
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <NextUILink
              as={RouterLink}
              to={`/${item.toLowerCase()}`}
              className="w-full"
              size="lg"
            >
              {item}
            </NextUILink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NextUINavbar>
  );
}
