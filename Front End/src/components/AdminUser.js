import React, { useState , useEffect } from 'react'
import { useHistory } from 'react-router-dom'
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
    
    let history = useHistory()
    
    const handleClick = event => {
      let values = event.target.dataset.mssg.split("_")
      if(values[1] === "Update"){
        history.push(`/adminUpdate/${values[0]}`)
      }
      else{
        let eemail = values[0]
        axios.delete('http://localhost:4500/emp/remove/' + eemail)
        .then(res => {
          console.log(res.data)
        })
        .catch(err => {
          console.log(err)
        })

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
                <button type="button" data-mssg={`${currentrow.empemail}_Update`}  onClick={handleClick} class="btn btn-primary btn-others">Update</button>
                <button type="button" data-mssg={`${currentrow.empemail}_Delete`} onClick={handleClick} class="btn btn-danger btn-others">Delete</button>
              </td>
            </tr>
            )})}
        </table>
      </div> 
)}

export default AdminUser
