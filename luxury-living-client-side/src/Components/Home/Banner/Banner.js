import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../assets/Image_Icon/Image/pierre-chatel-innocenti-AlSlE8IAjZo-unsplash 1.png'

const Banner = () => {
    return (
        <div className='mid-container'>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 lg:gap-0 gap-10  mt-10 pb-16'>
                <div className='lg:flex md:flex items-center lg:order-1 md:order-1 order-2'>
                    <div className='lg:text-start text-center'>
                        <h1 className='lg:text-5xl text-4xl font-bold mb-5 lg:leading-[60px]'>WE BUILD <br /> YOUR DREAM</h1>
                        <p className='text-neutral text-sm font-normal mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Aut voluptatem laborum laboriosam. Est corrupti ut distinctio accusantium <br /> earum dolore debitis omnis</p>
                        <Link to='/' ><button className='btn btn-primary lg:px-5 '>Booking</button> </Link>
                    </div>
                </div>
                <div className='lg:order-2 md:order-2 order-1'>
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;