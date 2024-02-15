import React from 'react'
import { FaUserGraduate, FaUserTie, FaUserClock, FaUser, FaMoneyBill, FaSchool, FaCalendarAlt, FaQuestionCircle, FaClipboardList } from 'react-icons/fa';

export default function Sidebar() {
  return (
    <>
     <aside  id='sidebar'>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          <p className='text-sm'> Main Menu</p>
        </div>
      </div>
      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <a href='/' className='flex'><FaUserGraduate className='mr-3'/> Dashboard</a>
        </li>
        <li className='sidebar-list-item'>
          <a href='/' className='flex'><FaSchool className='mr-3'/> Academy Management</a>
        </li>
        <li className='sidebar-list-item'>
          <a href='/' className='flex'><FaMoneyBill className='mr-3'/> Fee Payment</a>
        </li>
        <li className='sidebar-list-item'>
        <a href='/' className='flex'><FaUserClock className='mr-3'/> Attendance</a>
        </li>

        <li className='sidebar-list-item'>
          <a href='/' className='flex'> <FaQuestionCircle className='mr-3'/> Enquiries</a>
        </li>
        <li className='sidebar-list-item'>
          <a href='/' className='flex'><FaCalendarAlt className='mr-3'/> Schedule</a>
        </li>
        <li className='sidebar-list-item'>
          <a href='/' className='flex'><FaClipboardList className='mr-3'/> Reports & Analytics</a>
        </li>
        <li className='sidebar-list-item'>
          <a href='/' className='flex'>  <FaUser className='mr-3'/> Students</a>
        </li>
        <li className='sidebar-list-item'>
          <a href='/' className='flex'> <FaUserTie className='mr-3'/> Coaches</a>
        </li>

      </ul>
     </aside>
    </>
  )
}
