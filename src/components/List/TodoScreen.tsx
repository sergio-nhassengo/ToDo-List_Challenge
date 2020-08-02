import React from 'react';
import { Dispatch, AnyAction } from 'redux';
import { connect } from 'react-redux';
import { FlatList } from 'react-native-gesture-handler';
import ListItem from './ListItem';
import { StyleSheet, Text, View } from 'react-native';
import { loadTodos, updatedTodo } from '../../actions';
import { ProgressBar } from '@react-native-community/progress-bar-android';
import { Todo } from '../../types';

interface RootState {
  isLoading: boolean; 
  todos: Todo[];
  error: any;
}

interface OwnProps {
  loadTodos: () => void;
  updateTodo: (item: Todo) => void;
}

type Props = RootState & OwnProps;

class TodoScreen extends React.PureComponent<Props> {

  componentDidMount() {
    this.props.loadTodos();
  }

  render() {
    console.log(this.props.todos);
    return (
      this.props.isLoading ?
      <View style={styles.loading}>
        <Text style={styles.text}>Carregando...</Text>
        <ProgressBar color="#045b68" />
      </View>
      :
      <FlatList<any> 
        style={styles.listContainer}
        data={this.props.todos}
        initialNumToRender={7}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => (
          <ListItem
          setCompletion={() => this.props.updateTodo(item)}
          title={item.title}
          completed={item.completed}
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

const mapStateToProps = (state: any) => ({
    isLoading: state.isLoading,
    todos: state.todos,
    error: state.error
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
  loadTodos: () => dispatch(loadTodos()),
  updateTodo: (todo: Todo) => dispatch(updatedTodo(todo))
});

export default connect<RootState> (mapStateToProps, mapDispatchToProps)(TodoScreen);