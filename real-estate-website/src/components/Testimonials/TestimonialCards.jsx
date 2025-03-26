import React from 'react'
import { assets, testimonialsData } from '../../assets/assets';

const TestimonialCards = () => {
    return (
        <div className='flex flex-row justify-center items-center flex-wrap gap-8'>
            {
                testimonialsData.map((testimonial, index) => (
                    <div key={index} className='max-w-[340px] border shadow-lg rounded px-8 py-12 text-center'>
                        <img className='w-20 h-20 rounded-full mx-auto mb-4' src={testimonial.image} alt={testimonial.alt} />
                        <h3 className='text-xl text-gray-700 font-medium'>{testimonial.name}</h3>
                        <p className='text-gray-500 mb-4 text-sm'>{testimonial.title}</p>
                        <div className='flex flex-row justify-center gap-1 mb-4'>
                            {
                                Array.from({ length: testimonial.rating }, (item, index) => (
                                    <img key={index} src={assets.star_icon} alt="Star Icon" />
                                ))
                            }
                        </div>
                        <p className='text-gray-600'>{testimonial.text}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default TestimonialCards