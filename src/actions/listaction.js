import { CONSTANTS } from ".";


export const addlist=title=>{
    return{
        type: CONSTANTS.ADD_LIST,
        payload: title
    };

};