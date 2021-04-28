import React , { useState,useEffect }from 'react'
import axios from 'axios'
import { useHistory,Link } from 'react-router-dom'

function UserHome() {
    const [apex,setApex] = useState(false)
    const [codeforCause,setCodeforCause] = useState(false)
    const [may,setMay] = useState(false)
    const [weekly,setWeekly] = useState(false)
    const userMail = sessionStorage.getItem('useremail')
    const history = useHistory()
    
    const examRegRedirect = evt => {
        let examName = evt.target.dataset.mssg
        history.push(`/userRegister/${examName}`)
    }

    useEffect(() => {
        if(sessionStorage.getItem("Key_Veriable")==="USER"){
            axios.get(`http://localhost:4500/emp/getusers/${userMail}`)
                .then( response => {
                    for(let i=0;i<response.data.length;i++){
                        let temp = response.data[i].empexamName
                        switch (temp) {
                            case "Apex2021":
                                setApex(true)
                                break
                            case "CodeforCause":
                                setCodeforCause(true)
                                break
                            case "MayLongChallenge":
                                setMay(true)
                                break
                            case "WeeklyChallenge":
                                setWeekly(true)
                                break
                        }
                    }
                })
        }
        else{
            history.push("/")
        }
    },[])

    return (
        <div>
            <nav className="admin-navbar">
                <p>Exam Register</p>
                <div className="admin-right">
                    <Link to={`/adminUpdate/${userMail}`}><button>Update</button></Link>
                    <Link to="/logout"><button>Logout</button></Link>
                </div>
            </nav>
            <div className="exam-details">
                <div className="exam-card">
                    <span className="exam-card-title">Apex2021 Challenge</span>
                    {!apex && <button data-mssg="Apex2021" className="btn-primary exam-btn" onClick={examRegRedirect}>Register</button>}
                    {apex && <button data-mssg="Apex2021" className="btn-success exam-btn" disabled>Registered</button>}
                </div>
                <div className="exam-card">
                    <span className="exam-card-title">Code for Cause</span>
                    {!codeforCause && <button data-mssg="CodeforCause" className="btn-primary exam-btn" onClick={examRegRedirect}>Register</button>}
                    {codeforCause && <button data-mssg="CodeforCause" className="btn-success exam-btn" disabled>Registered</button>}
                </div>
                <div className="exam-card">
                    <span className="exam-card-title">May Long Challenge</span>
                    {!may && <button data-mssg="MayLongChallenge" className="btn-primary exam-btn" onClick={examRegRedirect}>Register</button>}
                    {may && <button data-mssg="MayLongChallenge" className="btn-success exam-btn" disabled>Registered</button>}
                </div>
                <div className="exam-card">
                    <span className="exam-card-title">Weekly Challenge#21</span>
                    {!weekly && <button data-mssg="WeeklyChallenge" className="btn-primary exam-btn" onClick={examRegRedirect}>Register</button>}
                    {weekly && <button data-mssg="WeeklyChallenge" className="btn-success exam-btn" disabled>Registered</button>}
                </div>
            </div>
        </div>
    )
}

export default UserHome
