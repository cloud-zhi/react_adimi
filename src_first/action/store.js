import React from "react";
import { createStore } from "redux";
import thunk from 'redux-thunk'
import reducer from './reducers'

let object_state = { "goods": ["牛奶", "苹果"] }  //定义变量存储数据
let Store = createStore(reducer, object_state)  //定义仓库，将定义中的数据存入其中 


export default Store;