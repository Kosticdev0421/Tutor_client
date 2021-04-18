import React, { useEffect, useState } from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Testimonials.css';

// import { default as aliza, default as ema, default as wilson } from '../../../images/wilson.png';
// const testimonialData = [
//     {
//         quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
//         name : 'Wilson Harry',
//         from : 'California',
//         img : wilson
//     },
//     {
//         quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
//         name : 'Ema Gomez',
//         from : 'California',
//         img : ema
//     },
//     {
//         quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
//         name : 'Aliza Farari',
//         from : 'California',
//         img : aliza
//     }
// ]

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/reviews`)
        .then(res => res.json())
        .then(data => setTestimonials(data));
    }, []);
    return (
        <section className="my-5 py-5" id="reviews">
            <h1 className="text-brand text-center mb-5">What Our Students Say</h1>
            <Carousel
                showArrows={true}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                autoPlay={true}
                interval={2000}
            >
                {testimonials && testimonials.map((testimonial) => (
                    <div>
                        <img
                            src={
                                testimonial.img || "https://www.w3schools.com/howto/img_avatar.png"
                            }
                            alt=""
                        />
                        <div className="myCarousel shadow-sm">
                            <h3>{testimonial.name}</h3>
                            <h4>{testimonial.from}</h4>
                            <p className="text-brand">{testimonial.quote}</p>
                        </div>
                    </div>
                ))}
            </Carousel>
        </section>
    );
};

export default Testimonials;