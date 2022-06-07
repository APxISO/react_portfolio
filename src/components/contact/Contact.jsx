import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_venlqrr', 'template_ucvikpc', form.current, 'URpG-f3tqH_Fh7F-r')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()


    };


  return (
    <section id='contact'>
      <h5>Get In Touch!</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>AMPerez0208@gmail.com</h5>
            <a href='mailto:AMPerez0208@gmail.com' target='_blank'>Send a Message</a>
          </article>

          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Adam Perez</h5>
            <a href='https://m.me/IAmAdamPerez' target='_blank'>Send a Message</a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+123456789</h5>
            <a href='https://api.whatsapp.com/send?phone+19043334729' target='_blank'>Send a Message</a>
          </article>
        </div>

        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required/>
          <input type='emial' name='email' placeholder='Your Email' required/>
          <textarea name='message' rows='7' placeholder='Your Message' required/>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>


      </div>


    </section>
  )
  }

export default Contact