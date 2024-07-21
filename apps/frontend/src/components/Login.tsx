// src/components/Login.jsx
import React, { ChangeEvent, FormEvent, useState } from 'react';
import Input from './ui/input';
import { Button } from './ui/button';
import { Separator } from "./ui/separator";
import Google from '../assets/Google.svg';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Login Form Data:', formData);
  };

  return (
    <form className='login flex flex-col w-[fit-content] h-[100vh] items-center justify-center gap-[20px] m-[-100px]' onSubmit={handleSubmit}>
      <h1 className='text-2xl md:text-5xl mb-[50px] font-bold'>Login to Money Mantra</h1>
      <Input type='email' name='email' placeholder='Enter your email' className='px-[15px] w-[300px] outline-none md:w-[400px]' />
      <Input type='password' name='password' placeholder='Enter your Password' className='px-[15px] w-[300px] md:w-[400px] outline-none'/>
      <div className='flex flex-row justify-between w-[280px] md:w-[380px]'>
        <div className='flex flex-row justify-center items-center gap-[5px]'>
          <input type="radio" name="remember" id="remember" />
          <label htmlFor='remember'>Remember Me</label>
        </div>
        <div>
          <p className='transition ease-in-out cursor-pointer text-[#afafaf] underline decoration-1 hover:text-[black]'>Forget Password?</p>
        </div>
      </div>
      <Button className='w-[300px] md:w-[400px] text-background hover:bg-mutedOrange text-background rounded-[50px]'>Login</Button>
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

export default Login;
