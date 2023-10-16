import ToDoList from "./components/ToDoList";
import ItemForm from "./components/ItemForm";
import { useState } from "react";
import { TodoContext } from "./data/TodoContext";
import "./styles.css";

export default function App() {
  const [editing, setEditing] = useState(null);
  const [todos, setTodos] = useState([]);

  function addToDo(todo) {
    const updatedTodoList = [...todos, todo];
    setTodos(updatedTodoList);

    setEditing(null);
  }

  function updateTodo(todo) {
    setTodos(
      todos.map(function (td) {
        if (td.id === todo.id) {
          return todo;
        } else {
          return td;
        }
      })
    );
    // Removing the form after update product
    setEditing(null);
  }

  function removeTodo(item) {
    const updatedTodoList = todos.filter(function (todo) {
      return todo.id !== item.id;
    });

    setTodos(updatedTodoList);
  }

  function toggleSelected(item) {
    const updatedTodoList = todos.map(function (todo) {
      if (todo.id === item.id) {
        todo.played = !todo.played;
        return todo;
      } else {
        return todo;
      }
    });
    setTodos(updatedTodoList);
  }

  return (
    <div className="App">
      <TodoContext.Provider
        value={{
          editing,
          setEditing,
          updateTodo,
          todos,
          addToDo,
          removeTodo,
          toggleSelected
        }}
      >
        <h2>Task Management List</h2>
        {!editing ? (
          <>
            <ToDoList />
            <button className="add-btn" onClick={() => setEditing("new")}>
              Add task
            </button>
          </>
        ) : (
          <ItemForm addToDo={addToDo} />
        )}
      </TodoContext.Provider>
    </div>
  );
}
