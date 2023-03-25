import React from 'react'
import { Link } from 'react-router-dom'


const isNotActiveStyle = 'flex items-center px-5 gap-3 text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitalize';
const isActiveStyle = 'flex items-center px-5 gap-3 font-extrabold border-r-2 border-black  transition-all duration-200 ease-in-out capitalize';

const Sidebar = ({ closeToggle }) => {
    const handleCloseSidebar = () => {
        if (closeToggle) closeToggle(false);
      };

  return (
    <div className="flex flex-col justify-between bg-white h-full overflow-y-scroll min-w-210 hide-scrollbar">
        <div className="flex flex-col">
        <Link
          to="/"
          className="flex px-5 gap-2 my-6 pt-1 w-190 items-center"
          onClick={handleCloseSidebar}
        >
          LOGO
        </Link>
        <div className="flex flex-col gap-5">
            <Link
            to="/"
            className={({ isActive }) => (isActive ? isActiveStyle : isNotActiveStyle)}
            onClick={handleCloseSidebar}

            >
            <i class="fas fa-home"></i>
            <span>HOME</span>
            </Link>
            </div>
            <Link
          to={`user/:id`}
          className="flex my-5 mb-3 gap-2 p-2 items-center bg-white rounded-lg shadow-lg mx-3"
          onClick={handleCloseSidebar}
        >
          <img src="https://images.pexels.com/photos/1426620/pexels-photo-1426620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-10 h-10 rounded-full" alt="user-profile" />
          <p>UserName</p>
        </Link>
        </div>
    </div>
  )
}

export default Sidebar