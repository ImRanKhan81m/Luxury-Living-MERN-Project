import React from 'react';
import Banner from './Banner/Banner';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';
import Projects from './Projects/Projects';
import Services from './Services/Services';
import Testimonials from './Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <div className='bg-secondary'>
                <Navbar />
                <Banner />
            </div>
            <Projects />
            <Services />
            <div className='lg:py-28 md:py-20 py-16 bg-secondary'><Testimonials /></div>
            <div><Contact /></div>
            <div className=' bg-primary pt-16 pb-40'><Footer /></div>
        </div>
    );
};

export default Home;