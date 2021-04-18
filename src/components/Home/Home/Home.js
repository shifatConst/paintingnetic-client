import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Contact from '../HomeComponents/Contact/Contact';
import FeaturedService from '../HomeComponents/FeaturedService/FeaturedService';
import Header from '../HomeComponents/Header/Header';
import Services from '../HomeComponents/Services/Services';
import TeamMembers from '../HomeComponents/TeamMembers/TeamMembers';
import Testimonials from '../HomeComponents/Testimonials/Testimonials';


const Home = () => {
    return (
        <div>
            <Header />
            <Services></Services>
            <FeaturedService></FeaturedService>
            <Testimonials></Testimonials>
            <TeamMembers></TeamMembers>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;