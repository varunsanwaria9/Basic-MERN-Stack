import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './CSS/Admin.css'

function AdminExam() {
    const [apexChallenge,setApexChallenge] = useState([])
    const [codeCause,setCodeCause] = useState([])
    const [mayChallenge,setMayChallenge] = useState([])
    const [weekChallenge,setWeekChallenge] = useState([])

    useEffect(()=> {
        axios.get("http://localhost:4500/emp/getexams")
            .then( response => {
                console.log(response)
            })
    },[])
    return (
        <div>
            <nav className="admin-navbar">
                <p>Exam Register</p>
                <div className="admin-right">
                    <Link to="/admin"><button>Exam</button></Link>
                    <Link to="/adminuser"><button>Users</button></Link>
                    <Link to="/adminuser"><button>Logout</button></Link>
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
