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
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, addTodo, deleteTodo } from "../store/action/todo";
import TodoComponent from "./../components/todoComponent";

const HomePage = () => {
  const [todo, setTodo] = useState("");
  const [render, setRender] = useState(null);
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

  const todosHandler = async () => {
    let todoObj = {
      id: Math.floor(Math.random() * 100000).toString(),
      todoName: todo,
      status: false,
    };

    dispatch(addTodo(todoObj));
    setRender(true);
    setTodo("");
  };

  useEffect(() => {
    setRender(null);
    dispatch(fetchProducts());
  }, [render]);

  const handleDelete = async (id) => {
    setRender(true);
    dispatch(deleteTodo(id));
  };

  return (
    <View style={{ alignItems: "center" }}>
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
        <ScrollView>
          <FlatList
            keyExtractor={(item, index) => item._id.toString()}
            data={todos}
            renderItem={(itemData) => {
              return (
                <TodoComponent
                  itemData={itemData}
                  onHandleDelete={handleDelete}
                />
              );
            }}
          />
        </ScrollView>
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
    width: "95%",
  },
});

export default HomePage;
