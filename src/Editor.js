import React, { Component } from 'react';
import { View } from 'react-native'
import {WebView} from 'react-native-webview'
import EditorWebViewProxy from './EditorWebViewProxy';

export const EditorProxy = React.createRef()

export default class Editor extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <EditorWebViewProxy ref={EditorProxy} />
      </View>
    )
  }
}