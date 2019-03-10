import React, { Component } from 'react';
import { TouchableOpacity, Image } from 'react-native'
import { EditorProxy } from '../Editor'

export default class Italic extends Component {
  componentDidMount() {
    EditorProxy.current.addListener(this.editorEvent.bind(this))
  }

  render() {
    return (
      <TouchableOpacity
        style={[
          {height: 50, width: 50, justifyContent: 'center'},
        ]}
        onPress={this.onPress.bind(this)}
      >
        <Image source={require('../../img/icon_format_italic.png')} />
      </TouchableOpacity>
    )
  }

  editorEvent(payload) {
  }

  onPress() {
    EditorProxy.current.trigger('format', 'italic', true)
  }
}