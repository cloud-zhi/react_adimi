import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
// import AppTT from './action/app'
// import AppForRuter from './AppForRuter'
import AddTask from './addTask/AddTask'
import {Provider} from "react-redux";
import Store from "./addTask/store"
// import App from "./app";
// import AddTask from './addTask/AddTask'
// import Action from './action/add'
// import A from './action/action'
import Demo from './component/hook/hook'


ReactDOM.render(
   <div>
      {/* <AppForRuter/> */}

   {/* <Provider store={Store}><AddTask /></Provider>  */}
   <Demo></Demo>
   </div>
   ,document.getElementById('root'));
