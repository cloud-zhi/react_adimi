import React from "react"
import "../index.css"
import "../nav/nav2.css"

class Nav2 extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
                    <div className="park" ref="cl">
                        <p>选择园区</p>
                        <img src={require('../img/nav1.png').default} />
                        ...
                    </div>
                   
        )
    }
    
    componentDidMound(){
       console.log("111");
        // setTimeout(()=>{
            
        //     this.ref.style={display:"none"}
        // },2000)
    }
}
export default Nav2