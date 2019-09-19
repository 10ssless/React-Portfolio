import React from 'react'
import { Link } from "react-router-dom";
import './NavTabs.css'


function NavTabs (props){
    return(
        <div className="navbar">
            <Link to="/about">
                <span className="nav-item nav-about">about</span>
            </Link>
            <Link to="/sabotage">
                <span className="nav-item nav-code">games</span>
            </Link>
            <Link to="/keep-it-local">
                <span className="nav-item nav-code">events</span>
            </Link>
            <Link to="/moodi">
                <span className="nav-item nav-code">sounds</span>
            </Link>
            <Link to="/contact">
                <span className="nav-item nav-contact">contact</span>
            </Link>
        </div>
        // <div className="navbar">
        //     <a href="#center-1"><span className="nav-item nav-about">about</span></a>
        //     <a href="#center-2"><span className="nav-item nav-code">code</span></a>
        //     <a href="#center-5"><span className="nav-item nav-art">art</span></a>
        //     <a href="#center-6"><span className="nav-item nav-contact">$$$$</span></a>
        // </div>
        // <div className="navbar">
        //     <button type="button" onClick={props.onClick("about")}><span className="nav-item nav-about">about</span></button>
        //     <button type="button" onClick={props.onClick("sabotage")}><span className="nav-item nav-code">code</span></button>
        //     <button type="button" onClick={props.onClick("art")}><span className="nav-item nav-art">art</span></button>
        //     <button type="button" onClick={props.onClick("contact")}><span className="nav-item nav-contact">$$$$</span></button>
        // </div>
       
    )
}

export default NavTabs;


