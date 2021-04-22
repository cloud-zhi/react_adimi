import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import './index.css'

export default class Header extends Component {
    handle=(e)=>{ //输入的回调
        const {target,keyCode}=e;
        if(keyCode!==13){  //当输入不是回车时
            return
        }
        if(target.value.trim()===''){  //当输入时空格时
            alert('内容不能为空')
            return
        }
        const newTodo={id:nanoid(),name:target.value,done:false}; //通过nanoid获取随机id
        this.props.addTodo(newTodo)
        target.value='';
    }
    render() {
        return (
            <div>
                <div className="todo-header">
                    <input type="text" placeholder="请输入你的任务名称，按回车键确认" onKeyUp={this.handle}/>
                </div>
            </div>
        )
    }
}
