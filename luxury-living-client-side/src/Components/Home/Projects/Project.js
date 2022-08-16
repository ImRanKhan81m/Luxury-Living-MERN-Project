import React from 'react';
import img1 from '../../../assets/Image_Icon/Image/bernard-hermant-6ftZuO_-b64-unsplash 1.png';
import img2 from '../../../assets/Image_Icon/Image/Mask Group.png';
import img3 from '../../../assets/Image_Icon/Image/Mask Group-1.png';

const Project = () => {
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-7'>

            <div>
                <div className='h-[380px] overflow-hidden rounded-xl'>
                    <img src={img1} alt="" />
                </div>
                <div className='text-center py-5'>
                    <h2 className='text-xl font-semibold'>Villa on Washington Avenue</h2>
                    <p className='text-sm font-normal'>Dhaka, Bangladesh</p>
                </div>
            </div>
            <div>
                <div className='h-[380px] overflow-hidden rounded-xl'>
                    <img src={img2} alt="" />
                </div>
                <div className='text-center py-5'>
                    <h2 className='text-xl font-semibold'>Luxury villa in Rego Park</h2>
                    <p className='text-sm font-normal'>Dhaka, Bangladesh</p>
                </div>
            </div>
            <div>
                <div className='h-[380px] overflow-hidden rounded-xl'>
                    <img src={img3} alt="" />
                </div>
                <div className='text-center py-5'>
                    <h2 className='text-xl font-semibold'>Gorgeous house</h2>
                    <p className='text-sm font-normal'>Dhaka, Bangladesh</p>
                </div>
            </div>

        </div>
    );
};

export default Project;