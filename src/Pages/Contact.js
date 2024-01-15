import React, {useRef, useState} from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  const [alert, setAlert] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setAlert('Sending...');
    emailjs.sendForm('service_1gh5lg9', 'template_phfazqh', form.current, 'y437V_fKICDfAy1cY')
      .then(() => {
        setAlert("Email sent, check your inbox for confirmation!");
      }, () => {
        setAlert("Something went wrong, please try again.");
      });
  };

  return (
    <main className='contact page'>
      <form className='contact-form' ref={form} onSubmit={sendEmail}>
        <h1 className='form-title'>Contact me!</h1>
        <div className='note'>Please don't hesitate to send me a message, I'd be happy to answer any questions or just connect to exchange support! You can also reach me through linkedin, if that's easier.</div>
        <label className='field'>Name
          <input className='input' name='name' placeholder='Jane Doe' type='text' autoFocus required autoComplete='name'/>
        </label>
        <label className='field'>Email
          <input className='input' name='email' placeholder='example@email.com' type='email' required autoComplete='email'/>
        </label>
        <label className='field'>Your message
          <textarea className='text input' name='message' placeholder='Type your message...' rows={5} cols={30} required/>
        </label>
        <div className='bottom'>
          <span className='response'>{alert}</span>
          <button type='submit' >Send email</button>
        </div>
      </form>
    </main>
  );
}

export default Contact;
