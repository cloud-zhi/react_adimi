import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
    handleChooseAll=(e)=>{
        this.props.checkAllTodo(e.target.checked)
    }
    handleCleanDoen=() => {
        this.props.deleteDone()
    }
    render() {
        const {todos}=this.props;
        //计算已完成
                    // const newTodos=todos.filter((todoObj) => {  //filter方法
                    //     return todoObj.done
                    // })
                    // let doneTodos=newTodos.length;
        const doneTodos=todos.reduce((pre,todoObj) =>pre+(todoObj.done?1:0),0)  //reduce方法
        //全部的
        let doneTotal=todos.length;
        return (
            <div>
                <div className="todo-footer">
                    <label>
                        <input type="checkbox" checked={(doneTodos===doneTotal&&doneTotal!==0)?true:false} onChange={this.handleChooseAll}/>
                    </label>
                    <span><span>已完成{doneTodos}</span> / 全部{doneTotal}</span>
                    <button className="btn btn-danger" onClick={this.handleCleanDoen}>清除已完成任务</button>
                </div>
            </div>
        )
    }
}
