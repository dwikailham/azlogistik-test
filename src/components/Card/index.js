import React, { useState } from 'react'
import './style.css'
import CardItem from './CardItem';

export default function Card() {

    const [card, setCard] = useState([{
        text: "Dealership & Workshop"
    }]);
    console.log(card)

    function addCard(event) {
        setCard([...card,
        {
            text: "Dealership & Workshop"
        }
        ])
    }
    return (
        <div className='container'>
            <div className='card-list'>
                {card.map((el, i) =>
                (<CardItem
                    card={card}
                    key={i}
                    text={el.text}
                    addCard={addCard}
                />)
                )}
            </div>
        </div>
    )
}
