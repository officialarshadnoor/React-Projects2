import './App.css';
import {useState} from 'react';

const App = () => {

  // const [firstName,setFirstName] = useState("");
  // const [lastName,setLastName] = useState("");

  // function firstNameHandler(event) {
  //   setFirstName(event.target.value);
  // }
  // function lastNameHandler(event) {
  //   setLastName(event.target.value);
  // }

  const [formData,setFormData] = useState( {
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    streetaddress: "",
    city: "",
    state: "",
    postalcode: "",
    byemail: "",
    pushnotification: "",
    });

  // const [formData,setFormData] = useState( {firstName: "", lastName: "", email: "", comments: "", isVisible:true, mode: "",favCar:""});


  function changeHandler(event) {
    const{name,value,checked, type} = event.target;
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type ==="checkbox" ? checked : value
      }
    });
  }

  function formSubmit(event){
    event.preventDefault();
  }

  return (
    <div className="w-full md:max-w-[50%] mx-auto shadow p-8">
    <form className='space-y-2' onSubmit={formSubmit}>
      <input
      type='text'
      placeholder='first name'
      onChange={changeHandler}
      name='firstName'
      value={formData.firstName}
      className='mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400'
      />
      <label htmlFor='firstName' className='text-sm font-medium leading-6 text-gray-900'>First Name</label>

<input
      type='text'
      placeholder='first name'
      onChange={changeHandler}
      name='lastName'
      value={formData.lastName}
      className='mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400'
      />
      <label htmlFor='lastName' className='text-sm font-medium leading-6 text-gray-900'>Last Name</label>


<input
      type='text'
      placeholder='email address'
      onChange={changeHandler}
      name='email'
      value={formData.email}
      className='mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400'
      />
      <label htmlFor='email' className='text-sm font-medium leading-6 text-gray-900'>Email</label>
  
<select 
name='country'
id='country'
onChange={changeHandler}
value={formData.country}
className='mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 bg-white'
>
  <option value='India'>India</option>
  <option value='USA'>USA</option>
  <option value='canada'>Canada</option>
  <option value='mexico'>Mexico</option>
</select>
<label htmlFor='country' className='text-sm font-medium leading-6 text-gray-900'>Counrty</label>


<input
type='text'
placeholder='1234 Main Street'
onChange={changeHandler}
name='streetaddress'
value={formData.streetaddress}
className='mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400'
/>
<label htmlFor='state' className='text-sm font-medium leading-6 text-gray-900'>Street Address</label>

<input
type='text'
placeholder='Araria'
onChange={changeHandler}
name='city'
value={formData.city}
className='mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400'
/>
<label htmlFor='city' className='text-sm font-medium leading-6 text-gray-900'>City</label>

<input
type='text'
placeholder='Bihar'
name='state'
onChange={changeHandler}
value={formData.state}
className='mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400'
/>
<label htmlFor='state' className='text-sm font-medium leading-6 text-gray-900'>State/Province</label>

<input
type='number'
placeholder='Bihar'
name='postalcode'
onChange={changeHandler}
value={formData.postalcode}
className='mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400'
/>
<label htmlFor='postalcode' className='text-sm font-medium leading-6 text-gray-900'>Zip / Postal Code</label>

    </form>

<div className='my-3'>
  <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Submit</button>
</div>

    </div>
  );
}

export default App;
