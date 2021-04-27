import React from 'react'
import { useHistory,Link } from 'react-router-dom'

function UserHome() {
    const userMail = sessionStorage.getItem('useremail')
    const history = useHistory()
    const examRegRedirect = evt => {
        let examName = evt.target.dataset.mssg
        history.push(`/userRegister/${examName}`)
    }
    return (
        <div>
            <nav className="admin-navbar">
                <p>Exam Register</p>
                <div className="admin-right">
                    <Link to={`/adminUpdate/${userMail}`}><button>Update</button></Link>
                    <button>Logout</button>
                </div>
            </nav>
            <div className>
                <div>
                    <span>Apex2021 Challenge</span>
                    <button data-mssg="Apex2021 Challenge" onClick={examRegRedirect}>Register</button>
                </div>
                <div>
                    <span>Code for Cause</span>
                    <button data-mssg="Code for Cause" onClick={examRegRedirect}>Register</button>
                </div>
                <div>
                    <span>May Long Challenge</span>
                    <button data-mssg="May Long Challenge" onClick={examRegRedirect}>Register</button>
                </div>
                <div>
                    <span>Weekly Challenge#21</span>
                    <button data-mssg="Weekly Challenge#21" onClick={examRegRedirect}>Register</button>
                </div>
            </div>
        </div>
    )
}

export default UserHome
