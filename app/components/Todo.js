import React, { Component } from 'react'
import { StyleSheet, Text } from 'react-native'

export default class Todo extends Component {
  render() {
    return (
      <Text style={styles.textBox}>
        {this.props.children}
      </Text>
    )
  }
}

const styles = StyleSheet.create({
  textBox: {
    flex: 1,
    color: 'red'
  }
})
