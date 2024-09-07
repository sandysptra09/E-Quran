import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";

import styles from "../styles/Background.module.css";
import CustomNavbar from "../components/Navbar/Navbar";
import DetailSurah from "../components/Content/Content";
import Footer from "../components/Footer/Footer";

export default function IndexEQuran() {
  const [surahNomor, setSurahNomor] = useState(null);

  const handleSurahClick = (nomor) => {
    setSurahNomor(nomor);
  };

  return (
    <div className='flex flex-col min-h-screen bg-[#f5f5f5]'>
      <div className="sticky top-0 z-10">
        <CustomNavbar />
      </div>
      
      <main className="flex-1 p-4">
        <div className="container mx-auto lg:max-w-screen-2xl">
          <Outlet />
        </div>
      </main>

      <Footer />
    </div>
  );
}
