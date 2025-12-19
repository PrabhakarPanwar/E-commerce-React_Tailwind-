
import { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

function Navbar() {
  const { assets, getTotalCount } = useContext(UserContext)
  const [visible, setVisible] = useState(false)
  return (
    <div className='flex justify-center items-center my-3 '>
      <div className='flex w-[90%] justify-between items-center'>
        <div className=''>
          <img className='w-36' src={assets.logo} alt="logo" />
        </div>

        <ul className='flex hidden sm:flex gap-5'>
          <NavLink to='/'>Home <hr /> </NavLink>
          <NavLink to='/collection'>Collection <hr /> </NavLink>
          <NavLink to='/about'>About <hr /> </NavLink>
          <NavLink to='/contact'>Contact <hr /> </NavLink>
        </ul>
        <div className='flex hidden sm:flex gap-5'>
          <img className='w-5 h-5 cursor-pointer' src={assets.search_icon} alt="search" />
          <img className='w-5 h-5 cursor-pointer' src={assets.profile_icon} alt="profile" />
          <Link to="/cart" className='relative'>
            <img className='w-5 h-5 cursor-pointer' src={assets.cart_icon} alt="cart" />
            <p className='absolute flex justify-center items-center top-[12px] left-[10px] bg-black rounded-full text-white text-[0.5rem] h-[15px] w-[15px]'>{getTotalCount()}</p>
          </Link>
        </div>

        <img onClick={() => setVisible(true)} src={assets.menu_icon} className='w-6 sm:hidden' alt="" />
        <div className={`absolute top-0 overflow-hidden bottom-0 right-0 bg-white text-black ${visible ? 'w-full' : 'w-0'}`}>

          <div className="text-black justify-center items-center h-[100vh] flex gap-4" onClick={() => setVisible(false)}>
            <ul className='flex flex-col items-center gap-5'>
              <img src={assets.cross_icon} className='w-5 h-5' alt="" />
              <NavLink to='/'>Home <hr /> </NavLink>
              <NavLink to='/collection'>Collection <hr /> </NavLink>
              <NavLink to='/about'>About <hr /> </NavLink>
              <NavLink to='/contact'>Contact <hr /> </NavLink>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar