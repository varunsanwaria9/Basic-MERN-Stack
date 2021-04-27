import React, { Component }from 'react'
import { Link } from 'react-router-dom'
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
                    <Link to="/exam"><button>Exam</button></Link>
                    <Link to="/user"><button>Users</button></Link>
                    <button>Logout</button>
                </div>
            </nav>   
            <AdminExam />
        </div>
    )}
}

export default Admin
