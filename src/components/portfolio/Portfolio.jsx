import React from 'react'
import './portfolio.css'
import FeetHeatSS from "../../assets/FeetHeatSS.png"
import QuoteGenerator from "../../assets/quoteGenerator.png"
import StrangersThings from "../../assets/strangersthings.png"





const data = [

{
  id: 1,
  image: FeetHeatSS,
  title: "Feet Heat",
  description:"E-commerce web application selling luxury sneakers. Users can add, remove and/or purchase items from a persistent cart. (CRUD app with REST API). Authenticated register and login through JWT.",
  role: "While working in a team of 4, took ownership of Front End Styling of pages (UX/UI), individual product pages, registration and sign in pages React Components and CSS| Backend: Responsible for API Routers development.",
  stack: "Javascript, React, CSS, API, Node.JS, Express, PostgreSQL",
  github: 'https://github.com/APxISO/feetHeat',
  demo: 'https://feetheat.onrender.com/'
  
},
{
  id: 2,
  image: StrangersThings,
  title: "Stranger's Things",
  description:"A web app that allows users to browse and post items for sale inspired by the Netflix series 'Stranger Things.' Users can register for an account, and use JWT authentication. Users can also create, edit, and delete listings, view their listings and messages on a dashboard, and message other users.",
  role: "Ownership of entire project including development of React components, styling and calls to third party API.",
  stack: "Javascript, React, CSS, REST API",
  github: 'https://github.com/APxISO/strangers_things',
  demo: 'https://strangersthingsreact.netlify.app/'
  },
{    
  id: 3,
  image: QuoteGenerator,
  title: "Quote Generator",
  description:"A simple quote generator that generates famous quotes via third party API fetch calls. The user also has the ability to share the current quote via a tweet button or generate another quote for additional inspiration.",
  role: "Responsible for entire app (design, functionality, etc.)",
  stack: "Javascript, CSS, REST API",
  github: 'https://github.com/APxISO/quote-generator',
  demo: 'https://apxiso.github.io/quote-generator/'
},
  

]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
    {
      data.map(({id, image, title, description, role, stack, github, demo}) => {
        return (
          <article key={id} className='portfolio__item'>
<div className='portfolio__item-img'>
<img src={image} alt={title}/>

  <h3>{title}</h3>
  <p>{description}</p>
  <p>Role: {role}</p>
  <p>Tech Stack: {stack}</p>
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