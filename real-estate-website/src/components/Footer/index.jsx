import React from 'react'
import { assets } from '../../assets/assets';
import NewsletterForm from './NewsletterForm';

const Footer = () => {
    return (
        <div id='footer' className='container flex flex-col pt-10 px-4 md:px-20 lg:px-32 w-full bg-gray-900 overflow-hidden'>
            <div className='container flex flex-col md:flex-row justify-between items-start mx-auto w-full overflow-hidden'>
                <div className='w-full md:w-1/3 mb-8 md:mb-0'>
                    <img src={assets.logo_dark} alt="Logo" />
                    <p className='text-gray-400 mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, rem facere asperiores voluptatibus voluptas a labore eveniet minus quae est error, quidem molestias, nulla tempora obcaecati corporis voluptates neque tempore!</p>
                </div>
                <div className='w-full md:w-1/5 mb-8 md:mb-0'>
                    <h4 className='text-white text-lg font-bold mb-4'>Company</h4>
                    <ul className='flex flex-col gap-2 text-gray-400'>
                        <a className='hover:text-white' href="#header">Home</a>
                        <a className='hover:text-white' href="#about">About</a>
                        <a className='hover:text-white' href="#projects">Projects</a>
                        <a className='hover:text-white' href="#testimonials">Testimonials</a>
                        <a className='hover:text-white' href="#contact">Contact</a>
                        <a className='hover:text-white' href="#">Privacy Policy</a>
                    </ul>
                </div>
                <div className='w-full md:w-1/3 mb-8 md:mb-0'>
                    <h4 className='text-white text-lg font-bold mb-4'>Subscribe to our Newsletter</h4>
                    <p className='text-gray-400 mb-4 max-w-80'>The latest news, articles, and resources, sent to your inbox weekly.</p>
                    <NewsletterForm />
                </div>
            </div>
            <div className='border-t border-gray-700 py-4 mt-10 text-center text-gray-500'>
                Copyright 2025 © Real Estate Project. All Rights Reserved.
            </div>
        </div>
    )
}

export default Footer