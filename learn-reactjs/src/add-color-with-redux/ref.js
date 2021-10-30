import React from 'react'
import PropTypes from 'prop-types'
import store from '../app/store'
import { addColorAction } from '../add-color-with-redux/actions'
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

  addColorInto = () => {
    this.props.store.dispatch({
      type: 'ADD-COLOR',
      title: this.title.current.value,
      title: this.color.current.value,
    })
  }

  handleSubmit(e) {
    e.preventDefault()

    // this.props.onNewColor(this.title.current.value, this.color.current.value)
    console.log('add')

    this.props.store.dispatch({
      type: 'ADD-COLOR',
      title: this.title.current.value,
      title: this.color.current.value,
    })
    console.log('ad22d')
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
        <form onSubmit={this.addColorInto}>
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
