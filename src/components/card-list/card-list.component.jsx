import React from 'react'
import './card-list.styles.css'
import { Card } from '../card/card.component'
export const CardList = (props) => {

    return (
        // A very important concept of props is children
        //children is anything passed in between the component opening and closing tags 
        <div className='card-list'>
            {
                props.monsters.map(monster =>
                    <Card key={monster.id} monster={monster} />
                )
            }
        </div >
    )
}