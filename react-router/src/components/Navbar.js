import React from 'react'
import logo from "../assets/logo.png"
import { Link } from 'react-router-dom'
import { toast } from 'react-hot-toast'

const Navbar = (props) => {
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;
  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>
        <Link to="/">
            <img src={logo} width={160} height={32} loading='lazy'/>
        </Link>

    <nav>
        <ul className='flex gap-x-6 text-white'>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
    </nav>

<div className='flex items-center gap-x-4'>
    { !isLoggedIn && 
       <Link to='/login'>
        <button className='bg-[#010b13] text-white py-[8px] px-[12px] rounded-[8px] border border-[#010b13]'>
            Login
        </button>
       </Link> 
    }
    { !isLoggedIn &&
       <Link to='/signup'>
        <button className='bg-[#010b13] text-white py-[8px] px-[12px] rounded-[8px] border border-[#010b13]' onClick={() => {
            setIsLoggedIn(false);
            toast.success("Logged Out");
        }}>
            SignUp
        </button>
       </Link> 
    }
    { isLoggedIn &&
       <Link to='/'>
        <button className='bg-[#010b13] text-white py-[8px] px-[12px] rounded-[8px] border border-[#010b13]' onClick={() => {
            setIsLoggedIn(false);
            toast.success("Logged Out");
        }}>
            Logout
        </button>
       </Link> 
    }
    { isLoggedIn &&
       <Link to='/dashboard'>
        <button className='bg-[#010b13] text-white py-[8px] px-[12px] rounded-[8px] border border-[#010b13]'>
            Dashboard
        </button>
       </Link> 
    }
</div>
</div>
  )
}

export default Navbar