import { connect } from 'react-redux'
// @ts-expect-error TS(6142) FIXME: Module '../components/Header' was resolved to '/Us... Remove this comment to see the full error message
import Header from '../components/Header'
import { addTodo } from '../actions'

export default connect(null, { addTodo })(Header)
