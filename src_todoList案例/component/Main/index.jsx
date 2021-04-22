import React, { Component } from 'react'
import Item from '../Item'
import './index.css'

export default class Main extends Component {
    render() {
        const {todos,updataTodo,deleteTodo}=this.props
        return (
            <div>
                <ul className="todo-main">
                    {
                        todos.map((todo) => {  //根据todos的多少来显示，所以要对todos进行遍历。
                            return <Item key={todo.id} {...todo} updataTodo={updataTodo} deleteTodo={deleteTodo}/>  //对todo使用扩展运算符，就可以将其全部属性都传过去。
                        })
                    }
                </ul>
            </div>
        )
    }
}
