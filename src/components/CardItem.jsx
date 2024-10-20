import React from 'react';
import '../styles/CardItem.css';

const CardItem = ({ title, image, type }) => {
    return (
        <div className={`card-container ${type}`}>
            <div>
                <img src={image} alt={title} className="card-img" />
            </div>
            <div className="card-content">
                <h1>{title}</h1>
                <div className="card-button"></div>
            </div>
        </div>
    )
}

export default CardItem;