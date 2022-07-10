import * as types from '../constants/ActionTypes'

export const addTodo = (text: any) => ({
  type: types.ADD_TODO,
  text
})
export const deleteTodo = (id: any) => ({
  type: types.DELETE_TODO,
  id
})
// @ts-expect-error TS(7006): Parameter 'id' implicitly has an 'any' type.
export const editTodo = (id, text) => ({
  type: types.EDIT_TODO,
  id,
  text
})
export const completeTodo = (id: any) => ({
  type: types.COMPLETE_TODO,
  id
})
export const completeAllTodos = () => ({ type: types.COMPLETE_ALL_TODOS })
export const clearCompleted = () => ({ type: types.CLEAR_COMPLETED })
export const setVisibilityFilter = (filter: any) => ({
  type: types.SET_VISIBILITY_FILTER,
  filter
})
