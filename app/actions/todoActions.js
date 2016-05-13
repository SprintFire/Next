import { ADD_TODO, TOGGLE_COMPLETED } from './actionTypes'

export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    todo: {
      id: Date.now(),
      text: todo,
      completed: false
    }
  }
}

export const toggleCompleted = (todoId) => {
  return {
    type: TOGGLE_COMPLETED,
    todoId,
  }

}
