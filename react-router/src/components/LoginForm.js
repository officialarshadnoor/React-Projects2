import React, {useState} from 'react';
import {AiOutlineEye,AiOutlineEyeInvisible} from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';


const LoginForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState( {
        email:"",password:""
    })
    
    const [showPassword, setShowPassword] = useState(false);
    
    function changeHandler(event) {
        setFormData( (prevData) => (
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ));
    }

    function submitHandler(event){
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
        navigate("/dashboard");
    }

  return (
    <div class='w-full'>
    <form onSubmit={submitHandler}
    className='flex flex-col w-full gap-y-4 mt-6'
    >
        <label className='w-full'>
            <p className='text-[0.875rem] text-[#eee] mb-1 leading-[1.375rem]'>Email Address <sup className='text-pink-200 '>*</sup></p>
            <input 
            type='email'
            placeholder='Enter Email Address...'
            value={FormData.email}
            onClick={changeHandler}
            required
            name="email"
            className='bg-[#0e2d4b] rounded-[0.5rem] text-[#eee] w-full p-[12px]'
            />
        </label>

        <label className='w-full relative'>
            <p className='text-[0.875rem] text-[#eee] mb-1 leading-[1.375rem]'>Password <sup className='text-pink-200 '>*</sup></p>
            <input 
            type={showPassword ? ("text") : ("password")}
            placeholder='Enter Password...'
            value={FormData.password}
            onClick={changeHandler}
            required
            name="password"
            className='bg-[#0e2d4b] rounded-[0.5rem] text-[#eee] w-full p-[12px]'
            />
<span className='absolute right-3 top-[38px] cursor-pointer text-[#eee]' onClick={() => setShowPassword( (prev) => !prev)}  >
    {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEye/>)}
</span>
<Link to="#">
    <p className='text-xs mt-1 text-blue-100 max-w-max ml-auto'>Forgot Password</p>
</Link>
</label>


<button className='w-full bg-yellow-500 rounded-[8px] font-medium text-[#eee] px-[12px] py-[8px]'>
    Sign In
</button>

</form>
</div>
  )
}

export default LoginForm