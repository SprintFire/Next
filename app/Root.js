import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import { addTodo } from './actions/todoActions';

// router
import AppRouter from './AppRouter'

// redux store
import todos from './reducers/todos'
const reducers = combineReducers({
  todos,
})
const store = createStore(reducers)

store.subscribe(() => {
  console.log(store.getState())
})

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppRouter />
      </Provider>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
