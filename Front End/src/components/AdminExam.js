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
            <div className>
                <div>
                    <span>2nd Semester</span>
                    <button>View Details</button>
                </div>
                <div>
                    <span>4nd Semester</span>
                    <button>View Details</button>
                </div>
                <div>
                    <span>6nd Semester</span>
                    <button>View Details</button>
                </div>
                <div>
                    <span>8nd Semester</span>
                    <button>View Details</button>
                </div>
            </div>
        </div>
    )
}

export default AdminExam
