import React, { Component } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import {Actions} from 'react-native-router-flux'
import Button from 'react-native-button'

export default class Add extends Component {

  constructor() {
    super();
    this.state = {
      text: ''
    };

    this.addTodo = this.addTodo.bind(this);
  }

  addTodo() {
    // add todo
  }

  render() {
    return (
      <View style={styles.container} >
        <Text > Add View </Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1, backgroundColor: 'white'}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <Button
          onPress={this.addTodo}
        >
          Add
        </Button>
        <Button
          containerStyle={{padding:10, height:45, overflow:'hidden', borderRadius:4, backgroundColor: 'white'}}
          style={{fontSize: 12, color: 'green'}}
          onPress={Actions.home}
        >
          Go To Home
        </Button>
        <Button
          containerStyle={{padding:10, height:45, overflow:'hidden', borderRadius:4, backgroundColor: 'white'}}
          style={{fontSize: 20, color: 'green'}}
          onPress={Actions.done}
        >
          Go To Done
        </Button>
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
