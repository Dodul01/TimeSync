import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { BsPlus, BsFillMenuButtonWideFill } from 'react-icons/bs'


const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className='flex item-center justify-between max-w-7xl py-4 px-2 mx-auto'>
      <div className='flex'>
        <h2 className='font-tas-beginner text-3xl font-bold'>TimeSink</h2>
        <Link to='/profile' className='md:flex hidden items-center justify-center gap-3 cursor-pointer ml-5 border p-2 rounded-full'>
          <img className='h-[30px] rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7YPYthUncyoMocgioGoDRStcp9SUvL36I5A&usqp=CAU" alt="" />
          <strong>Allen Dodul</strong>
        </Link>
      </div>
      <div className='md:flex hidden'>
        <NavLink className='mx-2' to='/'>Events</NavLink>
        <NavLink className='mx-2' to='/booking'>Booking</NavLink>
      </div>
      <div className='md:flex hidden'>
        <NavLink className='text-black bg-[#f0f0f0] flex items-center justify-center w-[120px] font-semibold p-2 rounded-full' to='/addNewBooking'> <BsPlus /> Add New</NavLink>
      </div>
      {/* Mobile Menu */}
      <div onClick={()=> setIsMenuOpen(!isMenuOpen)} className='md:hidden flex'>
        <BsFillMenuButtonWideFill className='text-2xl cursor-pointer' />
      </div>

      <div className={`md:hidden flex flex-col absolute top-14 ${isMenuOpen ? 'left-0' : 'left-[-100%]'} pb-5 transition-all bg-[#14181e] w-[100%] p-2`}>
      <Link to='/profile' className='flex lg:hidden items-center justify-center gap-3 cursor-pointer ml-2 border p-2 rounded-full mb-5 max-w-[150px]'>
          <img className='h-[30px] rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7YPYthUncyoMocgioGoDRStcp9SUvL36I5A&usqp=CAU" alt="" />
          <strong>Allen Dodul</strong>
        </Link>
        <NavLink className='mx-2' to='/'>Events</NavLink>
        <NavLink className='mx-2' to='/booking'>Booking</NavLink>
      </div>

    </nav>
  )
}

export default Nav
