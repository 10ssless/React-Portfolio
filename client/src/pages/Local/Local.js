import React from 'react';
import { Link } from "react-router-dom";
import './Local.css';


function Local() {

    return(
        <div className="main-content">
             <div className="row center-select">
                <div className="col-md-6">
                    <div className="center moodi moodi-img">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Salto_del_Angel-Canaima-Venezuela08.JPG" id="moodi-cover"/>
                    </div>
                </div>
                <div className="col-md-6">

                    <div className="back-home">
                        <Link to="/">
                            HOME
                        </Link>
                    </div>
                     
                    <div class="side-name moodi moodi-name">
                        KEEP IT LOCAL®
                    </div>
                    
                    <div className="made-with">
                        <p>Made with: <span className="langs">NodeJS, Express, MySQL/Sequelize, Handlebars</span></p>
                        <p>Support packages: <span className="langs">Passport, Materialize, Moment, Geocoder</span></p>
                    </div>

                    <div class="side moodi moodi-text">
                        <p>KEEP IT LOCAL® is a tool to help people better connect with their local communities.</p>
                        <p>This app is for independent creatives to build scenes and find audiences.</p><br/>

                        <p>Login/sign up to start browsing local, DIY events, message other users, or post your own events.</p>
                        <p>Results are limited to a 30 miles raidus of your current location.</p> 
                        <p>To preserve the culture and trust of the network, you must have a referral code to join. Existing can users can generate a new referral code every 3 days.</p><br/>
                        
                        <br/><br/>
                        <a href="https://keep-it-local.herokuapp.com/" target="_blank">click here try out the app</a>
                        <br/><br/>
                    </div>
                </div>
            </div>
        </div>
                    
                
                
            
    )
}


export default Local;




