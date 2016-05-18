import React, { Component } from 'react'
import { AsyncStorage, StyleSheet, Text, View } from 'react-native'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { persistStore, autoRehydrate } from 'redux-persist'

import { addTodo } from './actions/todoActions';
// router
import AppRouter from './AppRouter'
// redux store
import todos from './reducers/todos'
const reducers = combineReducers({
  todos,
})

// set up store
const store = createStore(reducers, undefined, autoRehydrate())
// persist the data with localstorage
persistStore(store, {storage: AsyncStorage})

// store.subscribe(() => {
//   alert(JSON.stringify(store.getState()))
// })

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
