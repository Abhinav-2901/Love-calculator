import React, { Component } from 'react'
import './App.css'
import {Switch, Route} from 'react-router-dom'
import Result from './Result'
import Lovehome from './Lovehome'
import Calculate from './Calculate'




export default class App extends Component {

  render() {
    return (
      <Switch>
        <Route exact path='/' component={Lovehome} />
        <Route path ='/calculate' component={Calculate} />
        <Route path='/result' component={Result} />

      </Switch>
 
    )
  }
}