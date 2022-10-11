import React from 'react'
import './portfolio.css'
import FeetHeatSS from "../../assets/FeetHeatSS.png"




const data = [

{
id: 1,
image: FeetHeatSS,
title: "Feet Heat",
github: '',
demo: 'https://feet-heat.herokuapp.com/'
},
{
  id: 2,
  image: 'https://img.freepik.com/free-vector/neon-style-coming-soon-glowing-background-design_1017-25516.jpg?w=2000',
  title: "FitnessTrac.kr ",
  github: '',
  demo: ''
  },
  {
    id: 3,
    image: 'https://img.freepik.com/free-vector/neon-style-coming-soon-glowing-background-design_1017-25516.jpg?w=2000',
    title: "Stranger's Things (Craig's List Clone)",
    github: '',
    demo: ''
  },
  

]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
    {
      data.map(({id, image, title, github, demo}) => {
        return (
          <article key={id} className='portfolio__item'>
<div className='portfolio__item-img'>
<img src={image} alt={title}/>

  <h3>{title}</h3>
 <div className='portfolio__item-cta'>
 <a href={github} className='btn' target='_blank'>Github</a>
  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
 </div>
</div>
    </article>
)})}
</div>
</section>
)
}

export default Portfolio