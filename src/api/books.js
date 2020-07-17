import axios from 'axios'

export default {
  index(params={}) {
    return axios.get('http://localhost:4000/books', { params })
      .then(response => response.data)
  },
  create(book) {
    return axios.post('http://localhost:4000/books', { book })
      .then(response => response.data)
  },
  update(id, { title }) {
    return axios.patch('http://localhost:4000/books/' + id, { title })
      .then(response => response.data)
  },
  read(id) {
    return axios.get('http://localhost:4000/books/' + id)
      .then(response => response.data)
  },
  delete(id) {
    return axios.delete('http://localhost:4000/books/' + id)
  }
}

