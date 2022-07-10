import {
  ADD_TODO,
  CLEAR_COMPLETED,
  COMPLETE_ALL_TODOS,
  COMPLETE_TODO,
  DELETE_TODO,
  EDIT_TODO
} from '../constants/ActionTypes'

// either use stub todos or an empty list
const initialState = ((window as any).Cypress && (window as any).initialState) || [];

export default function todos (state = initialState, action: any) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: state.reduce((maxId: any, todo: any) => Math.max(todo.id, maxId), -1) + 1,
          completed: false,
          text: action.text
        }
      ];

    case DELETE_TODO:
      return state.filter((todo: any) => todo.id !== action.id);

    case EDIT_TODO:
      return state.map(
        (todo: any) => todo.id === action.id ? { ...todo, text: action.text } : todo
      );

    case COMPLETE_TODO:
      return state.map(
        (todo: any) => todo.id === action.id
            ? { ...todo, completed: !todo.completed }
            : todo
      );

    case COMPLETE_ALL_TODOS:
      const areAllMarked = state.every((todo: any) => todo.completed)
      return state.map((todo: any) => ({
        ...todo,
        completed: !areAllMarked
      }));

    case CLEAR_COMPLETED:
      return state.filter((todo: any) => todo.completed === false);

    default:
      return state
  }
}
