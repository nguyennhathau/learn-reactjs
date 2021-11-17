import React from 'react'
import { useGlobalContext } from './context'

const Modal = () => {
  const { correct, questions, closeModal, isopenModal } = useGlobalContext()
  return (
    <div
      className={`${
        isopenModal ? 'modal-container isOpen' : 'modal-container'
      }`}
    >
      <div className='modal-content'>
        <h2>modal component</h2>
        <p>
          you answered {(correct / questions.length) * 100}% of questions
          correctly
        </p>
        <button className='close-btn' onClick={closeModal}>
          Play Again
        </button>
      </div>
    </div>
  )
}

export default Modal
