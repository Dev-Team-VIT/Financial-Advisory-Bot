import React, { ChangeEvent, FormEvent, useState } from 'react';
import Input from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Separator } from '../components/ui/separator';
import Google from '../assets/Google.svg';
import axios from 'axios';

interface SignupFormState {
  username: string;
  email: string;
  password: string;
  reEnterPassword: string;
}

function Signup() {
  const url = 'https://financial-advisory-bot-production.up.railway.app/api/v1/user/signup';
  const [formData, setFormData] = useState<SignupFormState>({
    username: '',
    email: '',
    password: '',
    reEnterPassword: '',
  });
  const [validPassword, setValidPassword] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(false);
  const [validationMessage, setValidationMessage] = useState('');
  const [revalidationMessage, setReValidationMessage] = useState('');


  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePass = (e: ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value;
    setFormData((prevData) => ({
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

    if (formData.reEnterPassword && password !== formData.reEnterPassword) {
      setPasswordMatch(false);
    } else {
      setPasswordMatch(true);
    }
  };

  const handleReEnterPass = (e: ChangeEvent<HTMLInputElement>) => {
    const reEnterPassword = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      reEnterPassword,
    }));

    if (reEnterPassword === formData.password) {
      setPasswordMatch(true);
      setReValidationMessage("")
    } else {
      setPasswordMatch(false);
      setReValidationMessage("Password do not match")
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validPassword || !passwordMatch) {
      setValidationMessage('Please fix the errors before submitting');
      return;
    }

    try {
      const res = await axios.post(url, formData);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('username', res.data.username);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form
      className='signup flex flex-col w-[fit-content] h-[100vh] items-center justify-center gap-[20px] m-[-66px]'
      onSubmit={handleSubmit}
    >
      <h1 className='text-2xl md:text-5xl mb-[50px] font-bold'>Signup to Money Mantra</h1>
      <Input
        type='text'
        value={formData.username}
        onChange={handleChange}
        name='username'
        placeholder='Enter your username'
        className='px-[15px] w-[300px] outline-none md:w-[400px]'
      />
      <Input
        type='email'
        value={formData.email}
        onChange={handleChange}
        name='email'
        placeholder='Enter your email'
        className='px-[15px] w-[300px] outline-none md:w-[400px]'
      />
      <Input
        type='password'
        value={formData.password}
        onChange={handlePass}
        name='password'
        placeholder='Enter your Password'
        className={`px-[15px] w-[300px] md:w-[400px] outline-none ${
          validPassword ? 'focus:border-2 focus:border-[green]' : 'focus:border-2 focus:border-[red]'
        }`}
      />
      {validationMessage && <p className='text-red-500'>{validationMessage}</p>}
      <Input
        type='password'
        value={formData.reEnterPassword}
        onChange={handleReEnterPass}
        name='reEnterPassword'
        placeholder='Re-Enter your Password'
        className={`px-[15px] w-[300px] md:w-[400px] outline-none ${
          passwordMatch ? 'focus:border-2 focus:border-[green]' : 'focus:border-2 focus:border-[red]'
        }`}
      />
      {!passwordMatch && <p className='text-red-500'>{revalidationMessage}</p>}
      <Button className='w-[300px] md:w-[400px] text-background hover:bg-mutedOrange text-background rounded-[50px]'>
        Signup
      </Button>
      <div className='flex items-center justify-center w-[100px] md:w-[170px] gap-[10px]'>
        <Separator className='my-4 bg-[black]'></Separator>
        <p>OR</p>
        <Separator className='my-4 bg-[black]'></Separator>
      </div>
      {/* <div className='flex flex-row gap-[10px] border rounded-[50px] w-[300px] md:w-[400px] border-[2px] border-primary p-[5px] items-center justify-center cursor-pointer'>
        <img src={Google} alt='google' />
        <p className='text-xl text-primary'>Google</p>
      </div> */}
    </form>
  );
}

export default Signup;
