import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

import Todo from './Todo'

export default class TodoList extends Component {
  render() {
    return (
      <View style={styles.container}>
        {this._todoArray(this.props.todos)}
      </View>
    )
  }

  _todoArray(todos) {


    let todosArray = todos.map((t) => (
      <Todo key={t.id} >
        {t.text}
      </Todo>
    ))
    console.log(todosArray)
    return todosArray
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
