import React from 'react';
import { Link } from "react-router-dom";
import './Moodi.css';


function Moodi() {

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
                        Moodi
                    </div>

                    <div className="made-with">
                        <p>Made with: <span className="langs">JavaScript, jQuery, HTML, CSS</span></p>
                        <p>Support packages: <span className="langs">Audio, REST APIs, AJAX</span></p>
                    </div>

                    <div class="side moodi moodi-text">
                        <p>MOODI is a minimalist image and sound-based relaxation application.</p><br/>
                        <p>Click on any name to go to a different sonic environment. Click a second sound to evoke an
                            entirely new space.</p><br/>
                        <p> Explore the possibilities and find easter eggs as you listen and relax.</p><br/>
                        
                        <br/><br/><br/>
                        <a href="https://10ssless.github.io/Project-Moodi/" target="_blank">click here to try out the app</a>
                    </div>
                </div>
            </div>
        </div>
                    
                
                
            
    )
}


export default Moodi;




