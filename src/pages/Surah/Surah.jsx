import React, { useState } from 'react'

// component
import Sidebar from '../../components/Sidebar/Sidebar';
import DetailSurah from '../../components/Content/Content';
import { useOutletContext } from 'react-router-dom';

export default function Surah() {
    // get context from outlet
    const { handleSurahClick, searchTerm, surahNomor } = useOutletContext();

    return (
        <div className="container mx-auto lg:max-w-screen-2xl">
            <main className="w-full grid grid-cols-1 md:grid-cols-4 gap-4">

                <Sidebar onSurahClick={handleSurahClick} searchTerm={searchTerm} />

                <DetailSurah surahNomor={surahNomor} />
            </main>
        </div>
    )
}
