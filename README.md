# React Native Rich Text Editor

A rich text editor for React Native based on Quill.js.

Compatible with iOS and Android.

## Example

```
import React, { Component } from 'react';
import { SafeAreaView, KeyboardAvoidingView } from 'react-native';
import { RichText, Bold, Italic, OrderedList, UnorderedList, Link, Media } from 'react-native-rte'

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{flex:1, backgroundColor: '#fff'}}>
        <KeyboardAvoidingView style={{flex:1}} behavior={'padding'}>
          <RichText>
            <RichText.Editor />
            <RichText.Toolbar>
              <Bold />
              <Italic />
              <OrderedList />
              <UnorderedList />
              <Link />
              <Media />
            </RichText.Toolbar>
          </RichText>
        </KeyboardAvoidingView>
      </SafeAreaView>
    )
  }
}
```