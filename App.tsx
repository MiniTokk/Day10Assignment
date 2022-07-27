import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FormList from './FormList';
export default function App() {
  return (
    <View style={styles.container}>
      <FormList/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: "center",
        justifyContent:"center",
  },
});