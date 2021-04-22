import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter,Route} from 'react-Route-dom'
import App from './../app'
import Fprops from './router/router1'
import Sprops from './router/router2'

class Fprops extends React.Component{

    render(){
        return(<div>
            <h1>hhhh</h1>
        </div>)
    }
}

// ReactDOM.render(<BrowserRouter>
//     <App1>
//        <Route path='/home' component={Fprops} exact></Route>
//        <Route path='/about' component={Sprops}></Route>
//     </App1>
//     </BrowserRouter>,document.getElementById('root'));
