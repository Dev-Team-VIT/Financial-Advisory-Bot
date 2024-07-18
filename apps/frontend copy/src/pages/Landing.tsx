import React from 'react'
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { Services } from '../components/Services';
import AboutUs from '../components/AboutUs';
import { Hero } from '../components/Hero';


export default function Landing() {
  return (
    <main className='relative z-10 bg-greyBg'>
      <Navbar></Navbar>
      <section className='relative z-1'>
        <Hero></Hero>
      </section>
      <section className="h-[fit-content] flex flex-col justify-center align-center py-10 bg-greyBg">
        <Services></Services>
      </section>
      <section className='py-20'>
        <AboutUs></AboutUs>
      </section>
      <Footer></Footer>
    </main>
  )
}