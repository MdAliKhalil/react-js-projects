import React, { useEffect, useState } from 'react'
import { assets, projectsData } from '../../assets/assets'

const ProjectCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(1);

    useEffect(() => {
        const UpdateCardsToShow = () => {
            if (window.innerWidth >= 1024) {
                setCardsToShow(projectsData.length);
            }
            else {
                setCardsToShow(1);
            }
        }
        UpdateCardsToShow();
        window.addEventListener('resize', UpdateCardsToShow);
        return () => window.removeEventListener('resize', UpdateCardsToShow);
    }, [])

    const nextProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
    }

    const previousProject = () => {
        setCurrentIndex((prevIndex) => prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1);
    }

    return (
        <>
            <div className='flex justify-end items-center w-full mb-8'>
                <button onClick={previousProject} className='bg-gray-200 mr-2 p-3 rounded' aria-label='Previous Arow'><img src={assets.left_arrow} alt="Previous Arrow" /></button>
                <button onClick={nextProject} className='bg-gray-200 p-3 rounded' aria-label='Next Arrow'><img src={assets.right_arrow} alt="Next Arrow" /></button>
            </div>
            <div className='overflow-hidden'>
                <div className='flex flex-row gap-0 md:gap-8 transition-transform duration-500 ease-in-out' style={{ transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)` }}>
                    {
                        projectsData.map((project, index) => (
                            <div key={index} className='relative flex-shrink-0 w-full sm:w-1/4'>
                                <img src={project.image} alt={project.title} className='w-full h-auto mb-14' />
                                <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
                                    <div className='inline-block bg-white w-3/4 px-4 py-2 shadow-md'>
                                        <h3 className='text-xl font-semibold text-gray-800'>{project.title}</h3>
                                        <p className='text-gray-500 text-sm'>{project.price} <span className='px-1'>|</span> {project.location}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default ProjectCarousel