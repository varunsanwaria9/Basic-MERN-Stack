import React, { Component } from 'react'

export class Table extends Component {
    render() {
        if(this.props.examName==this.props.ele.empexamName){
            return (
                <tr key={this.props.idx}>
                 <td>{this.props.ele.empname}</td>
                 <td>{this.props.ele.empemail}</td>
                 <td>{this.props.ele.empmobile}</td>
                 <td>{this.props.ele.empdob}</td>
             </tr>
            )
        }
        else return null
    }
}

export default Table
