import React from 'react'

class Fprops extends React.Component{
    state={data:'123'}

    componentWillMount(){
        console.log('compoentWillMount')
    }
    constructor(props){
        super(props)
        this.state={
            navbar:'hello'
        }
    }
    render(){
        return(<div>
            <Sprops propsdata={this.state.navbar}></Sprops>
        </div>)
    }
}