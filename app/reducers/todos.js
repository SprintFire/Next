import * as actionTypes from '../actions/actionTypes'

const initialState = [];

const todos = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return state.concat(action.todo)
    case actionTypes.TOGGLE_COMPLETED:
      return state.map((todo) => {
        return (action.todoId === todo.id) ? Object.assign({}, todo, {completed: !todo.completed}) : todo;
      })
    default:
      return state
  }
}

export default todos
