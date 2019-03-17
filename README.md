# React Native Rich Text Editor

A rich text editor for React Native based on Quill.js.

Compatible with iOS and Android.

## Installation

Install React Native Rich Text Editor using npm:

```
npm install react-native-rte --save
```

Link react-native-webview:

```
react-native link react-native-webview
```

## Example

```jsx
import React, { Component } from 'react';
import { SafeAreaView, KeyboardAvoidingView } from 'react-native';
import { RichText, Bold, Italic, OrderedList, UnorderedList, Link, Media } from 'react-native-rte'

export default class App extends Component {

  addLink(editor) {
    // Logic for opening a modal for URL entry here.....

    editor.trigger('format', 'link', 'https://example.com')
  }

  selectMedia(editor) {
    // Logic for opening an image selector here

    editor.getSelection().then(function(payload) {
      // Base64 Data
      editor.trigger('insertEmbed', payload ? payload.index : 0, 'image', 'data:image/jpeg;base64,BASE64DATA')

      // Or an image URL
      editor.trigger('insertEmbed', payload ? payload.index : 0, 'image', 'http://example.com/image.jpg')
    })
  }

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
              <Link onPress=(this.addLink.bind(this)} />
              <Media onPress={this.selectMedia.bind(this)} />
            </RichText.Toolbar>
          </RichText>
        </KeyboardAvoidingView>
      </SafeAreaView>
    )
  }
}
```
