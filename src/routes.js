import React from 'react'
import Books from './books/index'
import AddBook from './books/add'

import {
  Switch,
  Route
} from 'react-router-dom';
export default function Routes() {
  return (
    <>
      <Switch>
        <Route path="/about">
          <About />
        </Route>

        <Route path='/add-book'>
          <AddBook />
        </Route>

        <Route path="/">
          <Books />
        </Route>

      </Switch>
    </>
  )
}
function About() {
  return <i>About</i>;
}

