import React, { Component } from 'react';
import { View } from 'react-native'
import {WebView} from 'react-native-webview'

export const EditorWebView = React.createRef()

export default class Editor extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <WebView
          useWebKit={true}
          scrollEnabled={false}
          hideKeyboardAccessoryView={true}
          keyboardDisplayRequiresUserAction={false}
          ref={EditorWebView}
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

  onMessage() {

  }
}