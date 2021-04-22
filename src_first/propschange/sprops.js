import React from 'react';

class Sprops extends React.Component{
    constructor(props){
        super(props)
        this.state={
            changestate:'init'
        }
    }
    componentWillReceiveProps(newProps){
        this.setState({changestate:newProps})
    }
    render(){
        return (<div>{this.state.changestate}</div>)
    }
}