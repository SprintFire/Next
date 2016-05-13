import React, { Component } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import {Actions} from 'react-native-router-flux'
import Button from 'react-native-button'

import { addTodo } from '../actions/todoActions'

import { connect } from 'react-redux'

export default class Add extends Component {

  constructor() {
    super();
    this.state = {
      text: ''
    };

    this.addTodo = this.addTodo.bind(this);
  }

  addTodo() {
    this.props.dispatch(addTodo(this.state.text))
    this.setState({
      text: ''
    })
    Actions.home()
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
        <Button onPress={this.addTodo} > Add </Button>
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


export default connect()(Add)
