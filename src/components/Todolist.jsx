import Todogrid from "./TodoGrid";
import { useState } from "react";
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Button, TextField, Stack } from "@mui/material";
import { useRef } from "react";
import DeleteIcon from '@mui/icons-material/Delete';

export default function Todolist() {

    // States
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState({ description: "", date: "", priority: "" });
    const [hasNoData, setHasNoData] = useState(true);

    // React hook for referencing a value not needed for rendering
    const gridRef = useRef();

    // Sets todo date and description
    const handleInputChanged = (e) => {
        setTodo({ ...todo, [e.target.name]: e.target.value });
    }

    // Adds a new todo into todolist
    const addTodo = () => {
        if (
            todo.description.trim() === '' || todo.date === '' || todo.priority.trim() === '') {
            alert("Input fields cannot be empty!")
        } else {
            setTodos([...todos, todo]);
            setHasNoData(false);
        }
    }

    // Gets date as parameter from DatePicker component and sets it into todo.date
    const setDate = (inputDate) => {
        setTodo({ ...todo, date: inputDate })
    }

    // When delete button is clicked this function handles deletion from todolist
    const handleDeleteRow = (index) => {
        let deleteTodo = [...todos];
        deleteTodo.splice(index, 1);
        setTodos(deleteTodo);
    }

    // Deletes selected row from AG Grid
    const deleteSelectedRow = () => {
        if (gridRef.current.getSelectedNodes().length == 0) {
            alert("You must pick a row to delete first!")
        } else {
            const removeIndex = gridRef.current.getSelectedNodes()[0].id;
            handleDeleteRow(removeIndex);
        }
    }


    // Returns input fields and buttons to be showed on page 
    return (
        <>
            <h1>Todolist</h1>
            
            <Stack direction="row" 
            spacing={2} 
            justifyContent="center" 
            alignItems="center">

                <TextField
                    label="Description"
                    variant="standard"
                    name="description"
                    value={todo.description}
                    onChange={handleInputChanged}>
                </TextField>

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker 
                        label="Date"
                        format="DD-MM-YYYY"
                        value={todo.date}
                        onChange={date => setDate(date)}>
                    </DatePicker>
                </LocalizationProvider>

                <TextField
                    label="Priority"
                    variant="standard"
                    name="priority"
                    value={todo.priority}
                    onChange={handleInputChanged}>
                </TextField>

                <Button
                    onClick={addTodo}
                    variant="outlined"
                >Add
                </Button>

                <Button
                    onClick={deleteSelectedRow}
                    variant='outlined'
                    color="warning"
                    endIcon={<DeleteIcon/>}
                >Delete
                </Button>
            </Stack>

            <Todogrid
                todos={todos}
                hasNoData={hasNoData}
                handleDeleteRow={handleDeleteRow}
                gridRef={gridRef}
            />

        </>
    )
}