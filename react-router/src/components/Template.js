import React from 'react'
import frameImage from '../assets/bg1.png';
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';
import {FcGoogle} from 'react-icons/fc'

const Template = ({title, desc1,desc2, image, formtype,setIsLoggedIn}) => {
  return (
<div className='flex justify-between w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0 max-[640px]:flex max-[640px]:flex-col max-[640px]:items-center max-[640px]:justify-center bg-[#001a33]'>

<div className='w-11/12 max-w-[450px]'>
        <h1 className='text-[#eee] font-semibold text-[1.875rem] leading-[2.375]'>{title}</h1>
        
        <p className='text-[1.125rem] leading[1.625rem] mt-4' >
            <span className='text-[#d7d4d4]'>{desc1}</span><br/>
            <span className='text-blue-400 italic'>{desc2}</span>
        </p>

    {formtype === "signup" ? 
    (<SignUpForm setIsLoggedIn={setIsLoggedIn}/>) :
    (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}

<div className='flex w-full items-center my-4 gap-x-2'>
    <div className='w-full h-[1px] bg-[#eee]'></div>
    <div className='text-[#eee] font-medium leading-[1.375rem'>
        OR
    </div>
    <div className='w-full h-[1px] bg-[#eee]'></div>
</div>

<button className='w-full flex justify-center items-center rounded-[8px] font-medium text-[#eee] border border-[#eee] px-[12px] py-[8px] gap-x-2 mt-6'>
    <FcGoogle/>
    <p>Sign Up with Google</p>
</button>

</div>


<div className='w-11/12 max-w-[450px]'>
    <img src={frameImage} 
    alt="Pattern"
    loading='lazy'
    />
    {/* <img src={frameImage2} 
    alt="Pattern"
    loading='lazy'
    className='absolute -top-4 right-4'
    /> */}
</div>

</div>
  )
}

export default Template