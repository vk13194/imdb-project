import React from 'react'
import Movie from './components/Movies'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Movie_details from './components/Movie_details'
const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Movie} />
          <Route exact path="/movie/:id" component={Movie_details} />

        </Switch>
      </Router>
    </>
  )
}

export default App
