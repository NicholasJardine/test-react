import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Redirect, Switch }
from 'react-router-dom'
import PropTypes from 'prop-types'
import App from '../components/app'


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(

    <Router>
      <Switch>
        <Route path="/" component={App}/>
      </Switch>
    </Router>,
    document.body.appendChild(document.createElement('div')),
  )
})
