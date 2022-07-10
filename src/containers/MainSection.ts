// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { connect } from 'react-redux'
import * as TodoActions from '../actions'
import { bindActionCreators } from 'redux'
// @ts-expect-error TS(6142): Module '../components/MainSection' was resolved to... Remove this comment to see the full error message
import MainSection from '../components/MainSection'
import { getCompletedTodoCount } from '../selectors'


const mapStateToProps = (state: any) => ({
  todosCount: state.todos.length,
  completedCount: getCompletedTodoCount(state)
})


const mapDispatchToProps = (dispatch: any) => ({
  actions: bindActionCreators(TodoActions, dispatch)
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainSection)

