import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';

export default function Todogrid(props) {

    // Sets properties for AG Grid fields
    const columnProperties = {
        filter: true,
        floatingFilter: true,
        sortable: true
    }

    // Constructs columns for AG Grid
    const columns = [
        { headerName: 'Description', field: 'description', ...columnProperties },
        { headerName: 'Date', field: 'date', ...columnProperties, 
		cellRenderer: (data) => {
                return data.value ? (new Date(data.value)).toLocaleDateString() : '';
            }
        },
        {
            headerName: 'Priority', field: 'priority', ...columnProperties,
            cellStyle: params => params.value === 'High' ? { color: 'red' } : { color: 'black' }
        }
    ];


    // return AG Grid
    return (
        <>        
            {props.hasNoData ?
                <p>No tasks...</p> :
                <div className='ag-theme-material'
                    style={{ height: '700px', width: '70%', margin: 'auto' }}>
                    <AgGridReact
                        rowData={props.todos}
                        columnDefs={columns}
                        animateRows='true'
                        rowSelection='single'
                        onGridReady={params => props.gridRef.current = params.api}>
                    </AgGridReact>
                </div>
            }
		
        </>
    );
}