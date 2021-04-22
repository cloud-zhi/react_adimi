import { render } from '@testing-library/react'
import React, { Component } from 'react'
import ReactDOM from 'react-dom';

// export default class Demo extends Component {
//     state={count:0}
//     add =() => {
//         this.setState(state => ({count:state.count+1}))
//     }
//     render() {
//         return (
//             <div>
//                 <h2>当前求和为{this.state.count}</h2>
//                 <button onClick={this.add}>点我+1</button>
//             </div>
//         )
//     }
// }


// useState

// function Demo() {
//     const [count,setCount]=React.useState(0)  //数组,设置状态，分别对应状态和更新状态的方法
//     const [name,setName]=React.useState('tom')
//     function add(){
//         // setCount(count+1) //第一种写法
//         setCount(count => count+1)  //第二种写法
//     }
//     function changeName(){
//         setName('lily')
//     }
//     return (<div>
//         <h2>当前求和是：{count}</h2>
//         <h2>我叫：{name}</h2>
//         <button onClick={add}>点我+1</button>
//         <button onClick={changeName}>点我改名</button>
//     </div>)
// }


//useEffect

// function Demo() {
//     const [count,setCount]=React.useState(0)  //数组,设置状态，分别对应状态和更新状态的方法

//     React.useEffect(() => {
//         let timer=setInterval(() => {
//             setCount(count+1)
//         },1000)
//         return () =>{
//             clearInterval(timer)
//         }
//     },[])
//     function add(){
//         // setCount(count+1) //第一种写法
//         setCount(count => count+1)  //第二种写法
//     }
//     function unMount(){
//         ReactDom.unMountComponentAtNode(document.getElementById('root'))
//     }
//     return (<div>
//         <h2>当前求和是：{count}</h2>
//         <button onClick={add}>点我+1</button>
//         <button onClick={unMount}>点我卸载</button>
//     </div>)
// }


//useRef
function Demo() {

    const [count,setCount]=React.useState(0)  //数组,设置状态，分别对应状态和更新状态的方法
    const myRef = React.useRef()

    React.useEffect(() => {
        let timer=setInterval(() => {
            setCount(count+1)
        },1000)
        return () =>{
            clearInterval(timer)
        }
    },[])
    function add(){
        // setCount(count+1) //第一种写法
        setCount(count => count+1)  //第二种写法
    }
    function show(){
        alert(myRef.current.value)
    }

    return (<div>
        <input type="text" ref={myRef}/>
        <h2>当前求和是：{count}</h2>
        <button onClick={add}>点我+1</button>
        <button onClick={show}>点我提示数据</button>
    </div>)
}

export default Demo;
