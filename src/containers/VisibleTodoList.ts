// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as TodoActions from '../actions'
// @ts-expect-error TS(6142): Module '../components/TodoList' was resolved to '/... Remove this comment to see the full error message
import TodoList from '../components/TodoList'
import { getVisibleTodos } from '../selectors'

const mapStateToProps = (state: any) => ({
  filteredTodos: getVisibleTodos(state)
})

const mapDispatchToProps = (dispatch: any) => ({
  actions: bindActionCreators(TodoActions, dispatch)
})


const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
