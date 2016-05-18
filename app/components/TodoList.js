import React, { Component } from 'react'
import { ScrollView, StyleSheet } from 'react-native'

import Todo from './Todo'

export default class TodoList extends Component {
  render() {
    return (
      <ScrollView style={[styles.container, this.props.style]} contentContainerStyle={styles.contentContainer} >
        {this._todoArray()}
      </ScrollView>
    )
  }

  _todoArray() {
    let todosArray = this.props.todos.map((t) => (
      <Todo key={t.id} todoId={t.id} toggleCompleted={this.props.toggleCompleted}>
        {t.text}
      </Todo>
    ))
    return todosArray
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'stretch'
  },
  contentContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center'
  }
})
