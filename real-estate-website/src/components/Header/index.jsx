import React from 'react'
import Navbar from './Navbar/index';
import { assets } from '../../assets/assets'

const Header = () => {
    return (
        <div className='min-h-screen bg-cover bg-center flex items-center w-full overflow-hidden' style={{ backgroundImage: `url('${assets.header_img}')` }} id='header'>
            <Navbar />
            <div className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'>
                <h1 className='text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20'>Explore homes that fit your dreams</h1>
                <div className='space-x-6 mt-16'>
                    <a href="#projects" className='border border-white px-8 py-2 rounded'>Projects</a>
                    <a href="#contact" className='border border-blue-500 px-8 py-2 rounded bg-blue-500'>Contact Us</a>
                </div>
            </div>
        </div>
    )
}

export default Header