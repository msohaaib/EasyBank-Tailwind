import React from 'react'
import logos from '../../public/images/logo-white.svg'
import fb from '../../public/images/icon-facebook.svg'
import yt from '../../public/images/icon-youtube.svg'
import twt from '../../public/images/icon-twitter.svg'
import pint from '../../public/images/icon-pinterest.svg'
import inst from '../../public/images/icon-instagram.svg'


export default function footer() {
  return (
    <div className='mx-auto bg-[#2D314D]'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        <div className='grid flex-col place-content-center mt-8 md:mt-0'>
          <div className='my-4'>
            <img src={logos} alt="logo" className='md:mt-2' />
          </div>
          <div className='flex flex-row gap-4 my-4'>
            <img src={fb} alt="facebook" />
            <img src={yt} alt="youtube" />
            <img src={twt} alt="twitter" />
            <img src={pint} alt="pinterest" />
            <img src={inst} alt="instagram" />
          </div>
        </div>
        <div className='text-white flex flex-col text-center mt-2 md:flex-row md:gap-12 lg:mt-7'>
          <div className='flex flex-col gap-2 md:mt-2'>
            <a href="">Abouts Us</a>
            <a href="">Contact</a>
            <a href="">Blog</a>
          </div>
          <div className='flex flex-col gap-2 md:mt-2'>
            <a href="">Careers</a>
            <a href="">Support</a>
            <a href="">Privacy Policy</a>
          </div>
        </div>
        <div className='flex flex-col text-center mx-auto md:items-center md:col-span-2 md:row-start-2 lg:col-auto lg:row-auto'>
        <button className='px-8 md:px-10 my-8 lg:mt-12 font-sans py-3 rounded-full text-white bg-gradient-to-r from-[#54f584] to-[#28c9ed] hover:opacity-65 transition-all'>
            Request Invite
          </button>
          <p className='text-[#6B7280]'>&copy; EasyBank. All Right Reserved.</p>
        </div>
      </div>
    </div>
  )
}
