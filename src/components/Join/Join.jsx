import React, {useRef} from 'react';
import './join.css';
import emailjs from '@emailjs/browser';

const Join = () => {
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_9epu2x5', 'template_uk8q9vx', form.current, 'TENbOPY-80SvdtT2l')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          form.current.reset();
      };
    const form = useRef()
  return (
    <div className="join">
        <div className="left-j">
            <hr />
            <div>
                <span className='stroke-text'>READY TO</span>
                <span>LEVEL UP</span>
            </div>
            <div>
                <span>YOUR BODY</span>
                <span className='stroke-text'>WITH US?</span>
            </div>
        </div>
        <div className="right-j">
            <form ref={form} className="email-container" onSubmit={sendEmail}>
                <input type="email" name='user_email' placeholder='Enter your email address' />
                <button className="btn btn-j">Join Now</button>
            </form>
        </div>
    </div>
  )
}

export default Join