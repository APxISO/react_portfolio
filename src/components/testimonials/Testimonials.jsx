import React from 'react'
import './testimonials.css'
import avatar1 from '../../assets/avatar1.jpg'
import avatar2 from '../../assets/avatar2.jpg'
import avatar3 from '../../assets/avatar3.jpg'
import avatar4 from '../../assets/avatar4.jpg'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper";


const data = [

  {
    avatar: avatar1,
    name: 'Dwayne Carter Jr.',
    review: 'Professional, responsive, and able to keep up with ever-changing demand and tight deadlines: Thats how I would describe Adam. When it comes to web development, youll definitely get the 5-star treatment from the Adam!'
  },
  {
    avatar: avatar2,
    name: 'Amala Zandile Dlamini',
    review: 'Adam and his team at OpEx whipped my prehistoric website into shape in no time! I was excited by the results and am proud to direct clients to my website once again.'
  },
  {
    avatar: avatar3,
    name: 'Belcalis Almánzar',
    review: 'Adam has been an integral part of our re-branding success. We have seen a notable increase in organic leads since we began working with him in 2018.'
  },
  {
    avatar: avatar4,
    name: 'Radric Davis',
    review: 'My busy schedule leaves little, if any, time for blogging and social media. Adam has been a huge part of helping me grow my business through organic search and content marketing.”'
  },

]



const Testimonials = () => {
  return (
    <section id='testimonials'>
<h5>Recent Reviews</h5>
<h2>Testimonials</h2>
<Swiper pagination={true} navigation={true} modules={[Pagination, Navigation]} className="container testimonials__container">
  {
data.map(({avatar, name, review}, index) => {
return (
  <SwiperSlide key={index} className='testimonial'>
<div className="client__avatar">
  <img src={avatar} />
  </div>
<h5 className='client__name'>{name}</h5>
  <small className='client__review'>{review}</small>
  </SwiperSlide>
)
})}
</Swiper>
</section>
)
}

export default Testimonials