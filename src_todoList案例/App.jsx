import React, { Component } from 'react';
import Header from './component/Header/index.jsx'
import Footer from './component/Footer/index.jsx'
import Main from './component/Main/index.jsx'
import './App.css'

export default class App extends Component {
    //初始化状态
    //状态在哪里，操作状态的方法就在那里
    state={  //要传递对象，因为要传递的信息比较多
        todos:[
            {id:'001',name:'吃饭',done:false},
            {id:'002',name:'睡觉',done:true},
            {id:'003',name:'打豆豆',done:false},
            {id:'004',name:'玩手机',done:true},
        ]
    }

    //用于添加新的todo，接受的应该是一个对象
    addTodo = (todoobj) =>{
        const newTodos=[todoobj,...this.state.todos]  //创建一个新的todos，把新传过来的放在前面
        this.setState({todos:newTodos})
    }
    //用于更新todo的状态值
    updataTodo=(todoId,done) => {
        const {todos}=this.state;
        const newTodo=todos.map((todoObj) => {
            if(todoObj.id===todoId) return{...todoObj,done:done}  //如果id相同，即意为改变，则将这个对象分解，用新传过来的done覆盖；
            else return todoObj  //否则返回原对象
        })
        this.setState({todos:newTodo})
    }
    //用于删除todo
    deleteTodo=(todoId)=>{
        const {todos}=this.state;
        const newTodo=todos.filter((todoObj) => {
            return (todoObj.id!==todoId);
        })
        this.setState({todos:newTodo})
    }
    //用于全选
    checkAllTodo=(done)=>{
        const {todos}=this.state;
        const newTodos=todos.map((todos) => {
            return {...todos,done}
        })
        this.setState({todos:newTodos})
    }
    //用于删除所有已完成
    deleteDone=() => {
        const {todos}=this.state;
        const newTodos=todos.filter((todoObj) => {
            return !todoObj.done
        })
        this.setState({todos:newTodos})
    }
    render() {
        const {todos}=this.state
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo}/>
                    <Main todos={todos} updataTodo={this.updataTodo} deleteTodo={this.deleteTodo}/>
                    <Footer todos={todos} checkAllTodo={this.checkAllTodo} deleteDone={this.deleteDone}/>
                </div>
            </div>
        )
    }
}
