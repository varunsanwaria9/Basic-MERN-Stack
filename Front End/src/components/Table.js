import React from 'react'

function Table(props) {
    return (
        <table className="table table-exam">
            <thead className="thead-dark">
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>DOB</th>
                </tr>
                {props.ele.map((currentrow,idx) => {
                    return (
                        <tr>
                            <td>{currentrow[0]}</td>
                            <td>{currentrow[1]}</td>
                            <td>{currentrow[2]}</td>
                            <td>{currentrow[3]}</td>
                        </tr>
                    )})}
            </thead>
        </table>
    )
}

export default Table
