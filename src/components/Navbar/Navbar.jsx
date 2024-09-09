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
import { CiSearch } from "react-icons/ci"; // Import the search icon
import { Link as RouterLink, useLocation } from "react-router-dom"; // Import useLocation
import styles from "../../styles/Font.module.css";

export default function CustomNavbar({ onSearch }) {

  // initiate state variables for search input and menu state
  const [searchTerm, setSearchTerm] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // data for menu state
  const menuItems = [
    { name: "Beranda", path: "/" },
    { name: "Surah", path: "/surah" },
    { name: "Doa", path: "/doa" },
    { name: "Blog", path: "/blog" },
    { name: "Forum", path: "/forum" },
  ];

  // function to check if Link is active
  const isActive = (path) => location.pathname === path;

  // function to handle search input change event
  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    if (onSearch) {
      onSearch(term);
    }
  };

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
          <div className="relative w-72">

            <Input
              clearable
              placeholder="Cari Surah..."
              className={`w-full pr-10 ${styles.quicksandSubHeading} font-medium`}
              type="search"
              value={searchTerm}
              onChange={handleSearchChange}
            />

            {/* <CiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500" size={24} /> */}
          </div>
        </NavbarItem>
      </NavbarContent>

      {/* Right section */}
      <NavbarContent justify="end">
        {menuItems.slice(3).map((item, index) => (
          <NavbarItem key={index}>
            <NextUILink
              as={RouterLink}
              to={item.path}
              className={`${styles.quicksandSubHeading} ${isActive(item.path) ? "text-blue-600" : "text-black"}`}
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
              className={`w-full ${styles.quicksandSubHeading} ${isActive(item.path) ? "text-blue-600 " : "text-black"
                }`}
              size="lg"
            >
              {item.name}
            </NextUILink>
          </NavbarMenuItem>
        ))}

        <NavbarMenuItem>
          <div className="relative w-full">
            {/* Input search with search icon for mobile */}
            <Input
              clearable
              placeholder="Cari Surah..."
              className={`w-full pr-10 ${styles.quicksandSubHeading} font-medium`}
              type="search"
              value={searchTerm}
              onChange={handleSearchChange}
            />

            {/* <CiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-neutral-900" size={24} /> */}
          </div>
        </NavbarMenuItem>
      </NavbarMenu>
    </NextUINavbar>
  );
}
