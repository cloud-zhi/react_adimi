import React, { Component } from 'react'
import qs from 'querystring'

export default class About extends Component {
    render() {
        // console.log(this.props)
        // console.log(this.props.location)
        // const {search}=this.props.location
        // console.log(search)
        // 接收search
        // const {id,name}=qs.parse(search.slice(1))
        // console.log(id,name)

        // console.log(qs.parse(this.props.location))
        console.log(this.props.location.state)
        const {id,name}=this.props.location.state
        console.log(id,name)
        return (
            <div>
                ABOUT
                我是摇摆羊
            </div>
        )
    }
}


