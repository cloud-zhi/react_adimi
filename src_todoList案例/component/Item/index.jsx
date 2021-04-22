import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
    state={isEnter:false}

    //鼠标划入特效
    mousePosition=(position)=>{
        this.setState({isEnter:position})
    }
    //判断checkbox是否被选中，获取当前id值。
    handleCheckbox=(todoId) => {
        return (event)=>{
            this.props.updataTodo(todoId,event.target.checked)
        }
    }
    //删除一个事件
    handleDelete=(todoId) => {
        if(window.confirm('真的想要删除吗？')){
            this.props.deleteTodo(todoId)
        }
    }
    render() {
        const {id,name,done}=this.props;
        const {isEnter}=this.state
        return (
            <div>
                <li onMouseEnter={()=>{this.mousePosition(true)}} onMouseLeave={()=>{this.mousePosition(false)}} style={{background:isEnter?'#ddd':'white'}}>
                    <label>
                        <input type="checkbox" checked={done} onChange={this.handleCheckbox(id)}/>
                        <span>{name}</span>
                    </label>
                    <button className="btn btn-danger" style={{display:isEnter?'block':'none'}} onClick={()=>{this.handleDelete(id)}}>删除</button>
                </li>
            </div>
        )
    }
}
