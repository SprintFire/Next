import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Actions} from 'react-native-router-flux'
import Button from 'react-native-button'

import TodoListContainer from '../containers/TodoListContainer'

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container} >
        <Text > Home View </Text>
        <Button
          containerStyle={{padding:10, height:45, overflow:'hidden', borderRadius:4, backgroundColor: 'white'}}
          style={{fontSize: 20, color: 'green'}}
          onPress={Actions.done}
        >
          Go To Done
        </Button>
        <Button
          containerStyle={{padding:10, height:45, overflow:'hidden', borderRadius:4, backgroundColor: 'white'}}
          style={{fontSize: 20, color: 'green'}}
          onPress={Actions.add}
        >
          Go To Add
        </Button>
        <TodoListContainer />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})
