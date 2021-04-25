const schema_mongoose = require('mongoose');

const EmployeeSchema = schema_mongoose.Schema(
    {
    empname: { type: String },
    empemail: { type: String },
    empmobile: { type: String },    
    emppass: { type: String },
    }, 
    {
       timestamps: true
    }
    );

module.exports = schema_mongoose.model('emp_schema_collection', EmployeeSchema);