import React from 'react'
import { connect } from 'react-redux'
import { deleteBook } from '../redux/actions'
import { Link } from 'react-router-dom'

class Book extends React.Component {


  render() {
    const { book } = this.props
    const id = book.id
    const editLink = `/books/${id}/edit`
    return(
      <tr>
        <th scope="row">{ id }</th>
        <td>{ book.title }</td>
        <td>{ this.shortDate(book.created_at) }</td>
        <td>
          <Link className='mr-2' to={editLink}>Edit</Link>
          <a href="#" onClick={() => this.props.deleteBook(id)}>Remove</a></td>
      </tr>
    )
  }

  shortDate(str) {
    const d = new Date(str)
    const time =  `${d.getHours()}:${d.getMinutes()}`
    return [d.toDateString(), time].join(' ')
  }
}

const mapDispatchToProps = {
  deleteBook
}

export default connect(null, mapDispatchToProps)(Book)

