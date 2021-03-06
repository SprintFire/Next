import React, { Component } from 'react'
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Actions } from 'react-native-router-flux'

import TodoListContainer from '../containers/TodoListContainer'
import TaskNavbar from '../components/TaskNavbar'


export default class Done extends Component {

  render() {
    return (
      <View style={styles.container} >
        <StatusBar barStyle="light-content" />
        <TaskNavbar style={{flex: 1}} pastTask={{color: 'white'}}/>
        <TodoListContainer style={{flex: 12}} completedTodos={true} />
        <View style={{flex: 2}}>
          <TouchableOpacity onPress={() => Actions.add() }>
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
