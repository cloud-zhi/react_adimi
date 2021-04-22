import React from 'react'
import "../header/input1.css"
class Input1 extends React.Component{
    constructor(){
        super()
        this.state={aa:{border: "1px solid #ccc"}}
    }
    border1=()=>{
        this.setState={aa:{border:" 1px solid #2289cb"}}
    }
    render(){
        return<div className="input1">         
        <input onBlur={this.border1} style={this.state}placeholder="输入关键字查询" className="ant-input" type="text"></input>
        <span className="ipon">
            <img src={require('../img/sousuo1.png').default} />
        </span>

</div>
    }
}
export default Input1
