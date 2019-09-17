import React from 'react';
import { Link } from "react-router-dom";
import './Sabotage.css';


function Sabotage() {

    return(
        <div className="main-content">
             <div class="row center-select">
                <div class="col-md-6">
                    <div class="center moodi moodi-img">
                        <img src="https://previews.123rf.com/images/radistmorze/radistmorze1702/radistmorze170200007/71468024-vector-seamless-pattern-with-letters-of-the-alphabet-in-random-order.jpg" id="moodi-cover"/>
                    </div>
                </div>
                <div class="col-md-6">
                     
                    <div className="back-home">
                        <Link to="/">
                            HOME
                        </Link>
                    </div>

                    <div class="side-name moodi moodi-name">
                        Sabotage
                    </div>

                    <div className="made-with">
                        <p>Made with: <span className="langs">ReactJS, NodeJS, Express, MongoDB/Mongoose</span></p>
                        <p>Support packages: <span className="langs">Pusher, Passport, Material-UI, Moment</span></p>
                    </div>


                    <div class="side moodi moodi-text">
                        <p>SABOTAGE is a React web game that penalizes users for wasting time on it.</p><br/>
                        <p>All screen time is deducted from your score from the moment you log in.</p>
                        <p>Win points back by playing the game.</p>
                        <p>Spin the bonus wheel for a surprise.</p>
                        <p>Compare your scores with friends on the leaderboard in real-time.</p><br/>
                        
                        <br/><br/>
                        <a href="https://10ssless.github.io/Project-Moodi/" target="_blank">click here try out the app</a>
                         
                    </div>
                </div>
            </div>
        </div>
                    
                
                
            
    )
}


export default Sabotage;




