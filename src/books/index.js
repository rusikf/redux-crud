import React from 'react'
import Book from './book'
import { connect } from 'react-redux'
import { fetchBooks } from '../redux/actions'
import { Link } from 'react-router-dom'

class Books extends React.Component {
  componentDidMount() {
    this.props.fetchBooks()
  }

  render() {
    const books = this.props.books.map((book) =>
      <Book key={book.id} book={book} />
    )
    return(
      <>
        <Link className='btn btn-primary my-4' to='/add-book'>Add book</Link>
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
  books: state.books
})

export default connect(mapStateToProps, { fetchBooks })(Books)

