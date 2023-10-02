import { Fragment } from "react";
export default function Todotable(props) {

    return (
        <Fragment>
            {props.hasNoData ?
                <p>No tasks...</p>
                :
                <table>
                    <tbody>
                        <tr><th>Date</th><th>Description</th></tr>
                        {props.itemRows}
                    </tbody>
                </table>
            }
        </Fragment>
    );
}