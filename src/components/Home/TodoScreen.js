import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native-gesture-handler';
import ListItem from '../List/ListItem';
import { StyleSheet, Text, View } from 'react-native';
import { loadTodos, updatedTodo } from '../../actions';
import { ProgressBar } from '@react-native-community/progress-bar-android';

class TodoScreen extends Component {

  componentDidMount() {
    this.props.loadTodos();
  }

  render() {
    return (
      this.props.isLoading ?
      <View style={styles.loading}>
        <Text style={styles.text}>Carregando...</Text>
        <ProgressBar color="#045b68" />
      </View>
      :
      <FlatList 
        style={styles.listContainer}
        data={this.props.todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={(info) => (
          <ListItem
          setCompletion={() => this.props.updateTodo(info.item)}
          title={info.item.title}
          completed={info.item.completed}
          />
          )}
      />
    );

  }
} 

const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  },
  loading: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "#045b68",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 50
  }
});

const mapStateToProps = ({ isLoading, todos, error }) => ({
    isLoading,
    todos,
    error
});

const masDispatchToProps = dispatch => ({
  loadTodos: () => dispatch(loadTodos()),
  updateTodo: (todo) => dispatch(updatedTodo(todo))
});

export default connect (mapStateToProps, masDispatchToProps)(TodoScreen);