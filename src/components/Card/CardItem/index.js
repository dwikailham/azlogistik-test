import React from 'react'
import cardDealer from "../../../assets/IconDealer.png"

export default function CardItem({ text, addCard }) {
    return (
        <>
            <div
                className='card-azlogistik'
                onClick={() =>
                    setTimeout(function () { addCard(); }, 3000)
                }
            >
                <img src={cardDealer} alt="icon" />
                <p>{text}</p>
            </div>
        </>
    )
}
