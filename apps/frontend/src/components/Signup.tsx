// src/components/Signup.jsx
import React, { ChangeEvent, FormEvent, useState } from 'react';
import Input from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Separator } from "../components/ui/separator";
import Google from '../assets/Google.svg';


interface singupFormState{
    username:string,
    email:string,
    password:string,
    reEnterPassword:string,
}
function Signup() {
  const [formData, setFormData] = useState<singupFormState>({
    username: '',
    email: '',
    password: '',
    reEnterPassword: '',
  });

// will work on it 
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormData({
        ...formData,

    });
    console.log('Signup Form Data:', formData);
  };

  return (
    <form className='signup flex flex-col w-[fit-content] h-[100vh] items-center justify-center gap-[20px] m-[-66px]' onSubmit={handleSubmit}>
      <h1 className='text-2xl md:text-5xl mb-[50px] font-bold'>Signup to Money Mantra</h1>
      <Input type='text' name='username' placeholder='Enter your username' className='px-[15px] w-[300px] outline-none md:w-[400px]'/>
      <Input type='email' name='email' placeholder='Enter your email' className='px-[15px] w-[300px] outline-none md:w-[400px]'/>
      <Input type='password' name='password' placeholder='Enter your Password' className='px-[15px] w-[300px] md:w-[400px] outline-none'/>
      <Input type='password' name='reEnterPassword' placeholder='Re-Enter your Password' className='px-[15px] w-[300px] md:w-[400px] outline-none'/>
      <Button className='w-[300px] md:w-[400px] text-background hover:bg-mutedOrange text-background rounded-[50px]'>Signup</Button>
      <div className='flex items-center justify-center w-[100px] md:w-[170px] gap-[10px]'>
        <Separator className='my-4 bg-[black]'></Separator>
        <p>OR</p>
        <Separator className='my-4 bg-[black]'></Separator>
      </div>
      <div className='flex flex-row gap-[10px] border rounded-[50px] w-[300px] md:w-[400px] border-[2px] border-primary p-[5px] items-center justify-center cursor-pointer'>
        <img src={Google} alt="google" />
        <p className='text-xl text-primary'>Google</p>
      </div>
    </form>
  );
}

export default Signup;
