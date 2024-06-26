import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3qoiror', 'template_8tkfl1p', form.current, 'nG4i5NUvtLKmX819T').then(() => {console.log('SUCCESS')}, (error) => {console.log('FAILED...', error.text)})
    e.target.reset()
    // emailjs.sendForm('contact_service', 'contact_form', form.current, 'nG4i5NUvtLKmX819T').then(() => {console.log('SUCCESS')}, (error) => {console.log('FAILED...', error.text)})
    // e.target.reset()
  };
  return (   
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <div className='contact__option'>
            <MdOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>osmonalievnurlan97@gmail.com</h5>
            <a href="mailto:osmonalievnurlan97@gmail.com" target="_blank">Send a message</a>
          </div>
          <div className='contact__option'>
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Нурлан Осмоналиев</h5>
            {/* <a href="https://m.me/profile.php?id=100004814117510" target="_blank">Send a message</a> */}
            <a href="https://m.me/profile.php?id=100004814117510" target="_blank">Send a message</a>
          </div>
          <div className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+996707255203</h5>
            {/* <a href="https://api.whatsapp.com/send?phone=+996707255203" target="_blank">Send a message</a> */}
            <a href="https://api.whatsapp.com/send?phone=+996707255203&text=Добрый+день!+Мы+ознакомились+с+вашим+портфолио+и+хотели+бы обсудить+возможное+сотрудничество.
" target="_blank">Send a message</a>
          </div>
        </div>

        {/* END OF CONTACT OPTIONS */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your full name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send a Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact