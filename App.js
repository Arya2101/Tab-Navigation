import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import IssueReturn from './screens/IssueReturn';
import Management from './screens/Management';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

export default function App() {
  return (
    <View>
      <AppContainer />
    </View>
  );
}

const TabNavigator = createBottomTabNavigator({
  Transaction: {screen:IssueReturn},
  Search: {screen:Management}
})

const AppContainer = createAppContainer(TabNavigator);