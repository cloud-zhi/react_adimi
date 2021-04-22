import React from 'react';

class Login extends React.Component{
    constructor(){
        super()
        this.state={
            'isLogin':false
        }
    }
    render(){
        //条件判断
        // if(!this.state.isLogin){
        //     return <div>
        //     <button onClick={this.login}>登录</button>
        // </div>
        // }
        // else{
        //     return <div>欢迎登录</div>
        // }

        //运算符&&判断
        // return <div>
        //     <button onClick={this.login}>登录</button>
        //     {this.state.isLogin && <div>hello world</div>}
        // </div>

        //三目运算符
        return <div>
            {this.state.isLogin?<div onClick={this.login}>欢迎登录</div>:<div><button onClick={this.login}>登录</button></div>}
        </div>
    }

    
    login=()=>{
        this.setState({'isLogin':!this.state.isLogin})
    }
}
export default Login