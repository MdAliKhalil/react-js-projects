import React from 'react'
import Form from './Form'

const Contact = () => {
    return (
        <div id='contact' className='container flex flex-col justify-center items-center w-full mx-auto overflow-hidden p-14 md:px-20 lg:px-32'>
            <h2 className='text-2xl sm:text-4xl font-bold mb-2'>Contact <span className='font-light underline underline-offset-4 decoration-1'>With Us</span></h2>
            <p className='text-gray-500 max-w-80 text-center mb-8'>Ready to Make a Move? Let's Build Your Future Together</p>
            <Form />
        </div>
    )
}

export default Contact