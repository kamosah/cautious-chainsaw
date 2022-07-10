import * as types from '../constants/ActionTypes'
import * as actions from './index'

describe('todo actions', () => {
  it('addTodo should create ADD_TODO action', () => {
    // @ts-expect-error TS(2551): Property 'toEqual' does not exist on type 'Asserti... Remove this comment to see the full error message
    expect(actions.addTodo('Use Redux')).toEqual({
      type: types.ADD_TODO,
      text: 'Use Redux'
    })
  })

  it('deleteTodo should create DELETE_TODO action', () => {
    // @ts-expect-error TS(2551): Property 'toEqual' does not exist on type 'Asserti... Remove this comment to see the full error message
    expect(actions.deleteTodo(1)).toEqual({
      type: types.DELETE_TODO,
      id: 1
    })
  })

  it('editTodo should create EDIT_TODO action', () => {
    // @ts-expect-error TS(2551): Property 'toEqual' does not exist on type 'Asserti... Remove this comment to see the full error message
    expect(actions.editTodo(1, 'Use Redux everywhere')).toEqual({
      type: types.EDIT_TODO,
      id: 1,
      text: 'Use Redux everywhere'
    })
  })

  it('completeTodo should create COMPLETE_TODO action', () => {
    // @ts-expect-error TS(2551): Property 'toEqual' does not exist on type 'Asserti... Remove this comment to see the full error message
    expect(actions.completeTodo(1)).toEqual({
      type: types.COMPLETE_TODO,
      id: 1
    })
  })

  it('completeAll should create COMPLETE_ALL action', () => {
    // @ts-expect-error TS(2551): Property 'toEqual' does not exist on type 'Asserti... Remove this comment to see the full error message
    expect(actions.completeAllTodos()).toEqual({
      type: types.COMPLETE_ALL_TODOS
    })
  })

  it('clearCompleted should create CLEAR_COMPLETED action', () => {
    // @ts-expect-error TS(2551): Property 'toEqual' does not exist on type 'Asserti... Remove this comment to see the full error message
    expect(actions.clearCompleted()).toEqual({
      type: types.CLEAR_COMPLETED
    })
  })
})
