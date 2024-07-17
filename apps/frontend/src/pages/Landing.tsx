import React from 'react'
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Services from '../components/Services';
import AboutUs from '../components/AboutUs';
import { Hero } from '../components/Hero';


type Props = {}

export default function Landing({}: Props) {
  return (
    <main className='relative z-10'>
      <Navbar></Navbar>
      <section className='relative z-1'>
        <Hero></Hero>
      </section>

      <section className="h-[fit-content] flex flex-col justify-center align-center py-10 ">
        <Services></Services>
      </section>
      <section className='py-20'>
        <AboutUs></AboutUs>
      </section>
      <Footer></Footer>
    </main>
  )
}