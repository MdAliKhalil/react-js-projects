import React from 'react'
import ProjectCarousel from './ProjectCarousel'

const Projects = () => {
    return (
        <div id="projects" className='container flex flex-col justify-center items-center w-full overflow-hidden mx-auto p-14 md:px-20 lg:px-32'>
            <h2 className='text-2xl sm:text-4xl font-bold mb-2'>Projects <span className='font-light underline underline-offset-4 decoration-1'>Completed</span></h2>
            <p className='text-gray-500 max-w-80 text-center mb-8'>Crafting Spaces, Building Legacies-Explore Our Portfolio</p>
            <ProjectCarousel />
        </div>
    )
}

export default Projects