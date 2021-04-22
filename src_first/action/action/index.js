import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import Store from "./store"
import App from "./app";




ReactDOM.render(
       <Provider store={Store}><App /></Provider>   //通过props属性将唯一的store传给子组件
       ,document.getElementById('root')   
);