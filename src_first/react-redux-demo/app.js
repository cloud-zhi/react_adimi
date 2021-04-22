import React from "react";
import Child from "./child";
import {connect} from "react-redux";
class App extends React.Component{
  constructor(){
    super()
  }
  render(){
    return(
     <div>
       <h1 style={{color:this.props.color}}>this is app</h1>
       <Child></Child>
     </div>
    )
  }
}
function mapStateToProps(state){
  return {plist:state}
}
export default connect(mapStateToProps)(App);
