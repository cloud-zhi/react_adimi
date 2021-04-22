import React from "react";
import{connect} from "react-redux"
class Child extends React.Component{
  constructor(){
    super()
  }
  render(){
    return(
     <div>
       <button onClick={()=>{this.changeColor('red')}} style={{"color":this.props.color}}>RED</button>
       <button onClick={()=>{this.changeColor('blue')}} style={{"color":this.props.color}}>BLUE</button>
     </div>
    )
  }
  changeColor=(c)=>{
    return this.props.change(c)
  }
}
function mapStateToProps(state){
   return state
}
function mapDispatchToProps(dispatch){
   return {
       change:function(c){ dispatch({type:"change",data:c})}
   }
}
export default connect(mapStateToProps,mapDispatchToProps)(Child);