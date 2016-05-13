import { connect } from 'react-redux'
import TodoList from '../components/TodoList'

const mapStateToProps = (state, ownProps) => {
  return {
    todos: state.todos,
    elementStyles: ownProps.style
  }
}

const TodoListContainer = connect(mapStateToProps)(TodoList)
export default TodoListContainer
