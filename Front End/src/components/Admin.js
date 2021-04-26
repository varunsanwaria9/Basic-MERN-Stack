import React from 'react'
import AdminExam from './AdminExam'
import AdminUser from './AdminUser'
import "./CSS/Admin.css"

function Admin() {
    let whichComp = false
    const switchComp = () => whichComp = !whichComp
    return (
        <div className="admin-main">
            <nav className="admin-navbar">
                <p>Exam Register</p>
                <div className="admin-right">
                    {whichComp && <button onClick={switchComp}>Users</button>}
                    {!whichComp && <button onClick={switchComp}>Exam</button>}
                    {whichComp && <button>Add</button>}
                    <button>Logout</button>
                </div>
            </nav>   
            {!whichComp && <AdminUser />}
            {whichComp && <AdminExam />}
        </div>
    )
}

export default Admin
