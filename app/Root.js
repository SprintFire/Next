import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import AppRouter from './AppRouter'

export default class Root extends Component {
  render() {
    return (
      <AppRouter />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
