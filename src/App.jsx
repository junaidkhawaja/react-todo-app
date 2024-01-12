import React, { useState } from "react";
import "./App.css";
import ToDoForm from "./Components/ToDoForm";
import ToDoList from "./Components/ToDoList";
import Footer from "./Components/Footer";

const App = () => {
  const [todo, setTodo] = useState("");
  const [tododesc, setTododesc] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      const editTodo = todos.find((i) => i.id === editId);
      const updatedTodos = todos.map((t) =>
        t.id === editTodo.id
          ? (t = { id: t.id, todo, tododesc })
          : { id: t.id, todo: t.todo, tododesc: t.tododesc }
      );
      setTodos(updatedTodos);
      setEditId(0);
      setTodo("");
      setTododesc("");

      return;
    }

    if (todo !== "") {
      setTodos([{ id: `${todo}-${Date.now()}`, todo, tododesc }, ...todos]);
      setTodo("");
      setTododesc("");

    }
    console.log(todos)
  };

  const handleDelete = (id) => {
    const delTodo = todos.filter((to) => to.id !== id);
    setTodos([...delTodo]);
  };

  const handleEdit = (id) => {
    const editTodo = todos.find((i) => i.id === id);
    setTodo(editTodo.todo);
    setTododesc(editTodo.tododesc);
    setEditId(id);
  };

  return (
    <div className="App">
      <div className="container mx-auto px-4">
        <h1 className="font-bold mb-10 mt-10 text-white text-6xl">📋 Todo List App</h1>
        <div className="grid grid-rows-1 grid-cols-3 grid-flow-col gap-4 flex-auto">
          <div className="col-span-1">
        <ToDoForm
          handleSubmit={handleSubmit}
          todo={todo}
          tododesc={tododesc}
          editId={editId}
          setTodo={setTodo}
          setTododesc={setTododesc}
        />
        </div>
        <div className="col-span-2">
        <ToDoList
          todos={todos}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
        </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;