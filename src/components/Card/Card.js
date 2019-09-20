import React from 'react'
import { Link } from "react-router-dom";


function Card(props){

    return(      
        <div className="center-card" id={`center-${props.id}`}>
            <Link to={"/"+props.title}>
                {props.title}<span className="tag">{props.tag}</span>
            </Link>
        </div>
    )
}

export default Card;