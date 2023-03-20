import { useRef, useState } from "react";
import "./Contact.css";
import Phone from "../../Images/phone.png";
import Email from "../../Images/email.png";
import Address from "../../Images/address.png";
import emailjs from 'emailjs-com';
import { useContext } from "react";
import { ThemeContext } from "../../Context";
export default function Contact() {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode;
    const formRef = useRef()
    const [done,setDone] = useState(false)
    function handleSubmit(e){
        e.preventDefault();
        emailjs.sendForm('service_tj7a8cu', 'template_f23nx7s', formRef.current, 'user_6SBnz1c6ZuNsJcpcjNKxo')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
    }
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your projects</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +91 8085632540
            </div>
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />
              yashraj.s2711@gmail.com
            </div>
            <div className="c-info-item">
              <img src={Address} alt="" className="c-icon" />
              A-122 Mp Nagar Zone-2, Bhopal.
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
              <input style={{backgroundColor:darkMode && "#333",color:darkMode && "white"}} type="text" name="user_name" placeholder="Name" />
              <input style={{backgroundColor:darkMode && "#333",color:darkMode && "white"}} type="text" name="user_subject" placeholder="Subject" />
              <input style={{backgroundColor:darkMode && "#333",color:darkMode && "white"}} type="text" name="user_email" placeholder="Email" /> 
              <textarea style={{backgroundColor:darkMode && "#333",color:darkMode && "white"}} name="user_msg" placeholder="Message"  rows="5"></textarea>
              <button>Submit</button>
              {done && "Thank You..."}
          </form>
        </div>
      </div>
    </div>
  );
}
