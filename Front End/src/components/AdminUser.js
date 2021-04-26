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
    
    const handleClick = event => {
      if(event.target.dataset.mssg === "Update") console.log("Updating")
      else{
        // // eemail = sessionStorage.getItem('')
        // // axios.delete('http://localhost:4500/emp/remove/' + eemail)
        // .then(res => {
        //   console.log(res.data)
        // })
        // .catch(err => {
        //   console.log(err)
        // })

      }
    }
    
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
                <button type="button" data-mssg="Update" onClick={handleClick} class="btn btn-primary btn-others">Update</button>
                <button type="button" data-mssg="Delete" onClick={handleClick} class="btn btn-danger btn-others">Delete</button>
              </td>
            </tr>
            )})}
        </table>
      </div> 
)}

export default AdminUser
