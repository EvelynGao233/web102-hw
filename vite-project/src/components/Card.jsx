import React from "react";
import "../components/Card.css";

const Card = (props) => {
    return (
        <div className="card-container">
            <img src={props.img} alt="Image not found" className="card-img" />
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <button className="card-button">
                <a href={props.url} style={{ textDecoration: 'none', color: 'inherit' }}>Learn More</a>
            </button>
        </div>
    )
}

export default Card;



