import React from 'react';

export default function Card(props) {
    console.log(props);
    return (
        <div className="card">
            <img src={`/assets/images/${props.img}`} className="card--image" />
            <div className="card--context">
                <img src="/assets/images/Star 1.png" className="card--star" />
                <span>{props.rating}&nbsp;</span>
                <span className="gray">({props.reviewCount}) .&nbsp;</span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price">
                <span className="bold">From ${props.price}</span> / person
            </p>
        </div>
    );
}
