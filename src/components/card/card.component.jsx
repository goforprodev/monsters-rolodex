import React from 'react'
import './card.style.css'


export const Card = ({ monster }) => (
    <div className="card-container">
        <img alt="monster" src={`https://robohash.org/${monster.id}?set=set2&size=120x120`}/>
        <h3>{monster.name}</h3>
        <p>{monster.email}</p>
    </div >
)
