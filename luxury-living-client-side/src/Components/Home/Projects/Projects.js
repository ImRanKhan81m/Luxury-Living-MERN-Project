import React from 'react';
import Project from './Project';

const Projects = () => {
    return (
        <div className='mid-container'>
            <h6 className='lg:mt-24 md:mt-16 text-center font-semibold'>Projects</h6>
            <h1 className='text-4xl font-bold text-center mb-16'>Discover the latest Interior Design <br /> available today  </h1>

            <div className=' lg:my-16 md:my-10'>
                <Project />
            </div>
        </div>
    );
};

export default Projects;