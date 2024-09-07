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
import { Link as RouterLink, useLocation } from "react-router-dom"; // Import useLocation
import styles from "../../styles/Font.module.css";

export default function CustomNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // Dapatkan lokasi saat ini

  const menuItems = [
    { name: "Beranda", path: "/" },
    { name: "Surah", path: "/surah" },
    { name: "Doa", path: "/doa" },
    { name: "Blog", path: "/blog" },
    { name: "Forum", path: "/forum" },
  ];

  // Function to check if Link is active
  const isActive = (path) => location.pathname === path;

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
          <RouterLink to="/" className={`text-inherit text-black ${styles.quicksandHeading}`}>
          San.EQuran
          </RouterLink>
        </NavbarBrand>
      </NavbarContent>

      {/* Center section */}
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.slice(0, 3).map((item, index) => (
          <NavbarItem key={index}>
            <NextUILink
              as={RouterLink}
              to={item.path}
              className={`${styles.quicksandSubHeading} ${isActive(item.path) ? "text-blue-600" : "text-black"
                }`}
            >
              {item.name}
            </NextUILink>
          </NavbarItem>
        ))}
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
        {menuItems.slice(3).map((item, index) => (
          <NavbarItem key={index}>
            <NextUILink
              as={RouterLink}
              to={item.path}
              className={`${isActive(item.path) ? "text-blue-600" : "text-black"}`}
            >
              {item.name}
            </NextUILink>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Mobile menu */}
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={index}>
            <NextUILink
              as={RouterLink}
              to={item.path}
              className={`w-full ${isActive(item.path) ? "text-blue-600" : "text-black"
                }`}
              size="lg"
            >
              {item.name}
            </NextUILink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NextUINavbar>
  );
}
