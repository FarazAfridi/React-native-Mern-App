import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const TodoComponent = ({ itemData, onHandleDelete }) => {
  return (
    <View key={itemData.item._id.toString()} style={styles.todoItemsContainer}>
      <View style={{ flexWrap: "wrap" }}>
        <Text style={styles.todoText}>{itemData.item.name}</Text>
      </View>
      <Text style={styles.todoText}>{itemData.item.status.toString()}</Text>
      <Button
        color="red"
        title="X"
        onPress={onHandleDelete.bind(this, itemData.item._id)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  todoItemsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    flexWrap: "wrap",
    borderWidth: 2,
    borderColor: "black",
  },
  todoText: {
    fontSize: 23,
    marginHorizontal: 10,
  },
});

export default TodoComponent;
