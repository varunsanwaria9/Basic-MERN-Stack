import React, { useState, useEffect } from 'react'
import axios from 'axios'
import "./CSS/AdminUpdate.css"

function AdminUpdate(props) {
    const [adminUpObj , setadminUpObj] = useState({name:"",email:"",mobile:"",password:""})
    const [msg , setMsg] = useState("") 
    
    const changeName = (evt) => setadminUpObj({...adminUpObj,name:evt.target.value});
    const changeEmail = (evt) => setadminUpObj({...adminUpObj,email:evt.target.value});
    const changeMobile = (evt) => setadminUpObj({...adminUpObj,mobile:evt.target.value});
    const changePwd = (evt) => setadminUpObj({...adminUpObj,password:evt.target.value});

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(`Form submitted:`);
        console.log(`NAME: ${adminUpObj.name}`);
        console.log(`EMAIL: ${adminUpObj.email}`);

        axios.put('http://localhost:4500/emp/update', adminUpObj)
            .then(res => {
                console.log(res.data)
                setMsg('PROFILE UPDATED')
            })
            .catch(err => console.log(err))

            setadminUpObj({name:"",email:"",mobile:"",password:""})

    }

    //Similar to componentDidMount and componentDidUpdate
    useEffect(() => {
        let emailid = sessionStorage.getItem('useremail')
        if (emailid == null)
            emailid = props.email
        axios.get('http://localhost:4500/emp/search/' + emailid)
            .then(response => {
                console.log(response.data)
                const { adminUpObj } = response.data[0]
                setadminUpObj({name:adminUpObj.name,email:adminUpObj.email,mobile:adminUpObj.mobile,password:adminUpObj.password})
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    return (
        <div className="adminUp">
        <form className="adminUp-form" onSubmit={handleSubmit}>
        <span className="adminUp-title">ADMIN PROFILE UPDATE</span>
        <span className="adminUp-errmsg">{msg}</span>
        <label>Name</label>
            <input type="text" value={adminUpObj.name} className="adminUp-input"
                onChange={changeName} readOnly />
            <br /><br />
            <label>Email</label>
            <input type="email" value={adminUpObj.email} className="adminUp-input"
                onChange={changeEmail} readOnly />
            <br /><br />
            <label>Mobile Number</label>
            <input type="number" value={adminUpObj.mobile} className="adminUp-input"
                onChange={changeMobile} required />
            <br /><br />
            <label>Password</label>
            <input type="password" value={adminUpObj.password} className="adminUp-input"
                onChange={changePwd} required />
            <button type="submit" className="btn btn-primary adminUp-btn">UPDATE PROFILE</button>
            <span className="adminUp-reg"></span>
        </form>
    </div>
    )
}

export default AdminUpdate