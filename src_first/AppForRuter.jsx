import React, { Component } from 'react'
import { Link, BrowserRouter, Route ,Redirect} from 'react-router-dom'
import Home from './component/Home/Home'
import About from './component/About/About'


export default class AppForRuter extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                {/* params方式 */}
                    {/* <Link to={`/about/我是摇摆羊`}>About</Link> */}
                {/* search方式 */}
                    {/* <Link to={`/about/?id=1&name=吕泽准`}>About</Link> */}
                {/* state方式 */}
                    <Link to={{pathname:'about',state:{id:233,name:'我叫眯眯眼'}}}>About</Link>
                    <Link to='/home'>HOME</Link>


                    {/*  params方式声明*/}
                    {/* <Route path='/about/:name' component={About}></Route> */}
                    {/* search方式声明 ,无需声明*/}
                    {/* state方式声明 ,无需声明*/}
                    <Route path='/about' component={About}></Route>
                    <Route path='/home' component={Home}></Route>
                    <Redirect to='/home'></Redirect>
                    
                </BrowserRouter>
            </div>
        )
    }
}
