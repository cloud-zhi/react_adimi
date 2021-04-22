import React from "react"
import Nav2 from "../nav/nav2.js"

import "../nav/nav1.css"

class Nav1 extends React.Component {
    constructor() {
        super()
        this.state = { abc: { display: "none" } }
    }
    onMouseOver = () => {
        this.setState({ abc: { display: "block",tranistion:"all 2s"} })
    }
    onMouseOut = () => {
        this.setState({ abc: { display: "none" } })
    }
    // onMouseOut1 = () => {
    //     setTimeout(() => {
    //         this.setState({ abc: { display: "none" } })
    //     }, 500)

    // }

    render() {
        return (
            <div className="head-menu">
                <div className="nav">
                    <div className="container">
                        <div >当前园区：宏福孵化器
                            <div className="mysel" onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}>【切换】<div  style={this.state.abc}  >< Nav2 /></div></div>
                        </div>
                        <div className="pull-right">
                            <a href="">登录</a>
                             丨
                            <a href="">注册</a>
                        </div>

                    </div>
                </div>

            </div>
        )
    }
}
export default Nav1