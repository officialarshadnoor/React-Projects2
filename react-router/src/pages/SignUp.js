import React from 'react';
import signupImg from '../assets/bg2.png';
import SignUpForm from '../components/SignUpForm';
import Template from '../components/Template';

const SignUp = ({setIsLoggedIn}) => {
  return (
    <Template 
    title="Welcome Back"
    desc1="Build skills for today, tommorrow, and beyond"
    desc2="Education to future-proof your career."
    image={signupImg}
    formtype="signup"
    setIsLoggedIn={setIsLoggedIn}
    
    />
  )
}

export default SignUp