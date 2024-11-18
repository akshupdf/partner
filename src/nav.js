import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import { MdOutlinePlayArrow } from "react-icons/md";
import { useLocation } from 'react-router-dom';
import { FiPhoneCall } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";

export default function Navbar() {

  let location = useLocation();

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };




  return (
    <div className={`lg:w-full flex absolute justify-between items-center px-4 py-2  z-30    w-full  ${location.pathname === "/build" ? "bg-[#aedfae] top-0" : "top-8 bg-transparent" }`}>
   

      {/* Desktop Menu */}
      <div className='flex  ml-8 text-white w-[100%]'>


      <div className='flex w-[40%] '>
      <button className='mr-20 w-[24%] rounded-full bg-[#6b9855] border-white border-2 flex px-8 py-3 '><span class="elementor-button-icon elementor-align-icon-left">
      <svg className='mr-4' xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 25 25" width="18"><g id="Layer_13" data-name="Layer 13"><path fill="white" d="m30 7a1 1 0 0 1 -1 1h-26a1 1 0 0 1 0-2h26a1 1 0 0 1 1 1zm-5 8h-22a1 1 0 0 0 0 2h22a1 1 0 0 0 0-2zm-9 9h-13a1 1 0 0 0 0 2h13a1 1 0 0 0 0-2z"></path></g></svg>			</span>MENU</button>
      <Link to="/" >   <img
 src="https://partners-dp.com/wp-content/uploads/2023/10/cropped-1000x1000px-15.png"
 alt="logo"
 className="w-[25vh]   "
 /></Link>

      </div>
      <ul className="hidden md:flex space-x-4 justify-center items-center text-[20px] font-[200] font-sen cursor-pointer w-[60%]">
        <li className='mr-2'>+383 45 838 384</li>

        <li className='mr-2 border border-[#006400] p-3 rounded-full text-[#d8f3d8]'><MdOutlinePlayArrow /></li>
        <li className='ml-2 p-3 rounded-full bg-[#006400] text-[#d8f3d8]'>3D</li>
     
        <li className='ml-2 flex '><span className='absolute text-[#d8f3d8] top-7 px-4'><CiSearch /> </span> <input type="search" id="default-search" className=" w-full  p-4 ps-12 text-xl border-none rounded-full " placeholder="Zgjedh banesën"  /></li>
        <li className='ml-2 border border-white p-3 rounded-full bg-white text-[#006400] '><FiPhoneCall /></li>
      </ul>
      </div>
      {/* Hamburger Icon */}
      <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
        {isOpen ? <HiX size={30} /> : <HiMenu size={30} />}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute top-16 right-4 bg-transperant shadow-lg p-4 w-48 space-y-2 text-[16px] font-[200] font-sen cursor-pointer md:hidden">
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/about2" onClick={toggleMenu}>About Us</Link></li>
          <li><Link to="/products" onClick={toggleMenu}>Product</Link></li>
      
          <li><Link to="/case" onClick={toggleMenu}>Case Studies</Link></li>
          <li><Link to="/faq" onClick={toggleMenu}>FAQ</Link></li>
          {/* <li><Link to="/safety" onClick={toggleMenu}>Safety & Ethics</Link></li> */}
          <li><Link to="/training" onClick={toggleMenu}>Training Program</Link></li>
          <li ><Link to="/contact" onClick={toggleMenu}>Contact Us</Link></li>
        </ul>
      )}
    </div>
  );
}
