import React from 'react'
import Books from './books/index'
import EditBook from './books/edit'

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
          <EditBook mode='add'/>
        </Route>

        <Route path='/books/:id/edit' render={
          (props) => <EditBook {...props} mode='edit' />
        }>
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

