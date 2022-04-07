import React from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
// import { browserHistory, Router, Route } from 'react-router'

import { Recipes } from '../react-element/recipe'
import { Rating } from '../rate-star/index'
import { Counter } from '../features/counter/Counter'
import { ColorOganizer } from '../color-oganizer/index'
import { ColorOganizerTwo } from '../chuong-6/color-oganizer2/index'
import { AddColorWithRef } from '../chuong-6/add-color-with-ref/index'
import { AddColorWithUseInput } from '../chuong-6/add-color-with-useInput-hook/index'
import { AddColorUseContext } from '../chuong-6/add-color-use-context/index'
import { AddColorCss } from '../chuong-6/add-color-css/index'
import { AddColorUseRedux } from '../add-color-with-redux/index'
import GitHubUse from '../chuong-8/GitHubUser-Component-With-localStorage'
import HandlingStates from '../chuong-8/Handling-States'

export function Menu() {
  return (
    <div>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/recipes'>Recipes</Link>
            </li>
            <li>
              <Link to='/rating'>Rating</Link>
            </li>
            <li>
              <Link to='/Counter'>Counter</Link>
            </li>
            <li>
              <Link to='/color-oganizer'>color oganizer</Link>
            </li>
            <li>
              <Link to='/color-oganizer2'>color oganizer 2</Link>
            </li>
            <li>
              <Link to='/add-color-with-ref'>Add Color With ref</Link>
            </li>
            <li>
              <Link to='/add-color-with-useInput'>Add Color With UseInput</Link>
            </li>
            <li>
              <Link to='/add-color-with-context'>Add Color Use Context</Link>
            </li>
            <li>
              <Link to='/add-color-css'>Add Color Css</Link>
            </li>
            <li>
              <Link to='/add-color-with-redux'>Add Color use Redux</Link>
            </li>
            <li>
              <Link to='/githubUse'>github Use</Link>
            </li>
            <li>
              <Link to='/HandlingStates'>HandlingStates</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route exact path='/' element={<Home />}>
            {/* <Home /> */}
          </Route>
          <Route path='/recipes' element={<Recipes />}>
            {/* <Recipes /> */}
          </Route>
          <Route path='/rating' element={<Rating />}>
            {/* <Rating /> */}
          </Route>
          <Route path='/Counter' element={<Counter />}>
            {/* <Counter /> */}
          </Route>
          <Route path='/color-oganizer' element={<ColorOganizer />}>
            {/* <ColorOganizer /> */}
          </Route>
          <Route path='/color-oganizer2' element={<ColorOganizerTwo />}>
            {/* <ColorOganizerTwo /> */}
          </Route>
          <Route path='/add-color-with-ref' element={<AddColorWithRef />}>
            {/* <AddColorWithRef /> */}
          </Route>
          <Route
            path='/add-color-with-useInput'
            element={<AddColorWithUseInput />}
          >
            {/* <AddColorWithUseInput /> */}
          </Route>
          <Route
            path='/add-color-with-context'
            element={<AddColorUseContext />}
          >
            {/* <AddColorUseContext /> */}
          </Route>
          <Route path='/add-color-css' element={<AddColorCss />}>
            {/* <AddColorCss /> */}
          </Route>
          <Route path='/add-color-with-redux' element={<AddColorUseRedux />}>
            {/* <AddColorUseRedux /> */}
          </Route>
          <Route
            path='/githubUse'
            element={<GitHubUse login='moonhighway' />}
          ></Route>
          <Route
            path='/HandlingStates'
            element={<HandlingStates login='moonhighway' />}
          >
            {/* <HandlingStates login='moonhighway' /> */}
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

const Home = () => {
  return <div>Hello</div>
}
