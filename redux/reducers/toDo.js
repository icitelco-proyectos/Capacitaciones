//TYPES
const ADD_TODO_ITEM = "ADD_TODO_ITEM";
const EDIT_TODO_ITEM = "EDIT_TODO_ITEM";

//INITIAL STATE
const initialState = {
  toDoList: [],
};

//REDUCERS
export default function (state = initialState, action) {
  const { type, payload } = action;
  
  switch (type) {
    case ADD_TODO_ITEM:
      return { ...state, toDoList: [...state.toDoList,payload] };

	case EDIT_TODO_ITEM:
		return { ...state, toDoList: [...state.toDoList.filter(todo=>todo!==payload.toDoEdit),payload.toDo] };
  

    default:
      return state; 
  }
}
