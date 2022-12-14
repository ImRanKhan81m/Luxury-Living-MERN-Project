import React from 'react';
import Service from './Service';

const Services = () => {
    return (
        <div className='mid-container'>
            <p className='lg:mt-24 md:mt-16 text-center font-semibold'>Services</p>
            <h1 className='text-4xl font-bold text-center '>We're an agency tailored to all <br />
                clients' needs that always delivers</h1>
            <div className=' lg:mt-16 md:my-10'>
                <Service />
            </div>

        </div>
    );
};

export default Services;