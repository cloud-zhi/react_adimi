import React from 'react';
import Nav1 from "../src/nav/nav1.js"
import Header from "../src/header/header.js"
import Swiper from "./swiper/swi.js"
import "../src/index.css"
import Park from "./content/park.js"
import Event from "./content/event.js"
import Serve from "./content/serve.js"
class App extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div>
                <Nav1/>
                <Header/>
                <Swiper/>
                <Park/>
                <Event/>
                <Serve/>
            </div>
        )
    }
}
export default App