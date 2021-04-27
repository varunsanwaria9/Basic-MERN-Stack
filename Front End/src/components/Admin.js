import React, { Component }from 'react'
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
                    <button>Exam</button>
                    <button>Users</button>
                    <button>Logout</button>
                </div>
            </nav>   
            <AdminUser />
        </div>
    )}
}

export default Admin
