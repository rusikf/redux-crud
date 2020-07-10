import { RECEIVE_BOOKS, REQUEST_BOOKS, REMOVE_BOOK } from './actionTypes'
import history from "../utils/history"
import BooksApi from '../api/books'
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
    BooksApi.index().then(json => dispatch(receiveBooks(json)))
  }
}

export function createBook(book) {
  return function action(dispatch) {
    return BooksApi.create(book).then(json => history.push('/'))
  }
}

export function deleteBook(id) {
  return function action(dispatch) {
    return BooksApi.delete(id).then(json => dispatch(removeBook(id)))
  }
}


