import React, { useState } from 'react';
import logos from '../../public/images/logo.svg';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='container mx-auto relative'>
      <nav className='flex flex-row justify-between flex-wrap py-3 bg-white h-20 px-6 mx-5'>
        <div className='items-center pt-3'>
          <img src={logos} className='h-6' alt="EasyBank Logo" />
        </div>
        <div className={`md:flex gap-6 h-full items-stretch text-[#6B7280] hidden text-md pt-3 md:block`}>
          <a className='hover:border-b-4 hover:border-[#31D35C] transition-all' href="">Home</a>
          <a className='hover:border-b-4 hover:border-[#31D35C] transition-all' href="">About</a>
          <a className='hover:border-b-4 hover:border-[#31D35C] transition-all' href="">Contact</a>
          <a className='hover:border-b-4 hover:border-[#31D35C] transition-all' href="">Blog</a>
          <a className='hover:border-b-4 hover:border-[#31D35C] transition-all' href="">Career</a>
        </div>
        <button className='px-10 font-sans py-3 rounded-full text-white bg-gradient-to-r from-[#54f584] to-[#28c9ed] hidden md:block hover:opacity-65 transition-all'>
          Request Invite
        </button>
        <button className='md:hidden pt-3 ml-auto' onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-10 w-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
          </svg>
        </button>
      </nav>
      <div className={`absolute top-20 left-0 w-full bg-white shadow-lg md:hidden z-10 ${menuOpen ? 'block' : 'hidden'}`}>
        <a className='block py-2 px-6 hover:border-b-4 hover:border-[#31D35C] transition-all text-center' href="">Home</a>
        <a className='block py-2 px-6 hover:border-b-4 hover:border-[#31D35C] transition-all text-center' href="">About</a>
        <a className='block py-2 px-6 hover:border-b-4 hover:border-[#31D35C] transition-all text-center' href="">Contact</a>
        <a className='block py-2 px-6 hover:border-b-4 hover:border-[#31D35C] transition-all text-center' href="">Blog</a>
        <a className='block py-2 px-6 hover:border-b-4 hover:border-[#31D35C] transition-all text-center' href="">Career</a>
      </div>
    </div>
  );
}
