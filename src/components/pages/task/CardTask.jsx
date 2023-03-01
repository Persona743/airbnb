import React from 'react';

export default function CardTask() {
    return (
        <div className="card--task">
            <img
                src="/assets/images/Rectangle 77.png"
                className="task--image"
            />
            <div className="task--context">
                <img
                    src="assets/images/location-pin.png"
                    className="task--location"
                />
                <span className="country--name">JAPAN</span>
                <span className="google--task">View on Google Maps</span>
                <h1 className="task--card--title">Mount Fuji</h1>
                <span className="task--date">12 Jan, 2021 -&nbsp;</span>
                <span className="task--date">24 Jan, 2021</span>
                <p className="task--paragraph">
                    Mount Fuji is the tallest mountain in Japan, standing at
                    3,776 meters (12,380 feet). Mount Fuji is the single most
                    popular tourist site in Japan, for both Japanese and foreign
                    tourists.
                </p>
            </div>
        </div>
    );
}
