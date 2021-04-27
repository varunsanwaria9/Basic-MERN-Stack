import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import "./CSS/Login.css"

function Login(props) {
    const [loginObj , setLoginObj] = useState({email:"",password:""})
    const [msg , setMsg] = useState("") 

    const changePwd = (evt) => setLoginObj({...loginObj,password:evt.target.value})
    const changeEmail = (evt) => setLoginObj({...loginObj,email:evt.target.value})

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if((loginObj.email === "admin") && (loginObj.password === "admin")){
            sessionStorage.setItem("Key_Veriable", 'ADMIN')
            setMsg('WELCOME ADMIN')
            props.history.push('/adminafterlogin')
        }
        else{
                console.log(`EMAIL: ${loginObj.email}`);
                console.log(`PASS: ${loginObj.password}`);
            
                axios.post('http://localhost:4500/emp/logincheck', loginObj)
                .then(res => {
                    console.log(res.data)
                    sessionStorage.setItem("Key_Veriable", 'USER')
                    sessionStorage.setItem("useremail", res.data[0].empemail)
                    sessionStorage.setItem("username", res.data[0].empname)
                    props.history.push('/userafterlogin')
                })
                .catch(err => {
                    console.log(err)
                    setMsg('INVALID UID OR PASSWORD')
                })
                setLoginObj({email:"",password:""})
        }
    }

    let history = useHistory()
    const regRedirect = () => history.push("/reg")

    return (
        <div className="login">
            <form className="login-form" onSubmit={handleSubmit}>
                <span className="login-title">Login</span>
                <span className="login-errmsg">{msg}</span>
                <label>Email</label>
                <input 
                    type="text"
                    className="login-input"
                    value={loginObj.email}
                    onChange={changeEmail}
                    required/>
                <label>Password</label>
                <input 
                    type="password"
                    className="login-input"
                    value={loginObj.password}
                    onChange={changePwd}
                    required/>
                <button type="submit" className="btn btn-primary">Log In</button>
                <span className="login-reg">Not a user?<button onClick={regRedirect}>Sign Up</button></span>
            </form>
        </div>
    )
}

export default Login
