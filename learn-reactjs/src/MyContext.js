import React from 'react'
import data from './color-data.json'
// this is the equivalent to the createStore method of Redux
// https://redux.js.org/api/createstore

const ColorsContext = React.createContext({ data })
export default ColorsContext
