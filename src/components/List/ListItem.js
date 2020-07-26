
import React from "react";
import {  View, Text, StyleSheet } from "react-native";
import CheckBox from '@react-native-community/checkbox';

const listItem = props => (
    <View style={styles.listItem}>
        <CheckBox 
        value={props.completed}
        onValueChange={props.setCompletion}
        tintColors={{ true: '#045b68', false: '#045b68' }}
        />
        <Text>{props.title}</Text>
    </View>
);

const styles = StyleSheet.create({
    listItem: {
      width: "100%",
      marginBottom: 5,
      padding: 10,
      backgroundColor: "#eee",
      flexDirection: "row",
      alignItems: "center"
    }
  });

export default listItem;
