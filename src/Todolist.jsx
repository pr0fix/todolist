import { Fragment } from "react";
import { useState } from "react"

export default function Todolist() { // component
  //states
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({ description: "", date: "" });
  const [isEmpty, setIsEmpty] = useState(false);

  //functions
  const handleInputChanged = (e) => {
    // setTodo({...todo, description : e.target.value});
    setTodo({ ...todo, [e.target.name]: e.target.value });
  }

  const addTodo = () => {
    setTodos([...todos, todo]);
    setIsEmpty(true);
  }

  const itemRows = todos.map((todo, index) =>
    <Fragment>
      <tr key={index}>
        <td>{todo.date}</td>
        <td>{todo.description}</td>
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

      {isEmpty ?
        <table>
          <tbody>
            <tr><th>Date</th><th>Description</th></tr>
            {itemRows}
          </tbody>
        </table> : 
        <p>No tasks...</p>}
        
    </Fragment>
  )

}