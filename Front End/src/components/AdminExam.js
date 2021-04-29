import React, { useState,useEffect } from 'react'
import { Link,useHistory } from 'react-router-dom'
import Table from './Table'
import axios from 'axios'
import './CSS/AdminExam.css'

function AdminExam() {
    // const [apexChallenge,setApexChallenge] = useState([])
    // const [codeCause,setCodeCause] = useState([])
    // const [mayChallenge,setMayChallenge] = useState([])
    // const [weeklyChallenge,setWeeklyChallenge] = useState([])
    const [allList,setAllList] = useState([])

    let history = useHistory()
    const [apexTableShow,setApexTableShow] = useState(false)
    const [causeTableShow,setCauseTableShow] = useState(false)
    const [mayTableShow,setMayTableShow] = useState(false)
    const [weekTableShow,setWeekTableShow] = useState(false)
    
    useEffect(()=> {
        if(sessionStorage.getItem("Key_Veriable")==="ADMIN"){
            axios.get("http://localhost:4500/emp/getexams")
            .then( response => {
                // for(let i=0;i<response.data.length;i++){
                //     let temp = response.data[i]
                //     console.log(temp);
                //     switch (temp.empexamName) {
                //         case "Apex2021":
                //             setApexChallenge([...apexChallenge,temp])
                //             break
                //         case "CodeforCause":
                //             setCodeCause([...codeCause,temp])
                //             break
                //         case "MayLongChallenge":
                //             setMayChallenge([...mayChallenge,temp])
                //             break
                //         case "WeeklyChallenge":
                //             setWeeklyChallenge([...weeklyChallenge,temp])
                //             break
                //         default:
                //             break
                //     }
                // }
                setAllList(response.data)
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
                        <button className="btn-info exam-btn" onClick={() => setApexTableShow(prevState => !prevState)}>View Details</button>
                </div>
                {apexTableShow && <div className="exam-table">
                    <table className="table table-exam">
                        <thead className="thead-dark">
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Mobile</th>
                                <th>DOB</th>
                            </tr>
                            {
                                allList.map((currentrow,idx) => {
                                    return(
                                        <Table ele={currentrow} idx={idx} examName="Apex2021" />
                                    )})
                            }
                        </thead>
                    </table>
                </div>}
                <div className="exam-card">
                        <span className="exam-card-title">Code for Cause</span>
                        <button className="btn-info exam-btn" onClick={() => setCauseTableShow(prevState => !prevState)}>View Details</button>
                </div>
                {causeTableShow && <div className="exam-table">
                    <table className="table table-exam">
                        <thead className="thead-dark">
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Mobile</th>
                                <th>DOB</th>
                            </tr>
                            {
                                allList.map((currentrow,idx) => {
                                    return(
                                        <Table ele={currentrow} idx={idx} examName="CodeforCause" />
                                    )})
                            }
                        </thead>
                    </table>
                </div>}
                <div className="exam-card">
                        <span className="exam-card-title">May Long Challenge</span>
                        <button className="btn-info exam-btn" onClick={() => setMayTableShow(prevState => !prevState)}>View Details</button>
                </div>
                {mayTableShow && <div className="exam-table">
                    <table className="table table-exam">
                        <thead className="thead-dark">
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Mobile</th>
                                <th>DOB</th>
                            </tr>
                            {
                                allList.map((currentrow,idx) => {
                                    return(
                                        <Table ele={currentrow} idx={idx} examName="MayLongChallenge" />
                                    )})
                            }
                        </thead>
                    </table>
                </div>}
                <div className="exam-card">
                        <span className="exam-card-title">Weekly Challenge#21</span>
                        <button className="btn-info exam-btn" onClick={() => setWeekTableShow(prevState => !prevState)}>View Details</button>
                </div>
                {weekTableShow && <div className="exam-table">
                    <table className="table table-exam">
                        <thead className="thead-dark">
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Mobile</th>
                                <th>DOB</th>
                            </tr>
                            {
                                allList.map((currentrow,idx) => {
                                    return(
                                        <Table ele={currentrow} idx={idx} examName="WeeklyChallenge" />
                                    )})
                            }
                        </thead>
                    </table>
                </div>}               
            </div>
        </div>
    )
}

export default AdminExam
