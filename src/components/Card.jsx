import React from 'react';

export default function Card(props) {
    return (
        <div className="card">
            <img
                src="../../assets/images/swimmer.png"
                className="card--image"
            />
            <div className="card--context">
                <img
                    src="../../assets/images/Star 1.png"
                    className="card--star"
                />
                <span>5.0&nbsp;</span>
                <span className="gray">(6) .&nbsp;</span>
                <span className="gray">USA</span>
            </div>
            <p>Life lessons with Katie Zaferes</p>
            <p>
                <span className="bold">From $136</span> / person
            </p>
        </div>
    );
}
