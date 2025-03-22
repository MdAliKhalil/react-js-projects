import React, { useEffect } from 'react'
import { assets } from '../assets/assets'

const MobileNav = ({ mobilemenu, setmobilemenu }) => {
    const closeMobileMenu = () => {
        setmobilemenu(false);
    }

    useEffect(() => {
        mobilemenu ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto';

        return () => {
            document.body.style.overflow = 'auto';
        }
    }, [mobilemenu])

    return (
        <div className='md:hidden fixed w-full right-0 top-0 bottom-0 overflow-hidden bg-white transition-all'>
            <div className='flex justify-end p-6'>
                <button onClick={closeMobileMenu}><img src={assets.cross_icon} className='w-6' alt="Close Menu" /></button>
            </div>
            <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
                <a href="#header" onClick={closeMobileMenu} className='px-4 py-2 rounded-full inline-block'>Home</a>
                <a href="#about" onClick={closeMobileMenu} className='px-4 py-2 rounded-full inline-block'>About</a>
                <a href="#projects" onClick={closeMobileMenu} className='px-4 py-2 rounded-full inline-block'>Projects</a>
                <a href="#testimonials" onClick={closeMobileMenu} className='px-4 py-2 rounded-full inline-block'>Testimonials</a>
            </ul>
        </div>
    )
}

export default MobileNav