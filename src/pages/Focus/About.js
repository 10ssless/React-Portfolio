import React from 'react';
import { Link } from "react-router-dom";
import './Focus.css';


class About extends React.Component {

    state = {
        vis:1
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({
                vis:1
            })
        },1000)
    }

    render(){
        return(
            <div className="main-content" >
                <div className="row center-select">
                    <div className="col-md-6">
                        <div className="center app app-img">
                            <img src="./images/portrait.jpeg" id="app-cover"/>
                        </div>
                    </div>

                    <div class="col-md-6">
                        
                        <div className="back-home" >
                            <Link to="/">
                                HOME
                            </Link>
                        </div>

                        <div class="side-name app app-name" >
                            Zubin Mulji
                        </div>

                        <div className="made-with">
                            {/* <p>Based in <span className="langs">New York, NY</span></p> */}
                            <p>Languages: <span className="langs">JavaScript ES6, ReactJS, NodeJS, Express, RESTful APIs, Handlebars.js, MySQL/Sequelize, MongoDB/Mongoose, MVC, ORM, AJAX, JSON, jQuery, HTML5, CSS3</span></p>
                        </div>

                        <div class="side app app-text" >
                            <p>
                                Hey, my name is Zubin. I'm a Full Stack Web Developer with a passion for minimalist design and creative interfaces. 
                            </p><br/>
                            <p>
                                I'm effective at finding performance-optimized solutions and building eye-catching front-end UI.
                            </p><br/>
                            <p>
                                I'm a helpful collaborator, able to tackle complex logical problems, and resourceful when confronting new challenges.
                            </p><br/>
                            <p>
                                In my spare time, I record and produce music for artists and friends.
                            </p><br/>
                        
                        </div>
                    </div>
                </div>
            </div>   
    )}
}


export default About;




