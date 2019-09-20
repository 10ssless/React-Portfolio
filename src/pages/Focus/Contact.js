import React from 'react';
import { Link } from "react-router-dom";
import './Focus.css';


function Contact() {

    return(
        <div className="main-content">
             <div class="row center-select">
                <div class="col-md-6">
                    <div class="center app app-img">
                        <img src="./images/mark_dorf.jpg" id="app-cover"/>
                    </div>
                </div>
                <div class="col-md-6">

                    <div className="back-home">
                        <Link to="/">
                            HOME
                        </Link>
                    </div>
                     
                    <div class="side-name app app-name">
                        Contact
                    </div>

                    <div className="made-with">
                        <p>for all personal/professional inquiries...</p> 
                    </div>

                    <div class="side app app-text">
                        <br/><br/><br/><br/>
                        {/* <br/><br/><br/><br/> */}
                        <p className="app-link">> Email: <a href="mailto:znmulji1@gmail.com"><span className="langs">znmulji1@gmail.com</span></a></p>
                        <p className="app-link">> GitHub: <a href="https://github.com/10ssless/" target="_blank"><span className="langs">https://github.com/10ssless/</span></a></p>
                        <p className="app-link">> LinkedIn: <a href="https://www.linkedin.com/in/zubin-mulji" target="_blank"><span className="langs">https://www.linkedin.com/in/zubin-mulji</span></a></p>

                    </div>
                </div>
            </div>
        </div>
                    
                
                
            
    )
}


export default Contact;




