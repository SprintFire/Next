import React, { Component } from 'react'
import {Actions, Scene, Router, TabBar, Modal} from 'react-native-router-flux'

import Home from './pages/Home'
import Done from './pages/Done'
import Add from './pages/Add'

export default class AppRouter extends Component {
  render() {
    return (
      <Router>
        <Scene key="modal" component={Modal} >
          <Scene key="root" hideNavBar={true} >
            <Scene key="home" component={Home} duration={0} />
            <Scene key="done" component={Done} duration={0} />
            <Scene key="add" component={Add} initial={true} direction="vertical" duration={100} />
          </Scene>
        </Scene>
      </Router>
    )
  }
}
