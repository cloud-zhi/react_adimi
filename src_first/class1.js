import React from "react";
import Mmd from './dog'
import Dom from './kk'
import img from './img/water.jpg'

// 类式传参
class Nav extends React.Component {
    constructor(){
        super();
        this.state={ //设置状态
            'x':'你好',
            'data':'wo'
        }
    }
    render(){
        return <div>
            <div><span>from son  </span>  {this.state.data}</div>
            <button onClick={this.changeState}>clickMeToChange</button>{/*点击触发事件*/}
            <div>
                <img src={require("./img/water.jpg").default}/>
            </div>
            {/* <Dom aa={this.props.ff}></Dom> */}
        </div>
    }
    changeState=()=>{  //箭头函数改变this指向
        // console.log(this.state);
        this.setState({'x':'lily'}) //修改状态,setState()是异步的方法，故第一次输出是'你好'；后才是'lily'。
        this.props.fn(this.state.data) //利用props属性调用传递的回调函数，并将子向父要传递的数据作为参数。
    }
}


//函数式传参
// function Nav(props){
//     return<div>
//         <h2>班级</h2>
//         <button onClick={this}></button>
//     </div>
// }
export default Nav;