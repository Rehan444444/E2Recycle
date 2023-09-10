import React from 'react'
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom';














const Navbar = () => {

    

  return (
    <>
      
<nav className="bg-white border-gray-200 dark:bg-gray-900 ">
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <a href="https://flowbite.com" className="flex items-center">
            <img src={Logo} className="h-44 w-44 mr-3" alt="Flowbite Logo" />
           
        </a>
        <div className="flex items-center bg-blue-500 p-2 px-6 text-white rounded-xl">
           
           <Link to='/Login'> Login</Link>
        
        </div>
    </div>
</nav>
<nav className="bg-gray-50 dark:bg-gray-700">
    <div className="max-w-screen-xl px-4 py-3 mx-auto">
        <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
                <li>
                    <a href="#" className="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</a>
                </li>
                <li>
                    <a href="#" className="text-gray-900 dark:text-white hover:underline">Company</a>
                </li>
                <li>
                    <a href="#" className="text-gray-900 dark:text-white hover:underline">Team</a>
                </li>
                <li>
                    <a href="#" className="text-gray-900 dark:text-white hover:underline">Features</a>
                </li>
            </ul>
        </div>
    </div>
</nav>

    </>
  )
}

export default Navbar
