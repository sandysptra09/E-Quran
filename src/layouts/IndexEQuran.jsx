import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import CustomNavbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import styles from "../styles/Background.module.css";

export default function IndexEQuran() {
    // initiate state to store current selected surah number and search term
    const [surahNomor, setSurahNomor] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    // handlers to handle surah selection and search input changes
    const handleSurahClick = (nomor) => {
        setSurahNomor(nomor);
    };

    // handler to handle search input changes
    const handleSearch = (term) => {
        setSearchTerm(term);
    };

    return (
        <div className='flex flex-col min-h-screen bg-[#f5f5f5]'>
            <div className="sticky top-0 z-10">
                <CustomNavbar onSearch={handleSearch} />
            </div>
            
            <main className="flex-1 p-4">
                <div className="container mx-auto lg:max-w-screen-2xl">
                    <Outlet context={{ handleSurahClick, searchTerm, surahNomor }} />
                </div>
            </main>

            <Footer />
        </div>
    );
}
