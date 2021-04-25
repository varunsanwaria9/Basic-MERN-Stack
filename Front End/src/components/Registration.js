import React, { useState } from 'react'
import axios from 'axios';
import "./CSS/Registration.css"

function Registration() {
    const [registerObj , setRegisterObj] = useState({name:"",email:"",mobile:"",password:""})
    const [msg , setMsg] = useState("") 
    
    const changeName = (evt) => setRegisterObj({...registerObj,name:evt.target.value});
    const changeEmail = (evt) => setRegisterObj({...registerObj,email:evt.target.value});
    const changeMobile = (evt) => setRegisterObj({...registerObj,mobile:evt.target.value});
    const changePwd = (evt) => setRegisterObj({...registerObj,password:evt.target.value});

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(`Form submitted:`);
        console.log(`NAME: ${registerObj.name}`);
        console.log(`EMAIL: ${registerObj.email}`);

        
        axios.post('http://localhost:4500/emp/register', registerObj)
            .then(res => {
                console.log(res.data)
                setMsg('REGISTRATION SUCCESSFUL')
            })
            .catch(err => {
                console.log(err)
                setMsg('INVALID UID OR PASSWORD')
              })

            setRegisterObj({name:"",email:"",mobile:"",dob:"",password:"",gender:""})

    }

    return (
        <div className="register">
            <br />
            <form className="register-form" onSubmit={handleSubmit}>
            <span className="register-title">Registration</span>
            <span className="register-errmsg">{msg}</span>
            <label>Name</label>
                <input type="text" value={registerObj.name} className="register-input"
                    onChange={changeName} placeholder="Enter Name"
                    required />
                <br /><br />
                <label>Email</label>
                <input type="email" value={registerObj.email} className="register-input"
                    onChange={changeEmail} placeholder="Enter Email"
                    required />
                <br /><br />
                <label>Mobile Number</label>
                <input type="number" value={registerObj.mobile} className="register-input"
                    onChange={changeMobile} placeholder="Enter Mobile No"
                    required />
                <br /><br />
                <label>Password</label>
                <input type="password" value={registerObj.password} className="register-input"
                    onChange={changePwd} placeholder="Enter Password"
                    required />
                <button type="submit" className="btn btn-primary register-btn">Register</button>
                <span className="register-reg"></span>
            </form>
        </div>
    )
}


export default Registration