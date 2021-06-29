import React from 'react'
import '../components/Lists.css'
import Cards from './Cards'
import AddButton from './AddButton'
const Lists=(props)=> {
    return (
        <div className='body'>
            <h2>{props.title}</h2>
            {props.cards.map(card=>(
                <Cards text={card.text} key={card.id}/>
            ))}
        <AddButton listid={props.listid}/>
        </div>
    )
}

export default Lists
