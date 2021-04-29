import React,{ useState,useEffect } from 'react';
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import './CSS/UserExamRegister.css';


function UserExamRegister(props) {
  const exam = props.match.params.examName
  const [regExamObj,setRegExamObj] = useState({name:"",email:"",mobile:"",dob:"",clgName:"",examName:exam})
  let history = useHistory()
  const examDetails = {
    Apex2021:{question:10,date:"12 May 2021 12pm",duration:"120 Minutes"},
    CodeforCause:{question:4,date:"20 May 2021 8pm",duration:"180 Minutes"},
    MayLongChallenge:{question:10,date:"8 May 2021 12pm",duration:"6 Days"},
    WeeklyChallenge:{question:4,date:"2 May 2021 9am",duration:"180 Minutes"}
  }
  const changeName = (evt) => setRegExamObj({...regExamObj,name:evt.target.value})
  const changeEmail = (evt) => setRegExamObj({...regExamObj,email:evt.target.value})
  const changeMobile = (evt) => setRegExamObj({...regExamObj,mobile:evt.target.value})
  const changeDob = (evt) => setRegExamObj({...regExamObj,dob:evt.target.value})
  const changeClgName = (evt) => setRegExamObj({...regExamObj,clgName:evt.target.value})  

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(`Student Registered 
          Name: ${regExamObj.name}
          Email: ${regExamObj.email}`)
    axios.post('http://localhost:4500/emp/examregister',regExamObj)
      .then(res => {
        console.log(res.data);
      })
    setRegExamObj({name:"",email:"",mobile:"",dob:"",clgName:""})
    history.push("/userafterlogin")
  }

  useEffect(() => {
    if(sessionStorage.getItem("Key_Veriable")!=="USER") history.push("/")
  })

  return (
    <div>
      <div className="examRegister-left">
        <span className="examregistration-head">{exam} Challenge</span>
        <div className="examregistration-other">
          <span className="examregistration-Label"><strong>Number Of Question:</strong>{examDetails[exam].question}</span>
        </div>
        <div className="examregistration-other">
          <span className="examregistration-Label"><strong>Date&Time:</strong>{examDetails[exam].date}</span>
        </div>
        <div className="examregistration-other">
          <span className="examregistration-Label"><strong>Duration:</strong>{examDetails[exam].duration}</span>
        </div>
      </div>
      <div class="examRegister-right">
        <span className="examregistration-title">Registration</span>
        <form className="examregistration-form" onSubmit={handleSubmit}>
        <label>Name</label>
        <input 
          type="text" 
          value={regExamObj.name}
          onChange={changeName}
          placeholder="Enter name"
          required/>
        <label>Email</label>
        <input type="text" 
          value={regExamObj.email}
          onChange={changeEmail}
          placeholder="Enter email"
          required/>
        <label>Mobile</label>
        <input 
          type="text" 
          value={regExamObj.mobile}
          onChange={changeMobile}
          placeholder="Enter mobile number"
          required/>
        <label>DOB</label>
        <input 
          type="date" 
          value={regExamObj.dob}
          onChange={changeDob}
          placeholder="Enter dob" 
          required/>
        <label>College</label>
        <input 
          type="text"  
          value={regExamObj.clgName}
          onChange={changeClgName}
          placeholder="Enter college name" 
          required/>
        <button type="submit" className="btn btn-primary btn-examReg">Register</button>
        </form>
      </div>
    </div>
  );
}

export default UserExamRegister;
