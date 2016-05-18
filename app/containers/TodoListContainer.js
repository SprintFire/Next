import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import { toggleCompleted } from '../actions/todoActions'

// get only completed todos
const _completedTodos = (todos) => {
  let completedTodos = [];

  completedTodos = todos.filter((todo) => {
    return todo.completed;
  });

  return completedTodos;
}

// get only todos that are still active
const _activeTodos = (todos) => {
  let activeTodos = [];

  activeTodos = todos.filter((todo) => {
    return !todo.completed
  });

  return activeTodos;
}

const mapStateToProps = (state, ownProps) => {
  return {
    todos: (ownProps.completedTodos) ? _completedTodos(state.todos) : _activeTodos(state.todos),
    elementStyles: ownProps.style
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ toggleCompleted }, dispatch)
}

const TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList)
export default TodoListContainer
