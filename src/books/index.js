import React from 'react'
import Book from './book'
import { connect } from 'react-redux'
import { fetchBooks, sortBooks } from '../redux/actions'
import { Link } from 'react-router-dom'

class Books extends React.Component {
  constructor(props) {
    super(props)
    this.handleInput = this.handleInput.bind(this)
  }

  componentDidMount() {
    this.props.fetchBooks()
  }

  handleInput(e) {
    const value = e.target.value
    this.props.fetchBooks({ sort: value })
    this.props.sortBooks(value)
  }

  render() {
    const books = this.props.books.map((book) =>
      <Book key={book.id} book={book} />
    )
    return(
      <>
        <div className='row'>
          <div className='col-2'>
            <Link className='btn btn-primary my-4' to='/add-book'>Add book</Link>
          </div>
          <div className='col-2 offset-8 align-self-center'>
            <select name='sortField' value={this.props.sortField} onChange={ this.handleInput } className='form-control'>
              <option value='' disabled>Sort by</option>
              <option value='created_at'>Created</option>
              <option value='title'>Title</option>
            </select>
          </div>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Created</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            { books }
          </tbody>
        </table>
      </>
    )
  }
}

const mapStateToProps = state => ({
  books: state.books,
  sortField: state.booksFilters.sortField
})

export default connect(mapStateToProps, { fetchBooks, sortBooks })(Books)

