import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import '../components/Cards.css'
import DeleteIcon from '@material-ui/icons/Delete';
const Cards=(props)=> {
   
    
    return (
        <Draggable  draggableId={String(props.id)} index={props.index}>
            {provided=>(
                <div
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}
                >
                    <div
                    className='container'>
                    <h2>
                        {props.text}
                    </h2>
                   
                    </div>

                </div>
                    

            )}
             
        </Draggable>
        
    )
}

export default Cards
