import React, { useEffect, useState } from 'react';
import Testimonial from '../Testimonial/Testimonial';

const Testimonials = () => {
    const [testimonialData, setTestimonialData] = useState([]);
    const api = "https://powerful-waters-62812.herokuapp.com/reviews";
    useEffect(() => {
        fetch(api)
            .then(res => res.json())
            .then(data => setTestimonialData(data));
    }, [])
    
    return (
        <section className="testimonials my-5 py-5">
            <div className="container">
                <div className="section-header">
                    <h5 className="text-uppercase">Testimonial</h5>
                    <h1>What Our customers <br /> Says </h1>
                </div>
                <div className="row card-deck mt-5">
                    {
                        testimonialData.map(testimonial => <Testimonial testimonial={testimonial} key={testimonial.name} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonials;