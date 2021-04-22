import React from 'react'

class MMap extends React.Component{
    constructor(){
        super();
        this.state={
            'name':['lily','tom','jack','juerry'],
            'stu':{'namea':'lily','age':'20','sex':'male'}
        }
    }
    render(){
        const nerName=this.state.name.map((value,index)=><li key={index}>{value}</li>);
        const newstu=Object.values(this.state.stu).map((value,index)=><td key={index}>{value}</td>);
        return <div>
            <ul>
               {nerName}
            </ul>
            <table>
                <tr>
                    {newstu}
                </tr>
            </table>
        </div>
    }
}
export default MMap