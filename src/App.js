import './App.css';
import Lists from './components/Lists';
import { connect } from "react-redux";
import React,{Component} from "react";
import AddButton from './components/AddButton';
import {DragDropContext} from 'react-beautiful-dnd';
import { sort } from './actions';
import { Droppable, Draggable } from "react-beautiful-dnd";

class App extends Component {

  onDragEnd = result => {
    const { destination, source, draggableId,type } = result;

    if (!destination) {
      return;
    }

    this.props.dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId,
        type
      )
    );
  };
  render(){
    const {lists}=this.props;
    return (
      <div>
       <img className='home_image' src='https://images.unsplash.com/photo-1461696114087-397271a7aedc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'  alt='logo'/>
     
      <DragDropContext
       onDragEnd={this.onDragEnd}
      >
        <Droppable droppableId='all' direction='horizontal' type='list'>
        
          {provided=>(
              <div 
              {...provided.droppableProps}
              ref={provided.innerRef}
              className='list-container' >
              {
                lists.map((list,index)=>(
                      <Lists 
                      listid={list.id}
                      title={list.title}
                        cards={list.cards}
                        key={list.id}
                        index={index}
                      />  
                ))
              }
              <AddButton list/>
            </div>
          )}
        </Droppable>
      
      </DragDropContext>
      </div>
    );
    
  }
  }
const mapStateToProps=state =>({
   lists:state.lists
});

export default connect (mapStateToProps)(App);
