import React from 'react'
import { useGlobalContext } from './context'

import SetupForm from './SetupForm'
import Loading from './Loading'
import Modal from './Modal'
function App() {
  const {
    waiting,
    correct,
    loading,
    questions,
    index,
    checkAnswer,
    nextQuestion,
  } = useGlobalContext()

  if (waiting) {
    return <SetupForm />
  }
  if (loading) {
    return <Loading />
  }
  console.log('index: ' + index)
  const { question, correct_answer, incorrect_answers } = questions[index]
  const tempIndex = Math.floor(Math.random() * 4)
  let answers = [...incorrect_answers]

  if (tempIndex === 3) {
    answers.push(correct_answer)
  } else {
    answers.push(answers[tempIndex])
    answers[tempIndex] = correct_answer
  }

  return (
    <main>
      <Modal />
      <section className='quiz'>
        <p className='correct-answers'>
          correct answers : {correct}/{index}
        </p>
        <article className='container'>
          <h2 dangerouslySetInnerHTML={{ __html: question }}></h2>
          <div className='btn-container'>
            {answers.map((answer, index) => {
              return (
                <button
                  className='answer-btn'
                  key={index}
                  onClick={() => checkAnswer(correct_answer === answer)}
                  dangerouslySetInnerHTML={{ __html: answer }}
                ></button>
              )
            })}
          </div>
        </article>
        <button className='next-question' onClick={nextQuestion}>
          next question
        </button>
      </section>
    </main>
  )
}
export default App
