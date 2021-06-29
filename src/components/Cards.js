import React from 'react'
import '../components/Cards.css'
const Cards=(props)=> {
    return (
        <div className='container'>
            <h2>
                {props.text}
            </h2>
        </div>
    )
}

export default Cards
