"use client";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar';
import FormContainer from '../components/FormContainer';
import History from '../components/History';

type Props = {};

function Advisory({}: Props) {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLogin = () => {
      if (localStorage.getItem("username") == null) {
        return false;
      } else {
        return true;
      }
    };

    if (!checkLogin()) {
      navigate('/login');
    } else {
      setIsLoggedIn(true);
    }
  }, [navigate]);

  if (!isLoggedIn) {
    return null;
  }

  return (
    <main className='bg-greyBg h-[100vh] w-[100vw]'>
      <Navbar />
      <section className='flex flex-row items-center justify-center gap-[20px]'>
        <History />
        <FormContainer />
      </section>
    </main>
  );
}

export default Advisory;
