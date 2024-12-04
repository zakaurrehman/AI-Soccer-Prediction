
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Import Swiper styles - required minimal imports
import 'swiper/css';
import 'swiper/css/pagination';
import '../assets/css/main.css';

// Importing images
import testimonial1 from '../assets/img/testimonials/testimonials-1.jpg';
import testimonial2 from '../assets/img/testimonials/testimonials-2.jpg';
import testimonial3 from '../assets/img/testimonials/testimonials-3.jpg';
import testimonial4 from '../assets/img/testimonials/testimonials-4.jpg';
import testimonial5 from '../assets/img/testimonials/testimonials-5.jpg';

const Testimonials = () => {
  const testimonials = [
    {
      imgSrc: testimonial1,
      name: "Saul Goodman",
      role: "Ceo & Founder",
      quote: "I've been using the Bet of the Day for a few months now, and my profits have skyrocketed! The predictions are spot on."
    },
    {
      imgSrc: testimonial2,
      name: "Sara Wilsson",
      role: "Designer",
      quote: "As someone new to betting, the daily tips have made it easy for me to win consistently. It's a total game-changer!"
    },
    {
      imgSrc: testimonial3,
      name: "Jena Karlis",
      role: "Store Owner",
      quote: "I never thought I'd find a betting tool that actually works. These predictions have taken my betting to the next level!"
    },
    {
      imgSrc: testimonial4,
      name: "Matt Brandon",
      role: "Freelancer",
      quote: "I've tried several betting sites, but the accuracy of these daily predictions is unmatched. I've won more bets than ever!"
    },
    {
      imgSrc: testimonial5,
      name: "John Larson",
      role: "Entrepreneur",
      quote: "The Bet of the Day feature is phenomenal! It's helped me make smart betting decisions and increase my winnings significantly."
    },
  ];

  return (
    <div>   

<div className="container name" data-aos="fade-up">
        <h2 style={{color:'#d00102'}}>Testimonials</h2>
        <p>Don't just take our word for it—hear from our satisfied bettors who've transformed their betting game with our daily predictions. Our Bet of the Day tips are backed by AI and real-time analysis, giving you the edge you need. See what our users are saying!</p>
      </div>


   
    <section id="testimonials" className="testimonials section">
     

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <Swiper
          modules={[Autoplay, Pagination]}
          loop={true}
          speed={600}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false
          }}
          slidesPerView="auto"
          pagination={{
            clickable: true
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 40
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 10
            }
          }}
          className="testimonials-slider swiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-item">
                <img src={testimonial.imgSrc} className="testimonial-img" alt={testimonial.name} />
                <h3>{testimonial.name}</h3>
                <h4>{testimonial.role}</h4>
                <div className="stars">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <p>
                  <i className="bi bi-quote quote-icon-left" style={{color:'#d00102'}}></i>
                  <span>{testimonial.quote}</span>
                  <i className="bi bi-quote quote-icon-right" style={{color:'#d00102'}}></i>
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
    </div>
  );
};

export default Testimonials;
