import React from 'react'
import PropTypes from 'prop-types'

const AddColorForm = ({
  onNewColor,
  titleProps,
  resetTitle,
  colorProps,
  resetColor,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault()

    onNewColor(titleProps.value, colorProps.value)

    resetTitle()
    resetColor()
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input {...titleProps} type='text' required />
        <input {...colorProps} type='color' required />
        <button>Add</button>
      </form>
    </>
  )
}

AddColorForm.propTypes = {
  onNewColor: PropTypes.func,
}
AddColorForm.defaultProps = {
  onNewColor: (f) => f,
}

export default AddColorForm
