import React from 'react';
import { Link } from "react-router-dom";
import './Focus.css';


function About() {

    return(
        <div className="main-content">
            <div className="row center-select">
                <div className="col-md-6">
                    <div className="center app app-img">
                        <img src="./images/linkedin.jpg" id="app-cover"/>
                    </div>
                </div>

                <div class="col-md-6">
                    
                    <div className="back-home">
                        <Link to="/">
                            HOME
                        </Link>
                    </div>

                    <div class="side-name app app-name">
                        Zubin Mulji
                    </div>

                    <div className="made-with">
                        <p><span className="langs">New York, NY</span></p>
                    </div>

                    <div class="side app app-text">
                        <p>
                            Hey, my name is Zubin. I'm a Full Stack Web Developer with a passion for minimalist design and creative interfaces. 
                        </p><br/>
                        <p>
                            I'm effective at finding performance-optimized solutions and building eye-catching fron-end UI.
                        </p><br/>
                        <p>
                            I'm a helpful collaborator, able to tackle complex logical problems, and resourceful when confronting new challenges.
                        </p><br/>
                        <p>
                            In my spare time, I record and produce music for artists and friends.
                        </p><br/>
                        

                        {/* <p>My name is Zubin Mulji and I have had a strange and exciting journey to becoming a 
                            programmer. I started out at New York University-Stern
                            School of Business studying math and finance. Pretty soon I had found out about another program at NYU,
                            the Clive Davis
                            Institute of Recorded Music. At the time, I was an electronic music producer and DJ on the side, and was
                            presented with an opportunity
                            to pursue my passion in a concrete way. So by winter break, I was working on my audition material, and
                            by the end of
                            the year was accepted as a new transfer student into the program.
                        </p>
                            
                        <p>While working towards a BFA in Music Production, I also picked up a minor in Web Programming and
                            Applications at NYU to
                            find an outlet for my more technical interests. After graduating, I worked as a recording engineer in
                            New York City music studios, working with singers, rappers, instrumentalists, etc. While the trade is
                            more creative
                            than technical, it taught me how to learn new skills quickly and how to work under pressure to meet a
                            client's
                            needs. 
                        </p>
                            
                        <p>While the problem-solving element of my work was fun, I found myself missing the intellectual stimulation
                            that I got in my
                            calculus and coding classes. So I took a step back from my music work to focus my energy on becoming a
                            skilled programmer,
                            with hopes of writing new and innovative applications to find solutions for creatives and executives in
                            music, entertainment,
                            and beyond.
                        </p> */}
                    
                    </div>
                </div>
            </div>
        </div>
                    
                
                
            
    )
}


export default About;




