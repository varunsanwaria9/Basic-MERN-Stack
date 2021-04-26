import React, { useState }from 'react'
import AdminUser from './AdminUser'

function Admin() {
    
    return (
        <div>
            <nav>
                <p>Exam Register</p>
                <div className="admin-right">
                    <button>Home</button>
                    <button>Users</button>
                    Dropdown
                </div>
            </nav>   
        </div>
    )
}

export default Admin
