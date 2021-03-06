import React from 'react';
import { View, StatusBar } from 'react-native';
import { Title, Header, Left, Right, Body } from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import { Actions } from 'react-native-router-flux';

export default class HeaderBack extends React.Component {
  render() {
    return (
        <View style={{backgroundColor: '#ED4C67'}}>
            <Header style={{backgroundColor: '#ED4C67', marginTop: 20, elevation: 0}}>
                <Left>
                    <AntDesign color={'#fff'} name="back" size={25} onPress={() => Actions.pop()}/>
                </Left>
                <Body>
                    <Title style={{color: '#fff', fontFamily: 'OpenSans-Regular'}}>{this.props.title}</Title>
                </Body>
                <Right />
            </Header>
            <StatusBar barStyle="light-content" />
        </View>
    );
  }
}
