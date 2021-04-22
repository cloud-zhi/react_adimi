import React from 'react';
import {Redux,createStore} from 'redux'

let add_action = function (value) {  //创建action函数
    return {
        type: 'add',
        data: value,   //负载
    }
}

function reducer(prevstate, action) {  //创建reducer函数
    switch (action.type) {
        case 'add':
            return {'goods':[...prevstate.goods,action.data]}
            break;
        case 'del':
            return prevstate;
            break;

    }
}

let objext_state = { 'goods': ['milk', 'apple'] }
let Store = createStore(reducer, objext_state) //创建store函数

class Action extends React.Component {

    addGoods=()=>{
        Store.dispatch(add_action(this.refs.g.value))
    }
    render() {
        let g_data=Store.getState()
        console.log(g_data)
        return (<div>
            <p>
                <input ref='g'></input>
                <button onClick={this.addGoods}>添加</button>
            </p>
            <ul></ul>
        </div>)
    }
}

export default Action