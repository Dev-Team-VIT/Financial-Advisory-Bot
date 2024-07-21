import React from 'react'
import { Link } from 'react-router-dom';
import Login from '../components/Login';
import Signup from '../components/Signup';

interface componentData{
  type:string,
}
function UserHandling({type}: componentData) {

  return (
    <>
    <main className='h-[100vh] flex flex-row'>
        <section className="hidden h-[100vh] w-[50vw] md:flex bg-[url('/login.svg')] bg-cover">
        </section>
        <section className='w-[100vw] flex flex-col items-center justify-center md:w-[50vw]'>
          {type == 'login'?<Login></Login>:<Signup></Signup>}
          {type ==='login'?<p>Do not have account?<Link to='/signup' className='text-primary underline'>Create</Link></p>:<p>Alreayd have an account?<Link to='/login' className='text-primary underline'>Login</Link></p>}    
        </section>
    </main>
    </>
  )
}

export default UserHandling;