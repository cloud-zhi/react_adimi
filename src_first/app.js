import React from "react";
import AddTask from "./addTask/AddTask";
import {connect} from "react-redux";


class App extends React.Component {
    render() {
        return (
            <div>
                <AddTask/>
            </div>
        )
    }
}
function mapStateToProps(state){
    return state
}
export default connect(mapStateToProps)(App)

