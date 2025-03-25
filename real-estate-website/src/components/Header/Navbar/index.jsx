import React, { useState } from 'react'
import { assets } from '../../../assets/assets';
import MobileNav from './MobileNav';

const Navbar = () => {
    const [mobilemenu, setMobileMenu] = useState(false);

    const handleMobileMenu = () => {
        setMobileMenu(true);
    }

    return (
        <div className='absolute top-0 left-0 w-full z-10'>
            <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
                <a href="/"><img src={assets.logo} alt="Logo" /></a>
                <ul className='hidden md:flex gap-7 text-white'>
                    <a href="#header" className='cursor-pointer hover:text-gray-400'>Home</a>
                    <a href="#about" className='cursor-pointer hover:text-gray-400'>About</a>
                    <a href="#projects" className='cursor-pointer hover:text-gray-400'>Projects</a>
                    <a href="#testimonials" className='cursor-pointer hover:text-gray-400'>Testimonials</a>
                </ul>
                <button className='hidden md:block bg-white px-8 py-2 rounded-full'>Sign up</button>
                <button className='md:hidden' onClick={handleMobileMenu}><img src={assets.menu_icon} className='w-7' alt="Menu Icon" /></button>
            </div>

            {/* ----- mobile menu ----- */}
            {
                mobilemenu ? <MobileNav mobilemenu={mobilemenu} setmobilemenu={setMobileMenu} /> : null
            }
        </div>
    )
}

export default Navbar