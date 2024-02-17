import React from 'react';
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import {Link} from 'react-router-dom'

export default function Header() {
  return (
    <div className='bg-grey p-1' style={{ backgroundColor: '#b0b2bca2', position: 'fixed', width: '100%', zIndex: '100' }}>
      <div className='container flex header-container'>
         <div>
         <img className='w-25 h-10 mt-1 ml-5 ' src='./images/spartsLogo.png' alt='Sparts Logo' />
        
         </div>
        <div className='ml-1 header-heading'>
          <p className='text-2xl ml-8 p'>Welcome Sirisha</p>
          <p className='text-sm ml-9 p'>Here is a summary of your business</p>
        </div>
        <Link className='b size-10 rounded-full bg-neutral-100 mt-2 ml-1 ml-auto absolute right-60' to='/settings'>
          <IoSettingsOutline className='size-4 m-auto mt-3 place-content:center' />
        </Link>
        <Link className='b size-10 rounded-full bg-neutral-100 mt-2 ml-1  absolute right-48' to='/notifications'>
          <IoMdNotificationsOutline className='size-4 m-auto mt-3 place-content:center' />
        </Link>
        <div className='b size-10 mt-2 ml-1  absolute right-36'>
          <img className='rounded-full' src='./images/img.jpg' alt='User Profile' />
        </div>
        <div className='b ml-2 mt-1 absolute right-4'>
          <span className='text-m'>Sirisha Kanakala</span>
          <p style={{fontSize: '0.8rem'}}>siri1803@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
