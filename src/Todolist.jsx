import { Fragment } from "react";
import { useState } from "react"

export default function Todolist() { // component
  //states
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({ description: "", date: "" });

  //functions
  const handleInputChanged = (e) => {
    // setTodo({...todo, description : e.target.value});
    setTodo({ ...todo, [e.target.name]: e.target.value });

  }

  const addTodo = () => {
    setTodos([...todos, todo]);
  }

  const itemRows = todos.map((todo, index) =>
    <Fragment>
      <tr><th>Description</th><th>Date</th></tr>
      <tr key={index}>
        <td>{todo.description}</td>
        <td>{todo.date}</td>
      </tr>
    </Fragment>
  )

  //return 
  return (
    <Fragment>
      <h1>Todo list</h1>
      <input
        type="text"
        name="description"
        value={todo.description}
        onChange={handleInputChanged}
      />
      <input type="date"
        name="date"
        value={todo.date}
        onChange={handleInputChanged}
      />
      <button onClick={addTodo}>
        Add
      </button>

      <table>
        <tbody>
          {itemRows}
        </tbody>
      </table>
    </Fragment>
  )

}