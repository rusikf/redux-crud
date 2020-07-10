import { RECEIVE_BOOKS, REQUEST_BOOKS, REMOVE_BOOK } from './actionTypes'
import history from "../utils/history"
import axios from 'axios'
export const requestBooks = () => ({
  type: REQUEST_BOOKS
})

export const receiveBooks = (json) => ({
  type: RECEIVE_BOOKS,
  payload: json
})

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id: id
})

export function fetchBooks() {
  return function action(dispatch) {
    return axios.get('http://localhost:4000/books')
      .then(response => response.data)
      .then(json => dispatch(receiveBooks(json)))
  }
}

export function createBook(book) {
  return function action(dispatch) {
    return axios.post('http://localhost:4000/books', { book })
      .then(response => response.data)
      .then(json => history.push('/'))
  }
}

export function deleteBook(id) {
  return function action(dispatch) {
    return axios.delete('http://localhost:4000/books/' + id)
      .then(json => dispatch(removeBook(id)))
  }
}
