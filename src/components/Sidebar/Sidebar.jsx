import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "../../styles/Font.module.css";
import background from "../../styles/Background.module.css";

export default function Sidebar({ onSurahClick }) {
    // initiate state
    const [surahs, setSurahs] = useState([]);
    const [error, setError] = useState(null);

    // fetching data
    useEffect(() => {
        const fetchSurahs = async () => {
            try {
                const response = await axios.get("https://equran.id/api/surat");
                setSurahs(response.data);
            } catch (error) {
                setError("Terjadi kesalahan saat memuat data.");
                console.error("Error fetching data:", error);
            }
        };

        fetchSurahs();
    }, []);

    if (error) {
        return (
            <div className="bg-white rounded-md col-start-1 col-end-2 p-3">
                <p className="text-red-500">{error}</p>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-md col-start-1 col-end-2 p-3 flex flex-col gap-3 max-h-[calc(100vh-11rem)] overflow-y-auto scrollbar scrollbar-w-1 scrollbar-thumb-neutral-300 dark:scrollbar-thumb-neutral-600 scrollbar-thumb-rounded-full w-full sm:w-64 md:w-80">
            {surahs.map((surah) => (
                <Link
                    key={surah.nomor}
                    to=''
                    onClick={() => onSurahClick(surah.nomor)}  // Handle click
                    className={`rounded-md p-2 grid grid-cols-4 grid-rows-2 gap-2 items-center hover:text-[#3e77ff] cursor-pointer ${background.backgroundCard}`}
                >
                    <div className="relative flex items-center justify-center text-fuchsia-600 row-start-1 row-end-3">
                        <svg
                            width="28.5"
                            height="32.25"
                            viewBox="0 0 38 43"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M17.3036 2.10426C18.0868 0.850113 19.9132 0.850113 20.6964 2.10426L24.5063 8.20509C25.2111 9.33361 26.4309 10.0378 27.7606 10.0839L34.949 10.333C36.4267 10.3842 37.3399 11.9659 36.6454 13.2712L33.2669 19.6212C32.642 20.7958 32.642 22.2042 33.2669 23.3788L36.6454 29.7288C37.3399 31.0341 36.4267 32.6158 34.949 32.667L27.7606 32.9161C26.4309 32.9622 25.2111 33.6664 24.5063 34.7949L20.6964 40.8957C19.9132 42.1499 18.0868 42.1499 17.3036 40.8957L13.4937 34.7949C12.7889 33.6664 11.5691 32.9622 10.2394 32.9161L3.05099 32.667C1.57325 32.6158 0.660093 31.0341 1.35461 29.7288L4.7331 23.3788C5.35804 22.2042 5.35805 20.7958 4.7331 19.6212L1.35461 13.2712C0.660093 11.9659 1.57325 10.3842 3.05099 10.333L10.2394 10.0839C11.5691 10.0378 12.7889 9.33361 13.4937 8.20509L17.3036 2.10426Z"
                                stroke="#3e77ff"
                                strokeWidth="2"
                            ></path>
                        </svg>
                        <span
                            className={`${styles.quicksandColorTranslate} absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-sm`}
                        >
                            {surah.nomor}
                        </span>
                    </div>

                    <div
                        className={`${styles.quicksandSubHeading} col-start-2 col-end-5 row-start-1 font-bold`}
                    >
                        {surah.nama_latin}
                    </div>
                    <div
                        className={`${styles.quicksandTranslate} text-neutral-500 col-start-2 col-end-5 row-start-2 font-semibold`}
                    >
                        {surah.arti} - {surah.jumlah_ayat} ayat
                    </div>
                </Link>
            ))}
        </div>
    );
}
