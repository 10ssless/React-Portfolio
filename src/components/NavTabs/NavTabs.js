import React from 'react'
import { Link } from "react-router-dom";
// import {Navbar,Nav,NavDropdown} from 'react-bootstrap/Navbar'
import './NavTabs.css'


function NavTabs (props){
    return(
        // <Navbar bg="light" expand="lg">
        //     <Navbar.Collapse id="basic-navbar-nav">
        //         <Nav className="mr-auto">
        //             <NavDropdown title="Projects" id="basic-nav-dropdown">
        //                 <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        //                 <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        //                 <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        //                 <NavDropdown.Divider />
        //                 <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        //             </NavDropdown>
        //             <Nav.Link href="#home">Home</Nav.Link>
        //             <Nav.Link href="#link">Link</Nav.Link>
        //         </Nav>
        //     </Navbar.Collapse>
        // </Navbar>


        <nav class="navbar navbar-expand-sm">
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item dropdown">
                        <span class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Projects
                        </span>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <Link class="dropdown-item" to="/sabotage">Sabotage</Link>
                            <Link class="dropdown-item" to="/keep-it-local">Keep-It-Local</Link>
                            <Link class="dropdown-item" to="/moodi">Moodi</Link>
                        </div>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/about" >About</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/contact" >Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>



       
    )
}

export default NavTabs;


