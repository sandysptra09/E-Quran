import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import components
import Navbar from '../components/Navbar/Navbar'

// import pages
import Index from '../pages/Index/Index'
import NotFound from '../pages/Not_Found/NotFound';


// import layouts
import IndexEQuran from '../layouts/IndexEQuran';
import Doa from '../pages/Doa/Doa';

export default function () {
  return (
    <Router>
        <Routes>

            {/* Routes Path */}

            <Route exact path="/" element={<IndexEQuran />} />
            
            <Route path='/surah' element={<IndexEQuran />} />

            <Route path='/doa' element={<Doa />} />

            <Route path='*' element={<NotFound />} />

        </Routes>
    </Router>
  )
}
