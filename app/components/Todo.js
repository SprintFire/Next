import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import Swipeout from 'react-native-swipeout'

import { toggleCompleted } from '../actions/todoActions'

class Todo extends Component {

  constructor() {
    super()
    this.state = {
      closedButton: false
    }
  }

  render() {

    let swipeoutButtons = [
      {
        text: 'Complete',
        backgroundColor: '#FF5555',
        onPress: () => {
          this.props.dispatch(toggleCompleted(this.props.todoId))
        }
      }
    ];


    return (
      <View style={styles.container}>
        <Swipeout right={swipeoutButtons} close={this.state.closedButton}>
          <View style={styles.todoContainer}>
            <Text style={styles.text}>{this.props.children}</Text>
          </View>
        </Swipeout>
      </View>
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

export default connect()(Todo)
