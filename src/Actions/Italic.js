import React, { Component } from 'react';
import { TouchableOpacity, Image } from 'react-native'
import { EditorProxy } from '../Editor'

export default class Italic extends Component {
  state = {
    active: false
  }

  componentDidMount() {
    EditorProxy.current.addListener(this.editorEvent.bind(this))
  }

  render() {
    return (
      <TouchableOpacity
        style={[
          {height: 50, width: 50, justifyContent: 'center'},
          this.state.active ? {backgroundColor: 'red'} : {}
        ]}
        onPress={this.onPress.bind(this)}
      >
        <Image source={require('../../img/icon_format_italic.png')} />
      </TouchableOpacity>
    )
  }

  editorEvent(payload) {
    if (payload.event == 'editor-change') {
      this.triggerUpdate()
    }
  }

  triggerUpdate() {
    EditorProxy.current.getFormat().then((data) => {
      if (data.italic) {
        this.setState({
          active: true
        })
      } else {
        this.setState({
          active: false
        })
      }
    })
  }

  onPress() {
    EditorProxy.current.trigger('format', 'italic', !this.state.active)

    this.triggerUpdate()
  }
}