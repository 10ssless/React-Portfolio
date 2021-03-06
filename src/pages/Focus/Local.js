import React from 'react';
import { Link } from "react-router-dom";
import './Focus.css';


function Local() {

    return(
        <div className="main-content">
             <div className="row center-select">
                <div className="col-md-6">
                    <div className="center app app-img">
                        <a href="https://keep-it-local.herokuapp.com/" target="_blank" className="app-link">
                            <img src="./images/keep-it-local.png" id="app-cover"/>
                        </a>
                    </div>
                </div>
                <div className="col-md-6">

                    <div className="back-home">
                        <Link to="/">
                            HOME
                        </Link>
                    </div>
                     
                    <div class="side-name app app-name">
                        KEEP IT LOCAL®
                    </div>
                    
                    <div className="made-with">
                        <p>Made with: <span className="langs">NodeJS, Express, MySQL/Sequelize, Handlebars, JavaScript, HTML5, CSS3</span></p>
                        <p>Support packages: <span className="langs">Passport, Materialize, Moment, Geocoder</span></p>
                    </div>

                    <div class="side app app-text">
                        <p>KEEP IT LOCAL® is a tool to help people better connect with their local communities.</p>
                        <p>This app is for independent creatives to build scenes and find audiences.</p><br/>

                        <p>Login/sign up to start browsing local, DIY events, message other users, or post your own events.</p>
                        <p>Results are limited to a 30 miles raidus of your current location.</p> 
                        <p>To preserve the culture and trust of the network, you must have a referral code to join. Existing users can generate a new referral code every 3 days.</p>
                        <br/>
                        
                        <div className="test-user">
                            <p>>> test user login info:</p>
                            <p className="test-user-body">user: <span className="langs">test_user</span></p>
                            <p className="test-user-body">pswd: <span className="langs">test_password</span></p>
                        </div>
                        
                        <br/>
                        <div className="links" >
                            <a href="https://keep-it-local.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="app-link">> try out the app &lt;</a>
                            <a href="https://github.com/10ssless/Keep-it-local" target="_blank" rel="noopener noreferrer" className="app-link github-link">> see the code &lt;</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                    
                
                
            
    )
}


export default Local;




