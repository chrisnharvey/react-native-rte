import React, { Component } from 'react';
import { View } from 'react-native'

import Toolbar from './Toolbar'
import Editor from './Editor'

export default class RichText extends Component {
  static Toolbar = Toolbar;
  static Editor = Editor;

  render() {
    return (
      <View style={{flex: 1}}>
        {this.props.children}
      </View>
    )
  }
}