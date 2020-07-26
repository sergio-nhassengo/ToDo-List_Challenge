import React, { Component } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.mainContainer}>
    <Text style={styles.text}>Todo List!</Text>
    <Button 
    color="#045b68" 
    title="Proximo" onPress={() =>
        navigation.navigate('Todo List')}/>
  </View>
    
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },

  text: {
    color: "#045b68",
    fontSize: 100,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 50
  }
});

export default HomeScreen;