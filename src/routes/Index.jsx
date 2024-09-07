import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import components
import Navbar from '../components/Navbar/Navbar'

// import pages
import Index from '../pages/Index/Index'
import NotFound from '../pages/Not_Found/NotFound';


// import page for layouts
import IndexEQuran from '../layouts/IndexEQuran';
import Doa from '../pages/Doa/Doa';
import Surah from '../pages/Surah/Surah';
import Blog from '../pages/Blog/Blog';
import Forum from '../pages/Forum/Forum';

export default function () {
  return (
    <Router>
        <Routes>

            {/* Routes Path */}

            {/* Main route with navbar */}
            <Route exact path="/" element={<IndexEQuran />}>
            
                {/* Nested Route */}
                <Route index element={<Index />} />

                <Route path='beranda' element={<Index />} />
                <Route path='surah' element={<Surah/>} />
                <Route path='doa' element={<Doa />} />

                <Route path='blog' element={<Blog />} />
                <Route path='forum' element={<Forum />} />

            </Route>

            {/* Route page not found */}
            <Route path='*' element={<NotFound />} />

        </Routes>
    </Router>
  )
}
