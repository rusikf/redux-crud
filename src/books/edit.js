import React from 'react'
import { connect } from 'react-redux'
import { createBook } from '../redux/actions'
import PropTypes from 'prop-types'

class EditBook extends React.Component {
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
    this.props.createBook({ title: this.state.input })
  }

  paramId() {
    return this.props.match ? this.props.match.params.id : undefined
  }

  render() {
    return(
      <>
        { this.props.mode }
        { this.paramId() }
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

export default connect(null, { createBook })(EditBook)
