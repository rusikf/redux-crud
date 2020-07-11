import { RECEIVE_BOOKS, BOOK_ADDED, REMOVE_BOOK, UPDATE_BOOK } from '../actionTypes'

export default function(state = [], action) {
  switch (action.type) {
    case BOOK_ADDED:
      return [...state, action.payload]
    case RECEIVE_BOOKS:
      return action.payload
    case REMOVE_BOOK:
      const newState = state.filter(val => val.id !== action.id)
      return newState
    case UPDATE_BOOK:
      const { title } = action
      return state.map((item, index) => {
        if (item.id === action.id) {
          return { ...item, title }
        }
        return item
      })
    default:
      return state
  }
}

