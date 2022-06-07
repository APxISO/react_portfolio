import React from 'react'
import './testimonials.css'
import avatar1 from '../../assets/avatar1.png'
import avatar2 from '../../assets/avatar2.png'
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
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat adipisci quam a? In fugit neque atque, ea accusamus maxime expedita architecto error molestiae eveniet dicta quisquam quaerat cupiditate voluptates consequatur!'
  },
  {
    avatar: avatar2,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat adipisci quam a? In fugit neque atque, ea accusamus maxime expedita architecto error molestiae eveniet dicta quisquam quaerat cupiditate voluptates consequatur!'
  },
  {
    avatar: avatar1,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat adipisci quam a? In fugit neque atque, ea accusamus maxime expedita architecto error molestiae eveniet dicta quisquam quaerat cupiditate voluptates consequatur!'
  },
  {
    avatar: avatar2,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat adipisci quam a? In fugit neque atque, ea accusamus maxime expedita architecto error molestiae eveniet dicta quisquam quaerat cupiditate voluptates consequatur!'
  },

]



const Testimonials = () => {
  return (
    <section id='testimonials'>
<h5>Reviews From Clients</h5>
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