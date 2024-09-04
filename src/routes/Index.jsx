import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import components
import Navbar from '../components/Navbar/Navbar'

// import pages
import Index from '../pages/Index/Index'
import NotFound from '../pages/Not_Found/NotFound';


// import layouts
import IndexEQuran from '../layouts/IndexEQuran';

export default function () {
  return (
    <Router>
        <Routes>

            {/* Routes Path */}
            <Route exact path="/" element={<IndexEQuran />} >
            
                {/* Nested Routes */}
                <Route index element={<Index />}/>
                
            </Route>

            <Route path='*' element={<NotFound />} />
            

        </Routes>
    </Router>
  )
}
