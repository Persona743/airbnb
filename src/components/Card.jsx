import React from 'react';
import card1 from '../assets/images/swimmer.png';
import starImage from '../assets/images/Star 1.png';

export default function Card() {
    return (
        <div className="card">
            <img src={card1} className="card--image" />
            <div className="card--context">
                <img src={starImage} className="card--star" />
                <span>5.0 </span>
                <span className="gray">(6) . </span>
                <span className="gray">USA</span>
            </div>
            <p>Life lessons with Katie Zaferes</p>
            <p>
                <span className="bold">From $136</span> / person
            </p>
        </div>
    );
}
