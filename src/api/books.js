import axios from 'axios'
axios.defaults.baseURL = process.env.REACT_APP_API_HOST;

export default {
  index(params={}) {
    return axios.get('/books', { params })
      .then(response => response.data)
  },
  create(book) {
    return axios.post('/books', { book })
      .then(response => response.data)
  },
  update(id, { title }) {
    return axios.patch('/books/' + id, { title })
      .then(response => response.data)
  },
  read(id) {
    return axios.get('/books/' + id)
      .then(response => response.data)
  },
  delete(id) {
    return axios.delete('/books/' + id)
  }
}

