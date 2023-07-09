import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import MagazinePage from './Pages/Magazines';
import LandingPage from './Pages/LandigPage';


function Router() {
  
    return (

        <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/MagazinePage" element={<MagazinePage/>}/>
          </Routes>

    )
}

export default Router