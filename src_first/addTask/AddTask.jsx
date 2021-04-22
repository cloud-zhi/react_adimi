import React, { Component } from 'react'
import { connect } from "react-redux"
import './hideMe.css'

let num = 0;
class AddTask extends Component {
    state = {
        'hideDidItTask': true,
        'changeState': ''
    }
    addTask = () => {
        this.props.add(this.refs.myinput.value)  //将input中的元素通过props分发给action
    }
    delTask = (delId) => {
        this.props.del(delId)
    }
    changeTask = (changeId) => {
        console.log(this)
        let aaa=this.props.plist.filter((value) => {
            return value.id==changeId
        })
        aaa[0].isDidIt=!aaa[0].isDidIt
        if(aaa[0].isDidIt){
            document.getElementById('delLine' + changeId).style = 'text-decoration: line-through';  // 增加横线，不用驼峰？，是根据span的唯一id。
        }else{
            document.getElementById('delLine' + changeId).style = 'text-decoration: none'  //根据唯一id找到它
        }
    }
    hideDidItTask = () => {
        let stateArray=[];
        this.props.plist.map((value) => {
            if(value.isDidIt==true){
                stateArray.push(value.id)
            }
        })
        if(this.state.hideDidItTask){
            stateArray.map((value) => {
                this.setState({['isHideIt'+value]:'hide'})
            })
            this.setState({ 'hideDidItTask': false })
        }else{
            stateArray.map((value) => {
                this.setState({['isHideIt'+value]:''})
            })
            this.setState({ 'hideDidItTask': true })
        }
    }
    cleanDitIt = () => {
        let stateArray=[];
        this.props.plist.map((value) => {
            if(value.isDidIt==true){
                stateArray.push(value.id)
            }
        })
        this.props.clean(stateArray)
    }
    render() {
        console.log(this.state)
        let list = this.props.plist.map((value, index) => {
            return <li key={value.id} className={this.state['isHideIt' + value.id]}><input type='checkbox' onChange={() => { this.changeTask(value.id) }} /><span id={'delLine' + value.id}>{value.name}</span><a href='#!' onClick={() => { this.delTask(value.id) }} dataindex={value.id} id={'delbutton' + value.id}>删除</a></li>
        })
        return (
            <div>
                <input type="text" ref='myinput' />  <button onClick={this.addTask}>添加</button>
                <div><span>是否完成 </span><span> 项目名称 </span><span> 是否删除</span></div>
                <ul>{list}</ul>
                <button onClick={this.hideDidItTask}>已完成显示开关</button><button onClick={this.cleanDitIt}>清除已完成</button>
            </div>
        )
    }
}
function mapStateToProps(state) { //store中的数据
    return { plist: state }
}
function mapDispatchToProps(dispatch) {  //分发参数
    return {
        add: function (value) { dispatch({ type: 'add', data: { id: num++, name: value, isDidIt: false } }) },
        del: function (id) { dispatch({ type: 'del', data: id }) },
        clean:(id) => {
           dispatch({type:'clean',data:id}) 
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTask)
