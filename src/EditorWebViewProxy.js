import React, { Component } from 'react';
import { View } from 'react-native'
import {WebView} from 'react-native-webview'

export default class EditorWebViewProxy extends Component {
  state = {
    listeners: [],
    messages: {}
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <WebView
          ref={(webView) => this.webView = webView}
          useWebKit={true}
          scrollEnabled={false}
          hideKeyboardAccessoryView={true}
          keyboardDisplayRequiresUserAction={false}
          onMessage = {this.onMessage.bind(this)}
          originWhitelist={["*"]}
          dataDetectorTypes={'none'}
          domStorageEnabled={false}
          bounces={false}
          javaScriptEnabled={true}
          source={
            require('../web/editor.html')
          }
          // onLoad={() => this.init()}
        />
      </View>
    )
  }

  trigger(method, ...args) {
    let messageId = Math.random().toString(36).substr(2, 9)

    let payload = JSON.stringify({
      messageId,
      method,
      args
    })

    promise = new Promise((resolve, reject) => {
      let messages = this.state.messages

      messages[messageId] = {resolve, reject}

      this.setState({
        messages
      })
    })

    this.webView.postMessage(payload)

    return promise
  }

  addListener(handler) {
      let listeners = this.state.listeners
      listeners.push(handler)

      this.setState({
          listeners
      })
  }

  onMessage(event) {
    const message = JSON.parse(event.nativeEvent.data)

    if (message.type == 'response' && this.state.messages[message.messageId] !== undefined) {
      let {resolve, reject} = this.state.messages[message.messageId]

      resolve(message.payload)
    }

    this.state.listeners.map((handler) => {
        handler(message)
    })
  }

  hasFocus() {
    return this.trigger('hasFocus')
  }

  getContents() {
    return this.trigger('getContents')
  }

  getLength() {
    return this.trigger('getLength')
  }

  getText() {
    return this.trigger('getText')
  }

  getBounds() {
    return this.trigger('getBounds')
  }

  getSelection() {
    return this.trigger('getSelection')
  }

  getLeaf() {
    return this.trigger('getLeaf')
  }

  getLine() {
    return this.trigger('getLine')
  }

  getLines() {
    return this.trigger('getLines')
  }

  getFormat() {
    return this.trigger('getFormat')
  }
}