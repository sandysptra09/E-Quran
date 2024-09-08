import React, { useState, useEffect } from "react";
import axios from "axios";

import styles from "../../styles/Font.module.css";
import background from "../../styles/Background.module.css";

export default function Doa() {
    // initiate state to store doa
    const [doa, setDoas] = useState([]);
    const [error, setError] = useState(null);

    // fetching data doa
    useEffect(() => {
        const fetchDoas = async () => {
            try {
                const response = await axios.get("https://open-api.my.id/api/doa");
                setDoas(response.data);
            } catch (error) {
                setError("Terjadi kesalahan saat memuat data");
                console.error("Error fetching data doa", error);
            }
        };

        fetchDoas();
    }, []);

    if (error) {
        return (
            <div className="bg-white rounded-md col-start-1 col-end-2 p-3">
                <p className="text-red-500">{error}</p>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-md col-start-1 lg:col-start-2 col-span-full p-4 max-h-[calc(100vh-11rem)] flex flex-col overflow-y-auto">
            <div className="">
                {doa.length > 0 ? (
                    doa.map((item) => (
                        <div
                            key={item.id}
                            className="p-4 rounded-lg mt-4 flex flex-col gap-5 bg-neutral-100"
                        >
                            <div
                                className={`p-4 rounded-lg mt-4 ${background.backgroundHeadCard}`}
                            >
                                <h1 className={`${styles.quicksandHeading}`}>
                                    {item.judul}
                                </h1>
                            </div>

                            <div className="flex flex-col gap-5">
                                <div className="text-right">
                                    <div
                                        className={`text-neutral-800 font-medium ${styles.quicksandHeading}`}
                                    >
                                        {item.arab} 
                                    </div>
                                </div>
                                <div>
                                    <p
                                        className={`${styles.quicksandColorHeadTranslateDoa} mb-2 mt-5`}
                                    >
                                        {item.latin}
                                    </p>
                                    <div className="mt-4">
                                        <p
                                            className={`text-neutral-800 font-bold ${styles.quicksandTranslateDoa}`}
                                        >
                                            Artinya:
                                        </p>
                                        <p
                                            className={`text-neutral-800 ${styles.quicksandTranslateDoa}`}
                                        >
                                            {item.terjemah} 
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Loading doa...</p>
                )}
            </div>
        </div>
    );
}
