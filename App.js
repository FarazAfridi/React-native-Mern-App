import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  FlatList,
  ScrollView,
  Text,
} from "react-native";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [render, setRender] = useState(null);;

  const todosHandler = async () => {
    let todoObj = {
      id: Math.floor(Math.random() * 100000).toString(),
      todoName: todo,
      status: false,
    };

    setRender(true);
    setTodo('');
    // setTodos((prevTodos) => [...prevTodos, todoObj]);
    await fetch("http://192.168.0.108:8000/api/add_todo", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({
        todo: {
          name: todoObj.todoName,
          status: todoObj.status,
        },
      }),
    })
      .then(() => console.log("data sent"))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    setRender(null)
    const fetchTodos = async () => {
      await fetch("http://192.168.0.108:8000/api/get_todos")
        .then((res) => res.json())
        .then((data) => setTodos(data))
        .catch((err) => console.log(err));
    };
    fetchTodos();
    
  }, [render]);

  const handleDelete = async (id) => {
    setRender(true)
    await fetch("http://192.168.0.108:8000/api/remove_todo", {
      headers: { "Content-Type": "application/json" },
      method: 'DELETE',
      body: JSON.stringify({
        id
      })
    })
    .then(() => console.log("id sent"))
    .catch((err) => console.log(err));
  }

  return (
    <View style={{alignItems: 'center'}}>
      <View style={styles.inputContainer}>
        <TextInput
          value={todo}
          style={styles.input}
          placeholder="Todos Input"
          onChangeText={setTodo}
        />
        <Button title="Add Todo" onPress={todosHandler} />
      </View>
      <View style={styles.todoContainer}>
        <FlatList
        keyExtractor={(item, index) => item._id.toString()}
          data={todos}
          renderItem={(itemData) =>{
            console.log(itemData.item._id, itemData.item.name)
             return (
            <View key={itemData.item._id.toString()} style={styles.todoItemsContainer}>
            <View style={{flexWrap: 'wrap'}}>
              <Text style={styles.todoText}>{itemData.item.name}</Text>
              </View>
              <Text style={styles.todoText}>{itemData.item.status.toString()}</Text>
              <Button color="red" title="X" onPress={handleDelete.bind(this, itemData.item._id)} />
            </View>
          )}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: "center",
  },
  input: {
    padding: 10,
    borderBottomColor: "black",
    borderBottomWidth: 2,
    marginVertical: 20,
  },
  todoContainer: {
    marginTop: 10,
    width: '95%',
  },
  todoItemsContainer: {
   flexDirection: 'row',
   justifyContent: "center",
   alignItems: "center",
   padding: 10,
   flexWrap: 'wrap',
   borderWidth: 2,
   borderColor: 'black',
  },
  todoText: {
    fontSize: 23,
    marginHorizontal: 10
  }
});

export default App;
