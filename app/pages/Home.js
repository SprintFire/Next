import React, { Component } from 'react'
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Actions } from 'react-native-router-flux'

import TodoListContainer from '../containers/TodoListContainer'
import TaskNavbar from '../components/TaskNavbar'

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container} >
        <StatusBar barStyle="light-content" />
        <TaskNavbar style={{flex: 1}} openTask={{color: 'white'}}/>
        <TodoListContainer style={{flex: 12}}/>
        <View style={{flex: 2}}>
          <TouchableOpacity onPress={() => Actions.addTodo() }>
            <Text style={{color: "white", fontWeight: 'bold'}}>Add Todo</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4699E3"
  }
})
