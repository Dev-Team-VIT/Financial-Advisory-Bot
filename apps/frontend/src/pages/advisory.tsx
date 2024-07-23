import React from 'react';
import Navbar from '../components/navbar';
import FormContainer from '../components/FormContainer';
import History from '../components/History';

type Props = {}

function Advisory({}: Props) {
  return (
    <main className='bg-greyBg h-[100vh] w-[100vw]'>
      <Navbar></Navbar>
      <section className='flex flex-row items-center justify-center gap-[20px]'>
        <History></History>
        <FormContainer></FormContainer>
      </section>
    </main>
  )
}

export default Advisory;