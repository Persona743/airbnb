import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="task--nav">
            <img src="/assets/images/Fill 213.png" className="task--logo" />
            <h5 className="task--title">my travel journal.</h5>
            <Link to="/" className="task--btn">
                Home
            </Link>
        </nav>
    );
}
