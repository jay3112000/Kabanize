import React from 'react'
import '../components/Lists.css'
import Cards from './Cards'
import AddButton from './AddButton'
import { Droppable, Draggable } from "react-beautiful-dnd";
const Lists=(props)=> {
    return (
        <Draggable draggableId={String(props.listid)} index={props.index}>
            {
                provided=>(
                       <div {...provided.draggableProps}
                       ref={provided.innerRef}
                       {...provided.draggableProps}
                       className='body'>
     <Droppable droppableId={String(props.listid)} type='card' >
         {provided=>(
              
             <div 
             {...provided.droppableProps}
                       ref={provided.innerRef}
             >
             <h2>{props.title}</h2>
             {props.cards.map((card,index)=>(
                 <Cards text={card.text} key={card.id} id={card.id} index={index}/>
             ))}
             <AddButton listid={props.listid}/>
             {provided.placeholder}
             </div>

         )}
          
     </Droppable>

                       </div>
        

                )
            }
       



        </Draggable>
        
       
    )
}

export default Lists
