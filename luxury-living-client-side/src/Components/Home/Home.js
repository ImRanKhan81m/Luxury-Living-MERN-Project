import React from 'react';
import Banner from './Banner/Banner';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';
import Services from './Services/Services';
import Testimonials from './Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <div className='bg-secondary'>
                <Navbar />
                <Banner />
            </div>
            <Services />
            <div className='lg:py-28 md:py-20 py-16'><Testimonials /></div>
            <div className=' bg-secondary'><Contact /></div>
            <div className=' bg-primary pt-16 pb-40'><Footer/></div>
        </div>
    );
};

export default Home;