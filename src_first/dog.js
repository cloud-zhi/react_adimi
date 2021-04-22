import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './class1'

class Mmd extends React.Component{

    constructor(){
        super()
    }
    render(){
        return <div>{this.props.ad}</div>
    }
}
// function Mmd(props){
//     return <div>
//         <h3>dog</h3>
//     </div>
// }

export default Mmd;