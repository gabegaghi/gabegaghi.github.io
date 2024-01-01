import React, {useRef, useState} from 'react';
import './Contact.css';
import emailjs from 'email-js';

function Contact() {
  const form = useRef();
  const [alert, setAlert] = useState(null);

  const sendEmail = (e) => {
   e.preventDefault();
   emailjs.sendForm('service_1gh5lg9', 'template_phfazqh', form.current, 'y437V_fKICDfAy1cY')
     .then(() => {
         setAlert("Your message sent succesfully, check your email for confirmation!");
     }, () => {
         setAlert("Something went wrong, please try again.");
     });
 };

  return (
    <main className='contact page'>
      <form className='contact-form' ref={form}>
        <h1 className='form-title'>Contact me!</h1>
        <div className='note'>Please don't hesitate to send me a message, I'd be happy to answer any questions or just connect to exchange support! You can also reach me through linkedin.</div>
        <label className='field'>Name
          <input className='input' name='name' placeholder='Jane Doe' type='text' autoFocus required autoComplete='name'/>
        </label>
        <label className='field'>Email
          <input className='input' name='email' placeholder='example@email.com' type='email' required autoComplete='email'/>
        </label>
        <label className='field'>Your message
          <textarea className='text input' name='message' placeholder='Type your message...' rows={5} cols={50} required/>
        </label>
        <div className='bottom'>
          <span className='response'>{alert}</span>
          <button type='submit' onSubmit={sendEmail}>Send email</button>
        </div>
      </form>
    </main>
  );
}

export default Contact;