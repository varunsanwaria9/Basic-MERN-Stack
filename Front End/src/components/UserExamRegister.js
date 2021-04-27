import React,{ useState } from 'react';
import './UserExamRegister.css';


function UserExamRegister() {
  const [regExamObj,setRegExamObj] = useState({name:"",email:"",mobile:"",dob:"",clgName:""})
  
  const changeName = (evt) => setRegExamObj({...regExamObj,name:evt.target.value})
  const changeEmail = (evt) => setRegExamObj({...regExamObj,email:evt.target.value})
  const changeMobile = (evt) => setRegExamObj({...regExamObj,mobile:evt.target.value})
  const changeDob = (evt) => setRegExamObj({...regExamObj,dob:evt.target.value})
  const changeClgName = (evt) => setRegExamObj({...regExamObj,clgName:evt.target.value})
  
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(regExamObj);
  }
  return (
    <div>
      <div className="examRegister-left">
        <span className="examregistration-title">EXAM NAME</span>
        <div className="examregistration-other">
          <span className="examregistration-questionLabel"><strong>Number Of Question:</strong>30 Questions</span>
        </div>
        <div className="examregistration-other">
          <span className="examregistration-timeLabel"><strong>Date&Time:</strong>10 May 2021 3:00pm</span>
        </div>
        <div className="examregistration-other">
          <span className="examregistration-durationLabel"><strong>Duration:</strong>60 Minutes</span>
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
