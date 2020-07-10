import React from 'react'
import { connect } from 'react-redux'
import { deleteBook } from '../redux/actions'
class Book extends React.Component {
  render() {
    const id = this.props.book.id
    return(
      <tr>
        <th scope="row">{id}</th>
        <td>{this.props.book.title}</td>
        <td><a href="#" onClick={() => this.props.deleteBook(id)}>Remove</a></td>
      </tr>
    )
  }
}

const mapDispatchToProps = {
  deleteBook
}

export default connect(null, mapDispatchToProps)(Book)

