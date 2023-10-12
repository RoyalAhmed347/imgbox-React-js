import React from "react";
import './Card.css'

function Card(deta) {
    return(
        <>
            <div className="card">
                <img className="main_img" src={deta.imdSrc}/>
                <div className="card_info">
                    <h1 className="card_heaing">{deta.name}</h1>
                    <p>{deta.decs}</p>
                </div>
            </div>
        </>
    );
    
}

export default Card;