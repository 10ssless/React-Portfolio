import React from 'react'

function Card(props){

    return(           
        <div className="center" id={`center-${props.id}`}>
            {props.title} 
        </div>
        // <span class="tag">.app</span>
    )
}

export default Card;