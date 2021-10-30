import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

const getLocalStorage = () => {
  let list = localStorage.getItem('list')
  if (list) {
    return JSON.parse(localStorage.getItem('list'))
  } else {
    return []
  }
}

function App() {
  const [name, setName] = useState('')
  const [list, setList] = useState(getLocalStorage)
  const [isEditing, setIsEditing] = useState(false)
  const [editID, setEditID] = useState(null)
  const [alert, setAlert] = useState({ show: false, type: '', msg: '' })

  const inputBug = (e) => {
    if (!name) {
      showAlert(true, 'danger', 'please enter value')
    } else if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name }
          }
          return item
        })
      )
      setName('')
      setIsEditing(false)
      setEditID(null)
      showAlert(true, 'success', 'value changed')
    } else {
      showAlert(true, 'success', 'item added to the list')
      const newItem = { id: new Date().getTime().toString(), title: name }
      setList([...list, newItem])
      setName('')
    }
    e.preventDefault()
  }

  const inputBtn = (id) => {
    const specificItem = list.find((item) => item.id === id)
    console.log(specificItem)
    setIsEditing(true)
    setEditID(id)
    setName(specificItem.title)
  }
  const deleteBtn = (id) => {
    let newArr = list.filter((item) => item.id !== id)
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

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list)) // truyen len server phai la string
  }, [list])

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
