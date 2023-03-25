import Sidebar from '../components/Sidebar'
import Note from '../components/Note'
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import User from '../components/User'
import { Routes, Route } from 'react-router-dom';
import Masonry from 'react-masonry-css';

const Home = () => {
    const [toggleSidebar, setToggleSidebar] = useState(false);

  return (
    <div className="flex bg-gray-50 md:flex-row flex-col h-screen transition-height duration-75 ease-out">
    <div className="hidden md:flex h-screen flex-initial">
    <Sidebar />
    </div>
    <div className="flex md:hidden flex-row">
    <div className="p-2 w-full flex flex-row justify-between items-center shadow-md">
    <i class="fas fa-bars" onClick={() => setToggleSidebar(true)}></i>

    <Link to="/">
        LOGO
    </Link>
    <Link to="/user/:id">
        PROFILE IMAGE
    </Link>
        </div>
        {toggleSidebar && (
        <div className="fixed w-4/5 bg-white h-screen overflow-y-auto shadow-md z-10 animate-slide-in">
          <div className="absolute w-full flex justify-end items-center p-2">
          <i onClick={() => setToggleSidebar(false)} class="fas fa-times"></i>          </div>
          <Sidebar closeToggle={setToggleSidebar}  />
        </div>
        )}
    </div>
    <div className="pb-2 flex-1 h-screen overflow-y-scroll">
      <Routes>
      <Route path='/' element={<Note />} />
      <Route path='/user/:id' element={<User />} />
      </Routes>
    </div>
    </div>
  )
}

export default Home