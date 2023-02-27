import React from 'react';
import Card from './Card';
import Hero from './Hero';
import Navbar from './Navbar';
import data from '../../../../data';

export default function HomePage() {
    const cards = data.map((item) => {
        return <Card key={item.id} item={item} />;
    });
    return (
        <div>
            <Navbar />
            <Hero />
            <section className="card--list">{cards}</section>
        </div>
    );
}
