import React from 'react';
import Service from './Service';

const Services = () => {
    return (
        <div className='mid-container'>
            <h1 className='text-4xl font-bold text-center lg:mt-24 md:mt-16 my-10'>We're an agency tailored to all <br/> 
                clients' needs that always delivers</h1>

            <div className=' lg:my-16 md:my-10'>
                <Service />
            </div>
        </div>
    );
};

export default Services;