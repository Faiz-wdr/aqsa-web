import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import MagazinePage from './Pages/Magazines';
import LandingPage from './Pages/LandigPage';
import Blogs from './Pages/Blogs';
import Popup from './Components/popup';


function Router() {
  
    return (

        <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/MagazinePage" element={<MagazinePage/>}/>
            <Route path="Blogs" element={<Blogs/>}/>
          </Routes>

    )
}

export default Router