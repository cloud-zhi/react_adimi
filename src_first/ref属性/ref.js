import React from 'react';

class Ref extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(<div>
            <p>用户名：<input type="text" ref="name"></input></p>
            <p>密码：<input type="password" ref={(element)=>{this.setTextInput=element}} onBlur={this.showData}></input></p>
            <button ref="btn" onClick={this.getFormData}>登录</button>
        </div>)
    }
    getFormData=()=>{
        let name=this.refs.name.value
        // let pwd=this.refs.pwd.value
        console.log(name)
    }
    showData=()=>{
        const inputs=this.setTextInput;
        console.log(inputs)
    }
}
export default Ref