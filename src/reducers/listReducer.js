import { CONSTANTS } from "../actions";
let listid=2
let cardid=6
const initialState=[
    {
        title: "Hold",
        id: `list-${0}`,
        cards:[
            {
                id:`card-${0}`,
                text:'Example Card'
            },
           
        ]
    },
    {
        title: "Working",
        id: `list-${1}`,
        cards:[
           
        ]
    },
    {
        title: "Completed",
        id: `list-${2}`,
        cards:[
           
           
        ]
    },
]
const listsReducer = (state = initialState, action) => {
    switch (action.type) {
      case CONSTANTS.ADD_LIST:
          const newList={
              title: action.payload,
              cards:[],
              id: `list-${listid}`,

          }
          listid+=1
          return [...state,newList];
        case CONSTANTS.ADD_CARD:
           {const newcard={
               text:action.payload.text,
               id:`card-${cardid}`,
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
      
    }

      case CONSTANTS.DRAG_HAPPENED:
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexEnd,
        droppableIndexStart,
        draggableId,
        type
        
      } = action.payload;
      const newState=[...initialState];

      if (type==='list'){
          const list= newState.splice(droppableIndexStart,1);
          newState.splice(droppableIndexEnd,0,...list);
          return newState;

      }
      // in the same list
      const newstate=[...state]
      if (droppableIdStart === droppableIdEnd) {
        const list = state.find(list=>droppableIdStart===list.id);
        const card = list.cards.splice(droppableIndexStart, 1);
        list.cards.splice(droppableIndexEnd, 0, ...card);
        
      }

      if (droppableIdStart !== droppableIdEnd) {
        // find the list where the drag happened
        const listStart = state.find(list=>droppableIdStart===list.id);
        // pull out the card from this list
        const card = listStart.cards.splice(droppableIndexStart, 1);
        // find the list where the drag ended
        const listEnd = state.find(list=>droppableIdEnd===list.id);

        // put the card in the new list
        listEnd.cards.splice(droppableIndexEnd, 0, ...card);
        
      }
      return newstate;


      default: return state;
      }
    };
export default listsReducer;