import React, { Component } from 'react'
import {Scene, Router, TabBar, Modal, Schema, Actions, Reducer} from 'react-native-router-flux'

import Home from './pages/Home'
import Done from './pages/Done'
import Add from './pages/Add'

export default class AppRouter extends Component {
  render() {
    return (
      <Router>
        <Scene key="modal" component={Modal} >
          <Scene key="root" hideNavBar={true} >
            <Scene key="addTodo" direction="vertical" >
              <Scene key="add" component={Add} schema="modal" hideNavBar={true}/>
            </Scene>
            <Scene key="home" component={Home}initial={true} duration={0} />
            <Scene key="done" component={Done} duration={0} />

          </Scene>
        </Scene>
      </Router>
    )
  }
}
