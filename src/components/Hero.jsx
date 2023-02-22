import React from 'react';
import heroLogo from '../assets/images/Hero.png';

export default function Hero() {
    return (
        <section className="hero">
            <img src={heroLogo} className="hero--image" />
            <h1 className="hero--title">Online Experiences</h1>
            <p className="hero--text">
                Join unique interactive activities led by one-of-a-kind
                hosts—all without leaving home.
            </p>
        </section>
    );
}
