import React from 'react';
import { Link } from "react-router-dom";
import './Contact.css';


function Contact() {

    return(
        <div className="main-content">
             <div class="row center-select">
                <div class="col-md-6">
                    <div class="center moodi moodi-img">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Salto_del_Angel-Canaima-Venezuela08.JPG" id="moodi-cover"/>
                    </div>
                </div>
                <div class="col-md-6">

                    <div className="back-home">
                        <Link to="/">
                            HOME
                        </Link>
                    </div>
                     
                    <div class="side-name moodi moodi-name">
                        Contact
                    </div>

                    <div className="made-with">
                        <p>for all personal/professional inquiries</p>
                        <p>send me a message via the form below</p>
                    </div>

                    <div class="side moodi moodi-text">
                        <form>
                            <label>your name</label><br/>
                            <input type="text" name="name" placeholder="Elon Musk"/><br/>
                            <label>subject</label><br/>
                            <input type="text" name="subject" placeholder="We're hiring!"/><br/>
                            <label>message</label><br/>
                            <textarea type="text" name="content" placeholder="SpaceX needs a new website. Are you in??"/><br/>
                            <button type="submit" id="contact-submit">send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
                    
                
                
            
    )
}


export default Contact;




