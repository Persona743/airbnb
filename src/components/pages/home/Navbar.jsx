import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav>
            <img src="/assets/images/Vector.png" className="nav--logo" />
            <Link to="/task">Task</Link>
        </nav>
    );
}
