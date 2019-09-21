import React from 'react';
import { Link } from "react-router-dom";
import './Focus.css';


function Focus(props) {

    return(
        <div className="main-content">
             <div className="row center-select">
                <div className="col-md-6">
                    <div className="center app app-img">
                        <a href={props.link} target="_blank" className="app-link">                        
                            <img src={props.img} id="app-cover"/>
                        </a>
                    </div>
                </div>
                <div className="col-md-6">
                     
                    <div className="back-home">
                        <Link to="/">
                            HOME
                        </Link>
                    </div>

                    <div className="side-name app app-name">
                        {props.title}
                    </div>

                    <div className="made-with">
                        {props.made}
                    </div>

                    <div className="side app app-text">
                        {props.text}
                    </div>
                </div>
            </div>
        </div>
                    
                
                
            
    )
}


export default Focus;




