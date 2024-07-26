import React, { ChangeEvent, FormEvent, useState } from 'react';
import Input from './ui/input';
import { Button } from './ui/button';
import { Separator } from "./ui/separator";
import Google from '../assets/Google.svg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Checkbox } from './ui/checkbox';
import { useAlert } from '../context/alertContext';

interface loginData {
  email: string,
  password: string
}

function Login() {
  const nav = useNavigate();
  const { setAlert } = useAlert();
  const [loginData, setLoginData] = useState<loginData>({ email: '', password: '' });
  const url = `http://127.0.0.1:3000/api/v1/user/signin`;
  const [validationMessage, setValidationMessage] = useState('');
  const [validPassword, setValidPassword] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await axios.post(url, loginData);
      if (res.data.type === 'success') {
        setAlert('success');
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("username", res.data.username);
        setTimeout(() =>{
          nav('/');
        }, 500);
      } else {
        setAlert('failure');
      }
    } catch (err) {
      setAlert('failure');
      console.log(err);
    }
  };

  const handlePass = (e: ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value;
    setLoginData(prevData => ({
      ...prevData,
      password,
    }));

    if (password.length >= 8) {
      setValidPassword(true);
      setValidationMessage('');
    } else {
      setValidPassword(false);
      setValidationMessage('Password must be at least 8 characters long');
    }
  };

  return (
    <form className='login flex flex-col w-[fit-content] h-[100vh] items-center justify-center md:items-center md:justify-center gap-[20px] m-[-100px]' onSubmit={handleSubmit}>
      <h1 className='text-start text-2xl md:text-5xl mb-[50px] font-bold'>Login to Money Mantra</h1>
      <Input type='email' value={loginData.email} onChange={handleChange} name='email' placeholder='Enter your email' className='px-[15px] w-[90vw] outline-none md:w-[400px]' />
      <Input
        type='password'
        value={loginData.password}
        onChange={handlePass}
        name='password'
        placeholder='Enter your Password'
        className={`px-[15px] w-[90vw] md:w-[400px] outline-none ${validPassword ? 'focus:border-2 focus:border-[green]' : 'focus:border-2 focus:border-[red]'
          }`}
      />
      {validationMessage && <label htmlFor='password' className='text-[12px] mt-[-20px] text-red-500'>{validationMessage}</label>}
      <div className='flex flex-row justify-between w-[85vw] md:w-[380px]'>
        <div className='flex flex-row justify-center items-center gap-[5px]'>
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Remember me
          </label>
        </div>
        <div>
          <p className='transition ease-in-out cursor-pointer text-[#afafaf] underline decoration-1 hover:text-[black]'>Forget Password?</p>
        </div>
      </div>
      <Button className='w-[90vw] md:w-[400px] text-background hover:bg-mutedOrange text-background rounded-[50px]'>Login</Button>
      <div className='hidden md:flex items-center justify-center w-[100px] md:w-[170px] gap-[10px]'>
        <Separator className='my-4 bg-[black]'></Separator>
        <p>OR</p>
        <Separator className='my-4 bg-[black]'></Separator>
      </div>
      {/* <div className='flex flex-row gap-[10px] border rounded-[50px] w-[300px] md:w-[400px] border-[2px] border-primary p-[5px] items-center justify-center cursor-pointer'>
        <img src={Google} alt="google" />
        <p className='text-xl text-primary'>Google</p>
      </div> */}
    </form>
  );
}

export default Login;
