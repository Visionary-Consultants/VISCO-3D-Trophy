import React from 'react';
import '../styles/CardImg.css';

const CardImg = ({ title, image }) => {
    return (
        <div className={`card-img-container flex `}>
            <img src={image} alt={title} className="card-img-n" />
        </div>
    )
}

export default CardImg;