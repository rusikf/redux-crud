import React from 'react'
import {
  Switch,
  Route,
  Link
} from 'react-router-dom';
export default function Routes() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/about">
          <About />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </React.Fragment>
  )
}
function Home() {
  return <b>I am home page</b>;
}

function About() {
  return <i>About</i>;
}

