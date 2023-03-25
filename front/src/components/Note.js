import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
const Note = () => {
  const [postHovered, setPostHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="m-2">

        <div
        onMouseEnter={() => setPostHovered(true)}
        onMouseLeave={() => setPostHovered(false)}
        onClick={() => navigate(`/`)}
        className=" relative cursor-zoom-in w-auto hover:shadow-lg rounded-lg overflow-hidden transition-all duration-500 ease-in-out"
      >
        <div className='w-64'>
        <img className="rounded-lg w-full" src="https://images.pexels.com/photos/3039671/pexels-photo-3039671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="user-post" />
        <div
        className="absolute top-0 w-full h-full flex flex-col justify-between p-1 pr-2 pt-2 pb-2 z-50"
        style={{ height: '100%' }}

        >
      <div className="flex items-center justify-between">
      <div className="flex gap-2">


       <h2
       className='decoration-red-300	'
       >Title</h2>

      </div>
      </div>
        </div>




        </div>
        </div>

      </div>
  )
}

export default Note