import React from "react";

function Card(props) {
    return <div className="card">
        <div className="card-image"><h1>{props.character}</h1></div>
        <div className="card-details"><h3>{props.unicodeName}</h3></div>
    
    
    </div>;
}

export default Card;