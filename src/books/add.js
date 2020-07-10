import React from 'react'
import { connect } from 'react-redux'
import { createBook } from '../redux/actions'

class AddBook extends React.Component {
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

export default connect(null, { createBook })(AddBook)
