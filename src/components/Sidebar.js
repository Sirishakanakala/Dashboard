import React from 'react'
import { FaUserGraduate, FaUserTie, FaUserClock, FaUser, FaMoneyBill, FaSchool, FaCalendarAlt, FaQuestionCircle, FaClipboardList, FaHome } from 'react-icons/fa';
import {Link} from 'react-router-dom'

export default function Sidebar() {
  return (
    <>
     <div  id='sidebar'>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          <p className='text-sm'> Main Menu</p>
        </div>
      </div>
      <ul className='sidebar-list'>
      <li className='sidebar-list-item'>
          <Link to='/' className='flex item-centre'><FaHome className='mr-3 mt-1'/>Home</Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to='/dashboard' className='flex item-centre'><FaUserGraduate className='mr-3 mt-1'/> Dashboard</Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/academy" className='flex item-centre'><FaSchool className='mr-3 mt-1'/> Academy Management</Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to='/feepayment' className='flex item-centre'><FaMoneyBill className='mr-3 mt-1'/> Fee Payment</Link>
        </li>
        <li className='sidebar-list-item'>
        <Link to='/attendance' className='flex item-centre'><FaUserClock className='mr-3 mt-1'/> Attendance</Link>
        </li>

        <li className='sidebar-list-item'>
          <Link to='/enquiries' className='flex item-centre'> <FaQuestionCircle className='mr-3 mt-1'/> Enquiries</Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to='/schedule' className='flex item-centre'><FaCalendarAlt className='mr-3 mt-1'/> Schedule</Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to='/reports' className='flex item-centre'><FaClipboardList className='mr-3 mt-1'/> Reports & Analytics</Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to='/students' className='flex item-centre'>  <FaUser className='mr-3 mt-1'/> Students</Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to='/coaches' className='flex item-centre'> <FaUserTie className='mr-3 mt-1'/> Coaches</Link>
        </li>

      </ul>
     </div>
    </>
  )
}
