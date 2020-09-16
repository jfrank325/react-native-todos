import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import Header from './src/components/Header';

export default function App() {
  const [todoItem, setTodoItem] = useState('');
  const [todoList, setTodoList] = useState([]);

  const addTodoItem = () => {
    setTodoList([...todoList, todoItem]);
  };

  return (
    <View>
      <Header title="Todo App" />
      <View style={styles.container}>
        <View>
          <TextInput
            style={styles.textInput}
            placeholder="Enter Todo Item"
            onChangeText={(text) => setTodoItem(text)}
            value={todoItem}
          />
          <Button style={styles.button} title="Add Todo" onPress={addTodoItem} />
        </View>
        <StatusBar style="auto" />
        <ScrollView>
          {todoList.map((todo, i) => (
            <View key={i} style={styles.todoItem}>
              <Text>{todo}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
  textInput: {
    padding: 10,
    borderColor: 'black',
    marginBottom: 10,
    borderWidth: 1,
  },
  button: {
    marginBottom: 2,
  },
  todoItem: {
    marginTop: 10,
    padding: 20,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
  },
});
