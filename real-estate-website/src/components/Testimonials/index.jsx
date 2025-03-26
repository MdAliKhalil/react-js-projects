import React from 'react'
import TestimonialCards from './TestimonialCards'

const Testimonials = () => {
    return (
        <div id="testimonials" className='container flex flex-col justify-center items-center w-full mx-auto overflow-hidden p-14 md:px-20 lg:px-32'>
            <h2 className='text-2xl sm:text-4xl font-bold mb-2'>Customer <span className='font-light underline underline-offset-4 decoration-1'>Testimonials</span></h2>
            <p className='text-gray-500 text-center max-w-80 mb-8'>Real Stories from Those Who Found Home With Us</p>
            <TestimonialCards />
        </div>
    )
}

export default Testimonials