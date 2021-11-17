import axios from 'axios'
import React, { useState, useContext, useEffect } from 'react'

const table = {
  sports: 21,
  history: 23,
  politics: 24,
}

const API_ENDPOINT = 'https://opentdb.com/api.php?'

const url = ''

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [waiting, setWaiting] = useState(true)
  const [loading, setLoading] = useState(false)
  const [questions, setQuestions] = useState([])
  const [quiz, setQuiz] = useState({
    amount: 5,
    category: 'sports',
    difficulty: 'easy',
  })
  const [correct, setCorrect] = useState(0)
  const [isopenModal, setIsOpenModal] = useState(false)
  const [index, setIndex] = useState(0)
  const [error, setError] = useState(false)

  const fetchQuestions = async (url) => {
    setLoading(true)
    setWaiting(false)
    try {
      const response = await axios.get(url)
      console.log(response)
      const data = response.data.results
      if (data.length > 0) {
        setQuestions(data)
        setLoading(false)
        setWaiting(false)
        setError(false)
      } else {
        setWaiting(true)
        setError(true)
      }
    } catch (error) {
      console.error(error)
      setWaiting(true)
    }
  }

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setQuiz({ ...quiz, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    let { amount, category, difficulty } = quiz
    fetchQuestions(
      `${API_ENDPOINT}amount=${amount}&category=${table[category]}&difficulty=${difficulty}&type=multiple`
    )
  }

  const nextQuestion = () => {
    setIndex((oldIndex) => {
      const newIndex = oldIndex + 1
      if (newIndex > questions.length - 1) {
        openModal()
        return 0
      } else {
        return newIndex
      }
    })
  }

  const checkAnswer = (value) => {
    if (value) {
      setCorrect((oldCorrect) => oldCorrect + 1)
    }
    nextQuestion()
  }

  const openModal = () => {
    setIsOpenModal(true)
  }

  const closeModal = () => {
    setWaiting(true)
    setCorrect(0)
    setIsOpenModal(false)
  }
  return (
    <AppContext.Provider
      value={{
        waiting,
        loading,
        questions,
        quiz,
        index,
        isopenModal,
        correct,
        error,
        handleSubmit,
        handleChange,
        checkAnswer,
        nextQuestion,
        closeModal,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
