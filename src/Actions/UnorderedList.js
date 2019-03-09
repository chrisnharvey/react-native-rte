import React, { Component } from 'react';
import { TouchableOpacity, Image } from 'react-native'
import { EditorWebView } from '../Editor'

export default class UnorderedList extends Component {
  render() {
    return (
      <TouchableOpacity
        style={[
          {height: 50, width: 50, justifyContent: 'center'},
        ]}
        onPress={this.onPress.bind(this)}
      >
        <Image source={require('../../img/icon_format_ul.png')} />
      </TouchableOpacity>
    )
  }

  formatChanged() {

  }

  onPress() {
    alert('unordered list pressed')
  }
}