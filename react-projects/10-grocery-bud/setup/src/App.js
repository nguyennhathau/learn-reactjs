import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [name, setName] = useState('')
  const [list, setList] = useState([])
  const [isEditing, setIsEditing] = useState(false)
  const [editID, setEditID] = useState('')
  const [alert, setAlert] = useState({ show: false, type: '', msg: '' })

  const inputBug = (e) => {
    if (!name) {
      showAlert(true, 'danger', 'please enter value')
    } else if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item === editID) {
            return name
          }
          return item
        })
      )
      setName('')
      setIsEditing(false)
      setEditID('')
      showAlert(true, 'success', 'value changed')
    } else {
      showAlert(true, 'success', 'item added to the list')
      setList([...list, name])
      setName('')
    }
    e.preventDefault()
  }

  const inputBtn = (name) => {
    const specificItem = list.find((item) => item === name)
    setIsEditing(true)
    setEditID(name)
    setName(specificItem)
  }
  const deleteBtn = (bug) => {
    let newArr = list.filter((x) => x !== bug)
    setList(newArr)
    setName('')
    showAlert(true, 'danger', 'item removed')
  }

  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg })
  }

  const deleteAll = () => {
    showAlert(true, 'danger', 'Empty List')
    setList([])
  }

  useEffect(() => {
    let timer = setTimeout(() => {
      setAlert({ ...alert, show: false })
    }, 1000)
    return () => {
      clearTimeout(timer)
    }
  }, [alert])

  return (
    <main>
      <section className=' section section-center'>
        {alert.show && <Alert {...alert} />}
        <div className='grocery-form'>
          <h3>Grocery Bug</h3>
          <form action='#' onSubmit={inputBug} className='form-control'>
            <input
              type='text'
              name='bug'
              value={name}
              onChange={(e) => {
                setName(e.target.value)
              }}
              className='grocery'
            />
            <button type='submit' className='submit-btn'>
              {isEditing ? 'edit' : 'submit'}
            </button>
          </form>
        </div>
        {list.length > 0 && (
          <div className='grocery-container'>
            <List list={list} inputBtn={inputBtn} deleteBtn={deleteBtn} />

            <button className='clear-btn' onClick={deleteAll}>
              Clear Items
            </button>
          </div>
        )}
      </section>
    </main>
  )
}

export default App
