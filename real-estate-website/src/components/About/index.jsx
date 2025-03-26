import React from 'react'
import { motion } from 'framer-motion'
import { assets } from '../../assets/assets'

const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 200 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}

            id='about' className='container flex flex-col justify-center items-center w-full overflow-hidden mx-auto p-14 md:px-20 lg:px-32'>
            <h2 className='text-2xl sm:text-4xl font-bold mb-2'>About <span className='underline underline-offset-4 decoration-1 under font-light'>Our Brand</span></h2>
            <p className='text-gray-500 max-w-80 text-center mb-8'>Passionate About Properties, Dedicated to Your Vision</p>
            <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
                <img src={assets.brand_img} alt="Brand Image" className='w-full sm:w-1/2 max-w-lg' />
                <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>
                    <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
                        <div>
                            <p className='text-4xl font-medium text-gray-800'>10+</p>
                            <p className=''>Years of Excellence</p>
                        </div>
                        <div>
                            <p className='text-4xl font-medium text-gray-800'>12+</p>
                            <p className=''>Projects Completed</p>
                        </div>
                        <div>
                            <p className='text-4xl font-medium text-gray-800'>20+</p>
                            <p className=''>Mn. Sq. Ft. Delivered</p>
                        </div>
                        <div>
                            <p className='text-4xl font-medium text-gray-800'>25+</p>
                            <p className=''>Ongoing Projects</p>
                        </div>
                    </div>
                    <p className='my-10 max-w-lg text-left'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque ex neque exercitationem labore quia nemo ut inventore voluptatibus nostrum atque consequatur, ipsum autem possimus. Impedit corporis reprehenderit tempore sint culpa.</p>
                    <a href='#contact' className='bg-blue-600 text-white px-8 py-2 rounded'>Learn More</a>
                </div>
            </div>
        </motion.div>
    )
}

export default About