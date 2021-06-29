import { CONSTANTS } from ".";


export const addcard=(listid,text)=>{
    return{
        type: CONSTANTS.ADD_CARD,
        payload: {listid,text}
    };

};