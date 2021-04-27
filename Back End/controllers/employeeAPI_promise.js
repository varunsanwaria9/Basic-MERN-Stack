// IMPORT EXPRESS SERVER
const express = require('express');

// USE Router FOR EXPRESS SERVER
const router = express.Router();

//IMPORT EMPLOYEE MODEL AND BIND IT
const EmpModel = require('../models/employee_schema_reg1');

const EmpModel2 = require('../models/employee_schema_reg2');

// URL :- localhost:4500/emp/register  (USING POSTMAN POST)
// post is used to INSERT DOCUMENT/RECORD
// CALLBACK using lambda 

//for normal user register
router.post('/register', (req, res) => 
                 {
                    
//Create Object of Employee Model Class
// And Receive value from request body and Store value within the Object
                   const empobj = new EmpModel({					   
                                 empname: req.body.name,
                                 empemail: req.body.email,
                                 empmobile: req.body.mobile,
                                 emppass: req.body.password,
                                 });//CLOSE EmpModel
     //INSERT/SAVE THE RECORD/DOCUMENT
                   empobj.save()
                         .then(inserteddocument => {
    res.status(200).send('DOCUMENT INSERED IN MONGODB DATABASE' +'<br\>'+ inserteddocument);
                               })//CLOSE THEN
                         .catch(err =>{
    res.status(500).send({ message: err.message || 'Error in Employee Save '})
                               });//CLOSE CATCH
                            }//CLOSE CALLBACK FUNCTION BODY Line 27
                            );//CLOSE POST METHOD Line 26

//for exam register
router.post('/examregister', (req, res) => 
                 {
                    
//Create Object of Employee Model Class
// And Receive value from request body and Store value within the Object
                   const empobj2 = new EmpModel2({					   
                                 empname: req.body.name,
                                 empemail: req.body.email,
                                 empmobile: req.body.mobile,
                                 empdob: req.body.dob,                                 
                                 empclgName: req.body.clgName,                                                                 
								 empexamName: req.body.examName,
                                 });//CLOSE EmpModel2
     //INSERT/SAVE THE RECORD/DOCUMENT
                   empobj2.save()
                         .then(inserteddocument => {
    res.status(200).send('DOCUMENT INSERED IN MONGODB DATABASE' +'<br\>'+ inserteddocument);
                               })//CLOSE THEN
                         .catch(err =>{
    res.status(500).send({ message: err.message || 'Error in Employee Save '})
                               });//CLOSE CATCH
                            }//CLOSE CALLBACK FUNCTION BODY Line 27
                            );//CLOSE POST METHOD Line 26
							
router.get('/', (req, res) => 
                {
                EmpModel2.find()
                          .then( getalldocumentsfrommongodb => {
    res.status(200).send(getalldocumentsfrommongodb);
                          }) //CLOSE THEN
                          .catch(err =>{
    res.status(500).send({ message: err.message || 'Error in Fetch Member '})
                          });//CLOSE CATCH
                } //CLOSE CALLBACK FUNCTION BODY Line 110      
          );//CLOSE GET METHOD Line 109  


// => localhost:4500/emp/remove/30     (USING POSTMAN DELETE)
//DELETE A DOCUMENT FROM MONGODB USING EMPID
//EmpModel.findOneAndRemove({"empid" : parseInt(req.params.empid)})
// => localhost:4500/emp/remove/abc@gmail.com     (USING POSTMAN DELETE)
//DELETE A DOCUMENT FROM MONGODB USING EMAILID
router.delete('/remove/:emailid', (req, res) =>
            {
  EmpModel.findOneAndRemove({"empemail" : req.params.emailid})
          .then( deleteddocument => { 
            if(deleteddocument != null)
            {  
  res.status(200).send('DOCUMENT DELETED successfully!' + deleteddocument);
            }  
            else
            {
  res.status(404).send('INVALID EMP ID '+ req.params.empid); 
            }
          }) //CLOSE THEN
          .catch( err => {
 return res.status(500).send({message: "DB Problem..Error in Delete with id " + req.params.empid });          
          })//CLOSE CATCH
             }//CLOSE CALLBACK FUNCTION BODY Line 60
            ); //CLOSE Delete METHOD Line 59


// localhost:4500/emp/10
//SEARCH EMPLOYEE BY EMPID
// "empid" : parseInt(req.params.empid) Convert empid String to Int
// EmpModel.find({"empid" : parseInt(req.params.empid)})

// localhost:4500/emp/abc@gmail.com
//SEARCH EMPLOYEE BY EMPEMAIL
// CALLBACK function for get method using lambda 
router.get('/search/:emailid', (req, res) => 
            {
      EmpModel.find({"empemail" : req.params.emailid})
            .then(getsearchdocument => {
              if(getsearchdocument.length >0) 
              {
                res.send(getsearchdocument);
              }
              else
              {
  return res.status(404).send({message: "Note not found with id " + req.params.empid });
              }
          }) //CLOSE THEN
            .catch( err => {
  return res.status(500).send({message: "DB Problem..Error in Retriving with id " + req.params.empid });           
            })//CLOSE CATCH
          }//CLOSE CALLBACK FUNCTION BODY Line 88
         );//CLOSE GET METHOD Line 87 

// BROWSER URL :- localhost:4500/emp 
// get IS USED FOR FETCHING DOCUMENTS FROM MONGODB
// CALLBACK using lambda 
router.get('/', (req, res) => 
                {
                EmpModel.find()
                          .then( getalldocumentsfrommongodb => {
    res.status(200).send(getalldocumentsfrommongodb);
                          }) //CLOSE THEN
                          .catch(err =>{
    res.status(500).send({ message: err.message || 'Error in Fetch Member '})
                          });//CLOSE CATCH
                } //CLOSE CALLBACK FUNCTION BODY Line 110      
          );//CLOSE GET METHOD Line 109  

router.post('/logincheck', (req, res) => 
                 {
                    console.log(req.body.email)
                    EmpModel.find({"empemail" : req.body.email,"emppass":req.body.password})
            .then(getsearchdocument => {
              if(getsearchdocument.length >0) 
              {
                res.send(getsearchdocument);
              }
              else
              {
  return res.status(404).send({message: "Note not found with id " + req.params.empid });
              }
          }) //CLOSE THEN
            .catch( err => {
  return res.status(500).send({message: "DB Problem..Error in Retriving with id " + req.params.empid });           
            })//CLOSE CATCH
          }//CLOSE CALLBACK FUNCTION BODY
         );//CLOSE GET METHOD  

router.put('/update', (req, res) => 
{
 EmpModel.findOneAndUpdate({"empemail" : req.body.email}, 
                           { $set: {"empmobile":req.body.mobile,
             "emppass": req.body.password             
             } }, { new: true })
       .then(getupdateddocument => {
         if(getupdateddocument != null)
            res.status(200).send('DOCUMENT UPDATED ' + getupdateddocument);  
         else
            res.status(404).send('INVALID EMAILID '+ req.body.email);
       }) // CLOSE THEN
       .catch(err => {
return res.status(500).send({message: "DB Problem..Error in UPDATE with id " + req.params.empid });
       }) // CLOSE CATCH
                         } //CLOSE CALLBACK FUNCTION Line No 108
                         ); //CLOSE PUT METHOD Line No 107



//SHOULD BE EXPORTED
module.exports = router;