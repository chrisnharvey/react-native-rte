import React, {Component} from 'react';
import {FlatList, Image, StyleSheet, TouchableOpacity, View} from 'react-native';

export default class Toolbar extends Component {
  render() {
    return this.props.hidden ? null : (
      <View
          style={[{height: 50, backgroundColor: '#D3D3D3', alignItems: 'center'}, this.props.style]}
      >
        <FlatList
            horizontal
            keyExtractor={(item, index) => item.constructor.name + '-' + index}
            data={React.Children.toArray(this.props.children)}
            alwaysBounceHorizontal={false}
            showsHorizontalScrollIndicator={false}
            renderItem= {({item}) => item}
        />
      </View>
    );
  }

}
