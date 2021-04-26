import React, { Component }from 'react'
import { Route,Link } from 'react-router-dom'
import AdminExam from './AdminExam'
import AdminUser from './AdminUser'
import "./CSS/Admin.css"

class Admin extends Component{
    render() {
        return (
        <div className="admin-main">
            <nav className="admin-navbar">
                <p>Exam Register</p>
                <div className="admin-right">
                    <Link to="/admin/"><button>Exam</button></Link>
                    <Link to="/admin/users"><button>Users</button></Link>
                    <button>Logout</button>
                </div>
            </nav>   
            <Route exact path="/admin/" component={AdminExam} />
            <Route path="/admin/users" component={AdminUser} />
        </div>
    )}
}

export default Admin
