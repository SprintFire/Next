import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {Actions} from 'react-native-router-flux'

export default class TaskNavbar extends Component {
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <TouchableOpacity onPress={this._goOpenTasks}>
          <Text style={[styles.text, this.props.openTask]} > Open Tasks </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._goPastTasks}>
          <Text style={[styles.text, this.props.pastTask]} > Past Tasks </Text>
        </TouchableOpacity>
      </View>
    )
  }

  _goOpenTasks() {
    Actions.home()
  }

  _goPastTasks() {
    Actions.done();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  text: {
    color: '#A9D6F3',
    fontWeight: 'bold'
  }
})
