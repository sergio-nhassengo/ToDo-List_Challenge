
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CheckBox from '@react-native-community/checkbox';

interface Props {
  title: string;
  completed: boolean;
  setCompletion: () => void;
}

class ListItem extends React.PureComponent<Props> {
  render() {
    return (
      <View style={styles.listItem}>
          <CheckBox 
          value={this.props.completed}
          onValueChange={this.props.setCompletion}
          tintColors={{ true: '#045b68', false: '#045b68' }}
          />
          <Text>{this.props.title}</Text>
      </View>
  );
  }
} 

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

export default ListItem;
