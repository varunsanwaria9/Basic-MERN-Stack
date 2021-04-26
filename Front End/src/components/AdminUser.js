import React, { useState , useEffect } from 'react'
import axios from 'axios'

function AdminUser() {
    const [emplist, setEmpList] = useState([]);
    useEffect(()=> {
        axios.get('http://localhost:4500/emp')
      .then(response => {
        setEmpList(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
    })
    return (
      <div>
        <table className="table table-adminUser">
          <thead className="thead-dark"> 
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Password</th>
              <th>Others</th>
            </tr>
          </thead>
          {emplist.map((currentrow,idx) => {
            return (<tr key={idx}>
              <td>{currentrow.empname}</td>
              <td>{currentrow.empemail}</td>
              <td>{currentrow.empmobile}</td>
              <td>{currentrow.emppass}</td>
              <td>
                <button type="button" class="btn btn-primary btn-others">Update</button>
                <button type="button" class="btn btn-danger btn-others">Delete</button>
              </td>
            </tr>
            )})}
        </table>
      </div> 
)}

export default AdminUser
