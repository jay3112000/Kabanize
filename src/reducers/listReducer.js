import { CONSTANTS } from "../actions";
let listid=2
let cardid=4
const initialState=[
    {
        title: "on-Hold",
        id: 0,
        cards:[
            {
                id:0,
                text:'first card created'
            },
            {
                id:1,
                text:'second card created',
            }
        ]
    },
    {
        title: "working",
        id: 1,
        cards:[
            {
                id:0,
                text:'first card created'
            },
            {
                id:1,
                text:'second card created',
            }
        ]
    }
]
const listsReducer = (state = initialState, action) => {
    switch (action.type) {
      case CONSTANTS.ADD_LIST:
          const newList={
              title: action.payload,
              cards:[],
              id: listid,

          }
          listid+=1
          return [...state,newList];
        case CONSTANTS.ADD_CARD:
           const newcard={
               text:action.payload.text,
               id:cardid,
           };
           cardid+=1;
        const newstate=state.map(list=>{
            if(list.id===action.payload.listid){
                return{
                    ...list,
                    cards:[...list.cards, newcard]
                }
            }
            else{
                return list
            }
        });
        return newstate;
      default: return state;
      }
    };
export default listsReducer;