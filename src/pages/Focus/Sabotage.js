import React from 'react';
import { Link } from "react-router-dom";
import './Focus.css';


function Sabotage() {

    return(
        <div className="main-content">
             <div className="row center-select">
                <div className="col-md-6">
                    <div className="center app app-img">
                        <img src="./images/sabotage.png" id="app-cover"/>
                    </div>
                </div>
                <div className="col-md-6">
                     
                    <div className="back-home">
                        <Link to="/">
                            HOME
                        </Link>
                    </div>

                    <div className="side-name app app-name">
                        Sabotage
                    </div>

                    <div className="made-with">
                        <p>Made with: <span className="langs">ReactJS, NodeJS, Express, MongoDB/Mongoose, JavaScript ES6, HTML5, CSS3</span></p>
                        <p>Support packages: <span className="langs">Pusher, Passport, Material-UI, Moment</span></p>
                    </div>


                    <div className="side app app-text">
                        <p>SABOTAGE is a React web game that penalizes users for wasting time on it.</p><br/>
                        <p>All screen time is deducted from your score from the moment you log in.</p>
                        <p>Win points back by playing the solving the puzzle.</p>
                        <p>Spin the bonus wheel for a surprise.</p>
                        <p>Compare your scores with friends on the leaderboard in real-time.</p><br/>
                        
                        <br/><br/>
                        <a href="https://sabotage-game.herokuapp.com/" target="_blank" className="app-link">> click here try out the app</a>
                         
                    </div>
                </div>
            </div>
        </div>
                    
                
                
            
    )
}


export default Sabotage;




