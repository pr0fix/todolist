import { Fragment } from "react";
import { useState } from "react";
import Todotable from "./components/Todotable";

export default function Todolist() {

  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({ description: "", date: "" });
  const [hasNoData, setHasNoData] = useState(true);

  // Sets todo date and description
  const handleInputChanged = (e) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  }

  // Adds a new todo into todolist
  const addTodo = () => {
    setTodos([...todos, todo]);
    setHasNoData(false);
  }

  // When delete button is clicked this function handles deletion from todolist
  const handleDeleteRow = (index) => {
    let reduceTodo = [...todos];
    reduceTodo.splice(index, 1);
    setTodos(reduceTodo);

  }

  // Function to map each item in list and create a table row for each item.
  const itemRows = todos.map((todo, index) =>
    <Fragment>
      <tr key={index}>
        <td>{todo.date}</td>
        <td>{todo.description}</td>
        <td><button onClick={() => handleDeleteRow(index)}>Delete</button></td>
      </tr>
    </Fragment>
  )

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
      <button onClick={addTodo}>
        Add
      </button>

      <Todotable hasNoData={hasNoData} itemRows={itemRows} />

    </Fragment>
  )

}