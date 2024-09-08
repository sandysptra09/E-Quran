import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

import styles from "../../styles/Font.module.css";
import background from "../../styles/Background.module.css";
import ButtonModal from "../Modal/Modal";

export default function DetailSurah({ surahNomor}) {
    // initiate state to store surah details and verse array
    const [detailSurah, setDetailSurah] = useState(null);
    const [ayahs, setAyahs] = useState([]);
    const [error, setError] = useState(null);

    // ref to store the reference of the paragraph element
    const ayahRefs = useRef([]);

    // fetching detail surah
    useEffect(() => {
        const fetchDetailSurah = async () => {
            try {
                const response = await axios.get(`https://equran.id/api/surat/${surahNomor}`);
                if (response.data) {
                    setDetailSurah(response.data);
                    setAyahs(response.data.ayat || []);
                } else {
                    setError("Data surah tidak ditemukan.");
                }
            } catch (error) {
                setError("Terjadi kesalahan saat memuat detail surah");
                console.error("Error fetching detail surah:", error);
            }
        };
        if (surahNomor) {
            fetchDetailSurah();
        }
    }, [surahNomor]);

    // function to scroll to the selected ayah
    const handleAyahChange = (event) => {
        const ayahNumber = parseInt(event.target.value, 10);
        if (ayahRefs.current[ayahNumber - 1]) {
            ayahRefs.current[ayahNumber - 1].scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <>
            <div className="bg-white rounded-md col-start-1 lg:col-start-2 col-span-full p-4 max-h-[calc(100vh-11rem)] flex flex-col">
                {detailSurah && (
                    <div className="">
                        <div className={`p-4 rounded-lg ${background.backgroundHeadCard}`}>
                            <div className="flex items-center justify-between pb-12">
                                <div className="flex flex-col gap-2">
                                    <h1 className={`${styles.quicksandHeading}`}>
                                        {detailSurah.nama_latin} - {detailSurah.nama}
                                    </h1>
                                    <span className={`capitalize ${styles.quicksandTranslate}`}>
                                        {detailSurah.arti} - {detailSurah.jumlah_ayat} ayat - {detailSurah.tempat_turun}
                                    </span>
                                </div>
                                <div className="relative flex items-center justify-center text-white row-start-1 row-end-3">
                                    <svg
                                        width="28.5"
                                        height="32.25"
                                        viewBox="0 0 38 43"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M17.3036 2.10426C18.0868 0.850113 19.9132 0.850113 20.6964 2.10426L24.5063 8.20509C25.2111 9.33361 26.4309 10.0378 27.7606 10.0839L34.949 10.333C36.4267 10.3842 37.3399 11.9659 36.6454 13.2712L33.2669 19.6212C32.642 20.7958 32.642 22.2042 33.2669 23.3788L36.6454 29.7288C37.3399 31.0341 36.4267 32.6158 34.949 32.667L27.7606 32.9161C26.4309 32.9622 25.2111 33.6664 24.5063 34.7949L20.6964 40.8957C19.9132 42.1499 18.0868 42.1499 17.3036 40.8957L13.4937 34.7949C12.7889 33.6664 11.5691 32.9622 10.2394 32.9161L3.05099 32.667C1.57325 32.6158 0.660093 31.0341 1.35461 29.7288L4.7331 23.3788C5.35804 22.2042 5.35805 20.7958 4.7331 19.6212L1.35461 13.2712C0.660093 11.9659 1.57325 10.3842 3.05099 10.333L10.2394 10.0839C11.5691 10.0378 12.7889 9.33361 13.4937 8.20509L17.3036 2.10426Z"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        ></path>
                                    </svg>
                                    <span
                                        className={`absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${styles.quicksandTranslate}`}
                                    >
                                        {detailSurah.nomor}
                                    </span>
                                </div>
                                
                            </div>
                        </div>
                        <div className="flex gap-3 py-4">
                            <div className="w-full flex flex-col gap-2 relative">
                                <label
                                    className={`text-neutral-500 ${styles.quicksandSubHeadingSub}`}
                                >
                                    Ayat
                                </label>
                                <select
                                    className={`p-4 rounded-lg bg-neutral-100 text-neutral-800 ${styles.quicksandSubHeadingSub} appearance-none outline-none active:ring-1 ring-[#3e77ff] peer cursor-pointer`}
                                    onChange={handleAyahChange}
                                >
                                    {ayahs.map((ayah, index) => (
                                        <option key={ayah.nomor} value={ayah.nomor}>
                                            {ayah.nomor}
                                        </option>
                                    ))}
                                </select>
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute right-4 bottom-4 w-6 h-6 transition-transform peer-active:rotate-180"
                                >
                                    <path
                                        d="M8 10L12 14L16 10"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                </svg>
                            </div>
                            <div className="w-full flex flex-col gap-2 relative">
                                <label
                                    className={`text-neutral-500 ${styles.quicksandSubHeadingSub}`}
                                >
                                    Qari
                                </label>
                                <select
                                    className={`p-4 rounded-lg bg-neutral-100 text-neutral-800 ${styles.quicksandSubHeadingSub} appearance-none outline-none active:ring-1 ring-[#3e77ff] peer cursor-pointer`}
                                >
                                    <option value="05" className="">
                                        Misyari-Rasyid-Al-Afasi
                                    </option>
                                </select>
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute right-4 bottom-4 w-6 h-6 transition-transform peer-active:rotate-180"
                                >
                                    <path
                                        d="M8 10L12 14L16 10"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                </svg>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 h-[230px] scroll-pt-2 overflow-y-auto scrollbar scrollbar-w-1 scrollbar-thumb-neutral-300 scrollbar-thumb-rounded-full">
                            {ayahs.map((ayahs) => (
                                <div key={ayahs.id} ref={(el) => (ayahRefs.current[ayahs.nomor - 1] = el)} className="p-4 rounded-lg flex flex-col gap-5 bg-neutral-100">
                                    <div className="flex items-center justify-between gap-8">
                                        <div
                                            className={`text-neutral-800 ${styles.quicksandSubHeadingSub} `}
                                        >
                                            {ayahs.surah}:{ayahs.nomor}
                                        </div>  
                                        <div
                                            className={`text-neutral-800 font-lateef text-3xl leading-loose ${styles.quicksandSubHeadingArab}`}
                                            data-ninja-font="lpmqisepmisbah_regular_normal_tfbnu"
                                        >
                                            {ayahs.ar}
                                        </div>
                                    </div>
                                    <div>
                                        <p
                                            className={`${styles.quicksandColorTranslate} font-medium mb-2 mt-5`}
                                        >
                                            {ayahs.tr}
                                        </p>
                                        <p
                                            className={`text-neutral-800 ${styles.quicksandTranslate} `}
                                        >
                                            {ayahs.idn}
                                        </p>
                                    </div>
                                    <div className="flex gap-2">
                                        {/* <button className="audio-play-button bg-pink-500 hover:bg-pink-700 rounded-full p-3 text-white">
                                            <audio
                                                src="https://equran.nos.wjv-1.neo.id/audio-partial/Abdullah-Al-Juhany/001001.mp3"
                                                className="audio hidden pointer-events-none"
                                            ></audio>
                                            <svg
                                                width="20"
                                                height="20"
                                                viewBox="0 0 20 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-5 h-5"
                                            >
                                                <path
                                                    d="M3.33337 10V7.03335C3.33337 3.35001 5.94171 1.84168 9.13337 3.68335L11.7084 5.16668L14.2834 6.65001C17.475 8.49168 17.475 11.5083 14.2834 13.35L11.7084 14.8333L9.13337 16.3167C5.94171 18.1583 3.33337 16.65 3.33337 12.9667V10Z"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    strokeMiterlimit="10"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                ></path>
                                            </svg>
                                        </button> */}
                                        {/* <button className="bg-purple-500 hover:bg-purple-700 rounded-full p-3 text-white">
                                            <svg
                                                width="20"
                                                height="20"
                                                viewBox="0 0 20 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-5 h-5"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M4.16431 16.2526V5.83161C4.16431 4.45032 5.28406 3.33057 6.66535 3.33057H13.3348C14.7161 3.33057 15.8358 4.45032 15.8358 5.83161V16.2526C15.836 16.4089 15.7487 16.5521 15.6097 16.6236C15.4708 16.6951 15.3035 16.6829 15.1764 16.5919L10.2427 13.0671C10.0976 12.9633 9.90254 12.9633 9.75747 13.0671L4.82375 16.5911C4.69679 16.682 4.5297 16.6943 4.3908 16.623C4.25191 16.5517 4.16449 16.4087 4.16431 16.2526Z"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                ></path>
                                            </svg>
                                        </button> */}
                                        <ButtonModal surah={surahNomor} ayat={ayahs.nomor}/>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
