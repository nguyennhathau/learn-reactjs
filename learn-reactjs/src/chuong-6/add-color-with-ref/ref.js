import React from 'react'
import PropTypes from 'prop-types'

class AddColorForm extends React.Component {
  constructor(props) {
    super(props)
    this.title = React.createRef()
    this.color = React.createRef()
    this.handleSubmit = this.handleSubmit.bind(this)
    // this.handleChange = this.handleChange.bind(this)
  }

  // state = {
  //   value: '',
  // }

  handleSubmit(e) {
    e.preventDefault()

    this.props.onNewColor(this.title.current.value, this.color.current.value)

    this.title.current.value = ''
    this.color.current.value = '#000000'
    this.title.current.focus()
  }

  // handleChange(e) {
  //   e.preventDefault()
  //   this.setState({ value: e.target.value })
  // }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            // onChange={this.handleChange}
            // value={this.state.value}
            ref={this.title}
            required
          />
          <input
            type='color'
            // value={this.state.value}
            // onChange={this.handleChange}
            ref={this.color}
            required
          />
          <button>Add</button>
        </form>
      </>
    )
  }
}

AddColorForm.propTypes = {
  onNewColor: PropTypes.func,
}
AddColorForm.defaultProps = {
  onNewColor: (f) => f,
}

export default AddColorForm
