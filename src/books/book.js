import React from 'react'
import { connect } from 'react-redux'
import { deleteBook } from '../redux/actions'

class Book extends React.Component {


  render() {
    const { book } = this.props
    const id = book.id

    return(
      <tr>
        <th scope="row">{ id }</th>
        <td>{ book.title }</td>
        <td>{ this.shortDate(book.created_at) }</td>
        <td><a href="#" onClick={() => this.props.deleteBook(id)}>Remove</a></td>
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

