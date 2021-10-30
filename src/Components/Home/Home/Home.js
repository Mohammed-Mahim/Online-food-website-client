import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Offering from '../Offering/Offering';
import Review from '../Review/Review';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Offering></Offering>
            <Review></Review>
            <Contact/>
        </div>
    );
};

export default Home;