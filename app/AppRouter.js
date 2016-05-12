import React, { Component } from 'react'
import {Actions, Scene, Router, TabBar} from 'react-native-router-flux'

import Home from './pages/Home'
import Done from './pages/Done'
import Add from './pages/Add'

export default class AppRouter extends Component {
  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar={true} >
          <Scene key="home" component={Home} initial={true} />
          <Scene key="done" component={Done} />
          <Scene key="add" component={Add}   />
        </Scene>
      </Router>
    )
  }
}
