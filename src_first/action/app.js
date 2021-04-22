import React from "react";
import { createStore } from "redux";
import Store from './store'

class AppTT extends React.Component {
  constructor() {
    super()
    this.state = { "good": Store.getState().goods } //读取数据，显示初始数据
  }
  
  render() {
    let g;
    g = this.state.good.map( (value, index)=> {   //遍历状态中的数据，放在li中
      return <li key={index}>{value} <button dataindex={index}>delete</button></li>
    })
    return <div>
      <p>
        <input type="text" ref="g" /><button onClick={this.addGoods}>添加</button>
      </p>
      <ul onClick={this.delGoods} >{g}</ul>
    </div>
  }
  addGoods = () => {
    // Store.dispatch(add_action(this.refs.g.value)); //分发action，把input中的数据放入action中。
  }
  delGoods=(e)=>{
    if(e.target.nodeName=='BUTTON'){
      let index=e.target.getAttribute('dataindex');     //获取当前的index值
      // Store.dispatch(del_action(index));   //分发action，把要删除的数据的index放在action。
    }
  }
  componentDidMount() {
    Store.subscribe(() => {  // 监听，store中的数据是否发生了变化
      this.setState({ "good": Store.getState().goods }) //将变化了数据放在状态中
    })
  }
}
export default AppTT;