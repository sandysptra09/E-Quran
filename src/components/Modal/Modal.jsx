import React, { useState, useEffect } from "react";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
} from "@nextui-org/react";

import axios from "axios";

import styles from "../../styles/Font.module.css";

export default function ButtonModal({ surah, ayat }) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [tafsirData, setTafsirData] = useState(null);

    useEffect(() => {
        const fetchTafsir = async () => {
            if (isOpen && surah && ayat) {
                try {
                    const response = await axios.get(
                        `https://equran.id/api/tafsir/${surah}`
                    );
                    if (response.data.status) {
                        // Find the specific tafsir for the given ayah
                        const tafsir = response.data.tafsir.find((t) => t.ayat === ayat);
                        setTafsirData(tafsir || { tafsir: "Tafsir not found" });
                    }
                } catch (error) {
                    console.error("Error fetching tafsir:", error);
                    setTafsirData({ tafsir: "Error fetching tafsir" });
                }
            }
        };
        fetchTafsir();
    }, [isOpen, surah, ayat]);

    return (
        <>
            <button
                onClick={onOpen}
                className="bg-neutral-900 hover:bg-neutral-700 dark:hover:bg-neutral-700 rounded-full py-2 px-3 flex items-center gap-1 text-white font-semibold text-sm"
            >
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                >
                    <path
                        d="M16.6695 7.49897V4.16425C16.6695 3.24339 15.923 2.49689 15.0022 2.49689H4.16431C3.24345 2.49689 2.49695 3.24339 2.49695 4.16425V15.8358C2.49695 16.7566 3.24345 17.5031 4.16431 17.5031H8.33271"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></path>
                    <path
                        d="M5.83167 5.83163H13.3348"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></path>
                    <path
                        d="M5.83167 9.16635H10.0001"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></path>
                    <path
                        d="M5.83167 12.5011H8.33271"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></path>
                    <path
                        d="M17.5031 17.5031L16.1367 16.1367"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></path>
                    <path
                        d="M13.9384 10.8337C15.653 10.8337 17.043 12.2237 17.043 13.9383C17.043 15.6529 15.653 17.0429 13.9384 17.0429C12.2237 17.0429 10.8337 15.6529 10.8337 13.9383C10.8339 12.2237 12.2238 10.8338 13.9384 10.8337"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></path>
                </svg>
                Tafsir
            </button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="4xl">
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">
                                {tafsirData ? `Surah ${surah} - Ayat ${ayat}` : "Loading..."}
                            </ModalHeader>
                            <ModalBody
                                style={{
                                    maxHeight: "400px", 
                                    overflowY: "auto", 
                                }}
                            >
                                {tafsirData ? (
                                    <p
                                        dangerouslySetInnerHTML={{
                                            __html: tafsirData.tafsir || "No Tafsir Available",
                                        }}
                                        className={`${styles.quicksandParagraph}`}
                                    />
                                ) : (
                                    <p>Loading Tafsir...</p>
                                )}
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
