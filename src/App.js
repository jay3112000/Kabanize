import './App.css';
import Lists from './components/Lists';
import { connect } from "react-redux";
import React,{Component} from "react";
import AddButton from './components/AddButton';
class App extends Component {
  render(){
    const {lists}=this.props;
    return (
      <div className='list-container' >
        {
          lists.map(list=>(
                <Lists 
                listid={list.id}
                title={list.title}
                  cards={list.cards}
                  key={list.id}
                />  
          ))
        }
        <AddButton list/>
      </div>

    );
  }
  }
const mapStateToProps=state =>({
   lists:state.lists
});

export default connect (mapStateToProps)(App);
