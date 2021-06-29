import React from 'react'
import Icon from "@material-ui/core/Icon";
import '../components/AddButton.css';
import AddIcon from '@material-ui/icons/Add';
import Cards from './Cards';
import Textarea from "react-textarea-autosize";
import { Close, Widgets } from '@material-ui/icons';
import { connect } from 'react-redux';
import { addlist,addcard } from '../actions';
import Card from '@material-ui/core/Card';
class AddButton extends React.Component{
    state = {
        formOpen: false,
        text: ""
      };
    
      openForm = () => {
        this.setState({
          formOpen: true
        });
      };
    
      closeForm = e => {
        this.setState({
          formOpen: false
        });
      };
    
      handleInputChange = e => {
        this.setState({
          text: e.target.value
        });
      };

      handleAddList = () => {
        const { dispatch } = this.props;
        const { text } = this.state;
    
        if (text) {
          this.setState({
            text: ""
          });
          dispatch(addlist(text));
          console.log('u')
        }
    
        return;
      };

      handleAddCard = () => {
        const { dispatch, listid } = this.props;
        const { text } = this.state;
    
        if (text) {
          this.setState({
            text: ""
          });
          dispatch(addcard(listid, text));
        }
      };






    renderAddButton=()=>{
        const { list }=this.props;
        const buttonText = list ? "Add another list" : "Add another card";
        const buttonTextOpacity = list ? 1 : 0.5;
        const buttonTextColor = list ? "white" : "inherit";
        const buttonTextBackground = list ? "rgba(0,0,0,.15)" : "inherit";
        return(
            <div className='button_style' onClick={this.openForm}>
                <AddIcon/>
                <p>{buttonText}</p>
                
            </div>
        );


    }

    renderForm=()=>{
        const { list } = this.props;
        const placeholder= list?'Enter List Title':'Enter a Title for this Card'
        return(
            <div>
                <Card>
                <Textarea
                
                placeholder={placeholder}
                autoFocus={true}
                value={this.state.text}
                onChange={this.handleInputChange}
                
                style={
                    {
                        resize:"none",
                        width:"100%",
                        outline:"none",
                        border:"none",
                        overflow:"hidden"
                    }
                }
              />
                </Card>
                
                <div className='add-cross'>
                <button className='add'
                  onClick={list? this.handleAddList:this.handleAddCard}
                >
                 ADD
               </button>
                 <Close/>
                </div>
            
                  

                   
                
            </div>
        )
    }


    render(){
        return  this.state.formOpen?this.renderForm():this.renderAddButton();
    }
}
export default connect() (AddButton);