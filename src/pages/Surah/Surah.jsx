import React, { useState } from 'react'

// component
import Sidebar from '../../components/Sidebar/Sidebar';
import DetailSurah from '../../components/Content/Content';

export default function Surah() {

    // state props
    const [surahNomor, setSurahNomor] = useState(null);

    const handleSurahClick = (nomor) => {
        setSurahNomor(nomor);
    };

    return (
        <div className="container mx-auto lg:max-w-screen-2xl">
            <main className="w-full grid grid-cols-1 md:grid-cols-4 gap-4">

                <Sidebar onSurahClick={handleSurahClick} />

                <DetailSurah surahNomor={surahNomor} />
            </main>
        </div>
    )
}
