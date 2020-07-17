import { SORT_BOOKS } from '../actionTypes'

export default function(state = { sortField: '' }, action) {
  const { sortField } = action
  if (!sortField) { return state }
  return { ...state, sortField }
}

