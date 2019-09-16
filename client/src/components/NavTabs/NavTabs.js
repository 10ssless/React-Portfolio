import React from 'react'
import './NavTabs.css'


function NavTabs (){
    return(
        <div className="navbar">
            <a href="#center-1"><span className="nav-item nav-about">about</span></a>
            <a href="#center-2"><span className="nav-item nav-code">code</span></a>
            <a href="#center-5"><span className="nav-item nav-art">art</span></a>
            <a href="#center-6"><span className="nav-item nav-contact">$$$$</span></a>
        </div>
       
    )
}

export default NavTabs;


