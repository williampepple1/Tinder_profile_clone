import React, {useState} from 'react';
import './TinderCards.css';
import TinderCard from 'react-tinder-card';

function TinderCards() {
    const [people] = useState([{
        name: 'Pepple',
        url: "https://pbs.twimg.com/media/Eaz2PMGWsAYamv4?format=jpg&name=medium"
    },
    {
        name: 'Peps',
        url: "https://pbs.twimg.com/media/EIyiGvCXUAA4abD?format=jpg&name=small"
    },
    {
        name: 'William',
        url: "https://pbs.twimg.com/media/EIyiGu-W4AEnpnj?format=jpg&name=medium"
    },

    {
        name: 'Fresh Guy',
        url: "https://pbs.twimg.com/media/EFvlnNJXkAY9CJg?format=jpg&name=900x900"
    },

    {
        name: 'Guy',
        url: "https://scontent-los2-1.xx.fbcdn.net/v/t31.0-8/12045221_914785051929595_2810651009422270765_o.jpg?_nc_cat=111&ccb=2&_nc_sid=e3f864&_nc_eui2=AeHkOkH0AttMSEujcLFEF9VWhgnko-DG6guGCeSj4MbqCyJvM3KDFJrS03p8Tw4Pg8cytxpl4KZP1L_pGHCFk-wS&_nc_ohc=WStDmwUuaigAX8r4Q60&_nc_ht=scontent-los2-1.xx&oh=9148238b245f3429abd413b89305217a&oe=5FD9570C"
    }

    ]);

const swiped = (nameToDelete) => {
    console.log('removing:' + nameToDelete);
   // setLastDirection(direction);
};

const outOfFrame = (name) => {
    console.log(name + "left the screen!")
};



    return (
        <div className="tindercards">
        <div className="tindercards_container">
        {people.map((person) => (
            <TinderCard
            className='swipe'
            key={person.name}
            preventSwipe={['up',"down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
            >
            <div
            style={{backgroundImage: `url(${person.url})`}}
            className='card'>
            <h3>{person.name}</h3>
            </div>
            
            </TinderCard>
        ))} 
        </div>
        
        </div>
    );
};

export default TinderCards
