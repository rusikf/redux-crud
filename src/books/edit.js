import React from 'react'
import { connect } from 'react-redux'
import { createBook, updateBook } from '../redux/actions'
import PropTypes from 'prop-types'
import BooksApi from '../api/books'

class EditBook extends React.Component {
  componentDidMount() {
    const id = this.paramId()
    if (this.isEditMode()) {
      BooksApi.read(id).then(json => {
        this.setState({ input: json.title })
      })
    }
  }

  constructor(props) {
    super(props)

    this.state = {
      input: ''
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ input: e.currentTarget.value })
  }

  onSubmit(e) {
    e.preventDefault()
    if (this.isEditMode()) {
      return this.props.updateBook(this.paramId(), { title: this.state.input })
    }

    this.props.createBook({ title: this.state.input })
  }

  isEditMode() {
    return !!(this.props.mode === 'edit')
  }

  paramId() {
    return this.isEditMode() ? this.props.match.params.id : undefined
  }

  render() {
    return(
      <>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="titleInput">Title</label>
            <input type="book" value={this.state.input} onChange={this.onChange} className="form-control" id="titleInput" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </>
    )
  }
}

EditBook.propTypes = {
  mode: PropTypes.string
}

export default connect(null, { createBook, updateBook })(EditBook)
