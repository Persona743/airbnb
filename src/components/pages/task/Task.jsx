import React from 'react';
import NavbarTask from './NavbarTask';
import CardTask from './CardTask';
import dataTask from '../../../../dataTask';

export default function Task() {
    const cardsTask = dataTask.map((item) => {
        return <CardTask key={item.id} item={item} />;
    });
    return (
        <div>
            <NavbarTask />
            {cardsTask}
        </div>
    );
}
