import React from 'react'
import { Link } from 'react-router-dom'
import './CSS/Admin.css'

function AdminExam() {
    return (
        <div>
            <nav className="admin-navbar">
                <p>Exam Register</p>
                <div className="admin-right">
                    <Link to="/admin"><button>Exam</button></Link>
                    <Link to="/adminuser"><button>Users</button></Link>
                    <button>Logout</button>
                </div>
            </nav>
            <div className="examdetails">
                <div>
                    <span>Apex2021 Challenge</span>
                    <button>View Details</button>
                </div>
                <div>
                    <span>Code for Cause</span>
                    <button>View Details</button>
                </div>
                <div>
                    <span>May Long Challenge</span>
                    <button>View Details</button>
                </div>
                <div>
                    <span>Weekly Challenge#21</span>
                    <button>View Details</button>
                </div>
            </div>
        </div>
    )
}

export default AdminExam
