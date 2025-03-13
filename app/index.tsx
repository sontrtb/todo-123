import { Text, View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from "react";

interface ITodo {
  text: string;
  isDone: boolean;
  id: number;
}

export default function Index() {
  const [todoText, setTodoText] = useState<string>("")
  const [todoList, setTodoList] = useState<ITodo[]>([
    {
      id: 1,
      isDone: false,
      text: "Hoc bai"
    },
    {
      id: 2,
      isDone: false,
      text: "Quét nhà"
    }
  ])

  const onAdd = () => {
    console.log(todoText)
  }

  const onDone = () => {
    console.log("Done")
  }

  const onEdit = () => {
    console.log("Edit")
  }

  const onDelete = () => {
    console.log("Delete")
  }

  const onChangeTextTodo = (text: string) => {
    setTodoText(text)
  }

  return (
    <View
      style={styles.root}
    >
      <View style={styles.header}>
        <TextInput
          style={styles.input}
          // value="abc"
          placeholder="Todo..."
          onChangeText={onChangeTextTodo}
        />
        <TouchableOpacity onPress={onAdd}>
          <View style={styles.button}>
            <Text style={styles.textBtn}>Add</Text>
          </View>
        </TouchableOpacity>
      </View>

      <Text style={{ marginVertical: 20 }}>
        You have
        <Text style={{ color: "blue" }}> 3 </Text>
        tasks to complete
      </Text>
      {
        todoList.map((todo) => {
          return (
            <View style={styles.todoItem}>
              <View style={styles.leftTodoContent}>
                <TouchableOpacity  onPress={onDone}>
                  <Ionicons name="radio-button-off" size={24} color="black" />
                </TouchableOpacity>
                <Text>{todo.text}</Text>
              </View>
              <View style={styles.actions}>
                <TouchableOpacity style={styles.editBtn} onPress={onEdit}>
                  <Feather name="edit" size={18} color="white" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.deleteBtn} onPress={onDelete}>
                  <AntDesign name="delete" size={18} color="white" />
                </TouchableOpacity>
              </View>
            </View>
          )
        })
      }
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: "row"
  },
  input: {
    flex: 1,
    borderBottomWidth: 1,
    padding: 8,
    borderColor: "gray"
  },
  button: {
    backgroundColor: "rgb(103, 147, 247)",
    height: 40,
    width: 80,
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6
  },
  textBtn: {
    color: "white",
    fontWeight: "600",
    fontSize: 16
  },
  todoItem: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 8,
    justifyContent: "space-between",
    marginBottom: 16
  },
  leftTodoContent: {
    gap: 6,
    flexDirection: "row",
    alignItems: "center"
  },
  actions: {
    flexDirection: "row",
    gap: 6
  },
  editBtn: {
    backgroundColor: "rgb(103, 147, 247)",
    padding: 8,
    borderRadius: 4
  },
  deleteBtn: {
    backgroundColor: "rgb(247, 103, 103)",
    padding: 8,
    borderRadius: 4
  }
})