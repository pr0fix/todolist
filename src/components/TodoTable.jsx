import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import { useRef } from "react";

export default function Todotable(props) {
    const gridRef = useRef();

    // Sets properties for AG Grid fields
    const columnProperties = {
        filter: true,
        floatingFilter: true,
        sortable: true
    }

    // Constructs columns for AG Grid
    const columns = [
        { headerName: 'Description', field: 'description', ...columnProperties },
        { headerName: 'Date', field: 'date', ...columnProperties },
        {
            headerName: 'Priority', field: 'priority', ...columnProperties,
            cellStyle: params => params.value === 'High' ? { color: 'red' } : { color: 'black' }
        }
    ];

    // Deletes selected row from AG Grid
    const deleteSelectedRow = () => {
        if (gridRef.current.getSelectedNodes().length == 0) {
            alert("You must pick a row to delete first!")
        } else {
            const removeIndex = gridRef.current.getSelectedNodes()[0].id;
            props.handleDeleteRow(removeIndex);
        }
    }

    // return
    return (
        <>
            <button onClick={deleteSelectedRow}>Delete</button>
            {props.hasNoData ?
                <p>No tasks...</p> :
                <div className='ag-theme-material'
                    style={{ height: '700px', width: '70%', margin: 'auto' }}>
                    <AgGridReact
                        rowData={props.todos}
                        columnDefs={columns}
                        animateRows='true'
                        rowSelection='single'
                        onGridReady={params => gridRef.current = params.api}>
                    </AgGridReact>
                </div>
            }
        </>
    );
}