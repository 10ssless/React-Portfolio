import React from 'react';
import { Link } from "react-router-dom";
import './Focus.css';


function Moodi() {

    return(
        <div className="main-content">
             <div class="row center-select">
                <div class="col-md-6">
                    <div class="center app app-img">
                        <a href="https://10ssless.github.io/Project-Moodi/" target="_blank" className="app-link">
                            <img src="./images/moodi.png" id="app-cover" />
                        </a>
                    </div>
                </div>
                <div class="col-md-6">

                    <div className="back-home">
                        <Link to="/">
                            HOME
                        </Link>
                    </div>
                     
                    <div class="side-name app app-name">
                        Moodi
                    </div>

                    <div className="made-with">
                        <p>Made with: <span className="langs">JavaScript, jQuery, HTML, CSS</span></p>
                        <p>Support packages: <span className="langs">Audio, REST APIs, AJAX</span></p>
                    </div>

                    <div class="side app app-text">
                        <p>MOODI is a minimalist image and sound-based relaxation application.</p><br/>
                        <p>Click on any descriptive tag to go to a new sonic environment. Click a second tag to evoke an
                            entirely different space.</p><br/>
                        <p> Explore the possibilities and find easter eggs as you listen and relax.</p><br/>
                        
                        <br/><br/>
                        <a href="https://10ssless.github.io/Project-Moodi/" target="_blank" className="app-link">> click here to try out the app</a>
                    </div>
                </div>
            </div>
        </div>
                    
                
                
            
    )
}


export default Moodi;




