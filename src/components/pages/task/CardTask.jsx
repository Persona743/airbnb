import React from 'react';

export default function CardTask(props) {
    return (
        <div className="card--task">
            <img
                src={`/assets/images/${props.item.imageUrl}`}
                className="task--image"
            />
            <div className="task--context">
                <img
                    src="assets/images/location-pin.png"
                    className="task--location"
                />
                <span className="country--name">{props.item.location}</span>
                <span>
                    <a
                        href={props.item.googleMapsUrl}
                        target="_blank"
                        className="google--task"
                    >
                        View on Google Maps
                    </a>
                </span>
                <h1 className="task--card--title">{props.item.title}</h1>
                <span className="task--date">
                    {props.item.startDate} -&nbsp;
                </span>
                <span className="task--date">{props.item.endDate}</span>
                <p className="task--paragraph">{props.item.description}</p>
            </div>
        </div>
    );
}
