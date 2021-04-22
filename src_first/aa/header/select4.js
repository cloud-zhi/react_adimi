import React from "react"
import "../index.css"
import "../header/select4.css"
class Select4 extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className="select4">
                <div>会议厅预定</div>
                <div>广告位预定</div>
                <div>工位预定</div>
                <div>场地预定</div>
             </div>
                   
        )
    }

}
export default Select4