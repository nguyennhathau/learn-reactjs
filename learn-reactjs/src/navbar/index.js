import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
// import { browserHistory, Router, Route } from 'react-router'
import { Recipes } from '../react-element/recipe'
import { Rating } from '../rate-star/index'
import { Counter } from '../features/counter/Counter'
import { ColorOganizer } from '../color-oganizer/index'
import { ColorOganizerTwo } from '../chuong-6/color-oganizer2/index'
import { AddColorWithRef } from '../chuong-6/add-color-with-ref/index'
import { AddColorWithUseInput } from '../chuong-6/add-color-with-useInput-hook/index'

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
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/recipes'>
            <Recipes />
          </Route>
          <Route path='/rating'>
            <Rating />
          </Route>
          <Route path='/Counter'>
            <Counter />
          </Route>
          <Route path='/color-oganizer'>
            <ColorOganizer />
          </Route>
          <Route path='/color-oganizer2'>
            <ColorOganizerTwo />
          </Route>
          <Route path='/add-color-with-ref'>
            <AddColorWithRef />
          </Route>
          <Route path='/add-color-with-useInput'>
            <AddColorWithUseInput />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

const Home = () => {
  return <div>Hello</div>
}
