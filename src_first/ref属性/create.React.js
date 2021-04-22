import React from 'react';
import Dom from '../kk'

class CreateRef extends React.Component{
    constructor(){
        super();
        this.name=React.createRef();
        this.pwd=React.createRef();
        this.nav=React.createRef();
    }
    render(){
        return(<div>
            <p>用户名：<input type="text" ref={this.name}></input></p>
            <p>密码：<input type="password" ref={this.pwd}></input></p>
            <button onClick={this.getFormData}>登录</button>
            <Dom ref={this.nav}></Dom>
        </div>)
    }
    getFormData=()=>{
        let name=this.name.current;
        let pwd=this.pwd.current;
        console.log(this.nav.current)
    }
}
export default CreateRef