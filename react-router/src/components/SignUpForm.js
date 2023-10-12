import React from 'react';
import {AiOutlineEye,AiOutlineEyeInvisible} from 'react-icons/ai';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const SignUpForm = ({setIsLoggedIn}) => {

function changeHandler(event) {
    setFormData( (prevData) => (
        {
            ...prevData,
            [event.target.name]:event.target.value
        }
    ) )
}

const [formData,setFormData] = useState( {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
}) 

const [accountType,setAccountType] = useState("student");
function submitHandler(event) {
    event.preventDefault();
    if(formData.password !== formData.confirmPassword) {
        toast.error("Password do not matching!");
        return ;
    }
    setIsLoggedIn(true);
    toast.success("Account Created!");
    const accoutData = {
        ...formData,
        
    }
    toast.success("You are redirecting to dashboard...");
    navigate("/dashboard");
}

const navigate = useNavigate();

const [showPassword,setShowPassword] = useState(false);
const [showConfirmPassword,setShowConfirmPassword] = useState(false);
  return (
<div class='w-full'>
<div className='flex bg-[#0e2d4b] text-[#eee] p-1 gap-z-1 my-6 rounded-full max-w-max'>
    <button 
    className={`${accountType === "student" 
? "bg-[#010b13] text-[#eee]" 
: "bg-transparent text-[#eee]"} py-2 px-5 rounded-full transition-all duration-200`}
    onClick={() => setAccountType("student")}>Student</button>
    <button 
    className={`${accountType === "instructor" 
    ? "bg-[#010b13] text-[#eee]" : "bg-transparent text-[#eee]"} py-2 px-5 rounded-full transition-all duration-200`}
    onClick={() => setAccountType("instructor")}>Instructor</button>
</div>

<form onSubmit={submitHandler}>
    {/* first name last name  */}
    <div className='flex justify-between max-[640px]:flex-col mt-[20px]'>
    <label>
        <p className='text-[0.875rem] text-[#eee] mb-1 leading-[1.375rem]'>First Name <sup className='text-pink-200 '>*</sup></p>
        <input
        required
        type="text"
        name="firstName"
        onChange={changeHandler}
        placeholder="Enter First Name"
        value={formData.firstName}
        className='bg-[#0e2d4b] rounded-[0.5rem] text-[#eee] w-full p-[12px]'
        />
    </label>
    <label>
        <p className='text-[0.875rem] text-[#eee] mb-1 leading-[1.375rem]'>Last Name <sup className='text-pink-200 '> *</sup></p>
        <input
        required
        type="text"
        name="lastName"
        onChange={changeHandler}
        placeholder="Enter Last Name"
        value={formData.lastName}
        className='bg-[#0e2d4b] rounded-[0.5rem] text-[#eee] w-full p-[12px]'
        />
    </label>
    </div>

    <div className='mt-[20px]'>
    {/* email address  */}
    <label className='w-full mt-4'>
        <p className='text-[0.875rem] text-[#eee] mb-1 leading-[1.375rem]'>Email Address <sup className='text-pink-200 '> *</sup></p>
        <input
        required
        type="email"
        name="email"
        onChange={changeHandler}
        placeholder="Enter Email Address"
        value={formData.email}
        className='bg-[#0e2d4b] rounded-[0.5rem] text-[#eee] w-full p-[12px]'
        />
    </label>
    </div>

    {/* create and confirm password  */}
<div className='w-full flex justify-between max-[640px]:flex-col mt-[20px]'>
<label className='relative'>
        <p className='text-[0.875rem] text-[#eee] mb-1 leading-[1.375rem]'>Create Password <sup className='text-pink-200 '> *</sup></p>
        <input
        required
        type={showPassword ? ("text") : ("password")}
        name="password"
        onChange={changeHandler}
        placeholder="Enter password"
        value={formData.password}
        className='bg-[#0e2d4b] rounded-[0.5rem] text-[#eee] w-full p-[12px]'
        />
        <span className='absolute right-3 top-[38px] cursor-pointer text-[#eee]' onClick={() => setShowPassword( (prev) => !prev)}>
            {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
        </span>
    </label>

    <label className='relative'>
        <p className='text-[0.875rem] text-[#eee] mb-1 leading-[1.375rem]'>Confirm Password <sup>*</sup></p>
        <input
        required
        type={showConfirmPassword ? ("text") : ("password")}
        name="confirmPassword"
        onChange={changeHandler}
        placeholder="Confirm password"
        value={formData.confirmPassword}
        className='bg-[#0e2d4b] rounded-[0.5rem] text-[#eee] w-full p-[12px]'
        /> 
        <span className='absolute right-3 top-[38px] cursor-pointer text-[#eee]' onClick={() => setShowConfirmPassword( (prev) => !prev)}>
            {showConfirmPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
        </span>
    </label>
</div>

<button className='w-full bg-yellow-500 rounded-[8px] font-medium text-[#eee] my-5 px-[12px] py-[8px]'>
    Create Account
</button>

</form>
</div>
  )
}

export default SignUpForm