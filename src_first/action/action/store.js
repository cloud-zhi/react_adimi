import {createStore} from "redux";
import reducer from "./reducer"

//创建store，并且初始化数据
let object_state={"color":"red"}
let Store=createStore(reducer,object_state)
export default Store