import React from "react"
import "../index.css"
import "../header/header.css"
import Input1 from "../header/input1.js"
import Select1 from '../header/select1.js'
import Select2 from "../header/select2.js"
import Select3 from "../header/select3.js"
import Select4 from "../header/select4.js"
class Header extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
                    <div className="container">
                        <img className="headerimg" src={require("../img/logo3.png").default}></img>
                        <ul className="headernav">
                            <li><a href="">首页</a></li>
                            <li><a href="">活动</a></li>
                            <li><a href="">服务</a>
                                <div><Select1></Select1></div>
                            </li>
                            <li><a href="">园区</a>
                                <div><Select2></Select2></div>
                            </li>
                            <li><a href="">空间</a>
                            <div><Select4></Select4></div>
                            </li>
                            <li><a href="">资讯</a>
                                <div><Select3></Select3></div>
                            </li>
                            <li><a href="">政策</a></li>
                            <li><a href="">我的</a></li>
                        </ul>
                        <div><Input1></Input1></div>
                    </div>
                   
        )
    }
}
export default Header