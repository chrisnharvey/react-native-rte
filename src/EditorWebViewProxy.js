import React, { Component } from 'react';
import { View } from 'react-native'
import {WebView} from 'react-native-webview'

export default class EditorWebViewProxy extends Component {
  state = {
    listeners: []
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
    let payload = JSON.stringify({
      method,
      args
    })

    this.webView.postMessage(payload)
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

    this.state.listeners.map((handler) => {
        handler(message)
    })
  }
}