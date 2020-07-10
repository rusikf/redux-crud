import axios from 'axios'

export default {
  index() {
    return axios.get('http://localhost:4000/books')
      .then(response => response.data)
  },
  create(book) {
    return axios.post('http://localhost:4000/books', { book })
      .then(response => response.data)
  },
  delete(id) {
    return axios.delete('http://localhost:4000/books/' + id)
  }
}

