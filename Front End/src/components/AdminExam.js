import React, { useState,useEffect } from 'react'
import { Link,useHistory } from 'react-router-dom'
import Table from './Table'
import axios from 'axios'
import './CSS/AdminExam.css'

function AdminExam() {
    const [apexChallenge,setApexChallenge] = useState([])
    const [codeCause,setCodeCause] = useState([])
    const [mayChallenge,setMayChallenge] = useState([])
    const [weeklyChallenge,setWeeklyChallenge] = useState([])
    let history = useHistory()

    useEffect(()=> {
        if(sessionStorage.getItem("Key_Veriable")==="ADMIN"){
            axios.get("http://localhost:4500/emp/getexams")
                .then( response => {
                    for(let i=0;i<response.data.length;i++){
                        let temp = response.data[i]
                        switch (temp.empexamName) {
                            case "Apex2021":
                                setApexChallenge([...apexChallenge,[temp.empname,temp.empemail,temp.empmobile,temp.empdob]])
                                break
                            case "CodeforCause":
                                setCodeCause([...codeCause,[temp.empname,temp.empemail,temp.empmobile,temp.empdob]])
                                break
                            case "MayLongChallenge":
                                setMayChallenge([...mayChallenge,[temp.empname,temp.empemail,temp.empmobile,temp.empdob]])
                                break
                            case "WeeklyChallenge":
                                setWeeklyChallenge([...weeklyChallenge,[temp.empname,temp.empemail,temp.empmobile,temp.empdob]])
                                break
                        }
                    }
                })
        }
        else history.push("/")
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
            <div className="exam-details">
                <div className="exam-card">
                        <span className="exam-card-title">Apex 2021 Challenge</span>
                        <button className="btn-info exam-btn">View Details</button>
                </div>
                {/* <div className="exam-table"> */}
                    {/* <Table ele={apexChallenge} /> */}
                {/* </div> */}
                <div className="exam-card">
                        <span className="exam-card-title">Code for Cause</span>
                        <button className="btn-info exam-btn">View Details</button>
                </div>
                {/* <div className="exam-table"> */}
                    {/* <Table ele={codeCause} /> */}
                {/* </div> */}
                <div className="exam-card">
                        <span className="exam-card-title">May Long Challenge</span>
                        <button className="btn-info exam-btn">View Details</button>
                </div>
                {/* <div className="exam-table"> */}
                    {/* <Table ele={mayChallenge} /> */}
                {/* </div> */}
                <div className="exam-card">
                        <span className="exam-card-title">Weekly Challenge#21</span>
                        <button className="btn-info exam-btn">View Details</button>
                </div>
                {/* <div className="exam-table"> */}
                    {/* <Table ele={weeklyChallenge} /> */}
                {/* </div> */}
            </div>
        </div>
    )
}

export default AdminExam
