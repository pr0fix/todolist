import { Fragment } from "react";
import { useState } from "react";
import Todotable from "./components/Todotable";

export default function Todolist() {

  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({ description: "", date: "", priority: "" });
  const [hasNoData, setHasNoData] = useState(true);

  // Sets todo date and description
  const handleInputChanged = (e) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  }

  // Adds a new todo into todolist
  const addTodo = () => {
    if (
      todo.description.trim() === '' || todo.date.trim() === '' || todo.priority.trim() === '') {
      alert("Input fields cannot be empty!")
    } else {
      setTodos([...todos, todo]);
      setHasNoData(false);
    }
  }

  // When delete button is clicked this function handles deletion from todolist
  const handleDeleteRow = (index) => {
    let deleteTodo = [...todos];
    deleteTodo.splice(index, 1);
    setTodos(deleteTodo);
  }


  //return 
  return (
    <Fragment>
      <h1>Todo list</h1>

      <label htmlFor="description">Description: </label>
      <input id="description"
        type="text"
        name="description"
        value={todo.description}
        onChange={handleInputChanged}
      />

      <label htmlFor="date">  Date: </label>
      <input
        id="date"
        type="date"
        name="date"
        value={todo.date}
        onChange={handleInputChanged}
      />

      <label htmlFor="priority">  Priority: </label>
      <input
        id="priority"
        type="text"
        name="priority"
        value={todo.priority}
        onChange={handleInputChanged}
      />
      <button onClick={addTodo}>
        Add
      </button>

      <Todotable
        todos={todos}
        hasNoData={hasNoData}
        handleDeleteRow={handleDeleteRow} />

    </Fragment>
  )

}