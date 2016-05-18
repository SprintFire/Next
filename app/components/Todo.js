import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Swipeout from 'react-native-swipeout'
import * as Animatable from 'react-native-animatable'



export default class Todo extends Component {

  constructor() {
    super()
    this.state = {
      closedButton: false,
      animation: 'slideInUp'
    }
  }

  render() {

    let { children, toggleCompleted, todoId } = this.props
    let { closedButton, animation } = this.state

    let swipeoutButtons = [
      {
        text: 'Complete',
        backgroundColor: '#FF5555',
        onPress: () => {
          toggleCompleted(todoId)
        }
      }
    ];

    return (
      <Animatable.View animation={animation} duration={300} style={styles.container} >
        <Swipeout right={swipeoutButtons} close={closedButton}>
          <View style={styles.todoContainer}>
            <Text style={styles.text}>{children}</Text>
          </View>
        </Swipeout>
      </Animatable.View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignSelf: 'stretch',
    margin: 5
  },
  todoContainer: {
    alignSelf: 'stretch',
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 20,
    paddingLeft: 20,
    backgroundColor: 'white'
  },
  text: {
    color: '#3B4046',
    fontWeight: 'bold'
  }
})
