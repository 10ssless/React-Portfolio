import React from 'react'
import { Link } from "react-router-dom";


function Card(props){

    return(      
        <Link to={"/"+props.title}>
            <div className="center-card" id={`center-${props.id}`}>
                {props.title}<span className="tag">{props.tag}</span>
            </div>
        </Link>
    )
}

export default Card;