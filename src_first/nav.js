import React from 'react';
import './nav.css'

class Navbar extends React.Component{
    constructor(){
        super()
        this.state={
            'data':'',
            'data1':'',
            'isshow':false,
        }
    }
    ajax=()=>{
        let xrl=new XMLHttpRequest();
        xrl.open('get','http://www.qhdlink-student.top/test/nav.php?username=zyp&userpwd=123456&userclass=64&type=4');
        xrl.setRequestHeader('content-type','application/x-www-form-urlencoded');
        xrl.send();
        xrl.onreadystatechange=()=>{
            if(xrl.readyState===4 && xrl.status===200){
                let data=JSON.parse(xrl.responseText);
                this.setState({'data':data})
            }
        }
    }
    show=()=>{
        this.setState({'isshow':true})
    }
    hide=()=>{
        this.setState({'isshow':false})
    }
    render(){
        let dataArry=Object.values(this.state.data);
        let dataEach=dataArry.map((value)=>{
            let data1;
            if(value.type==='1'){
                data1=value.children_m.map((value,index)=>{
                    return <div key={index}><a href={value.addr_c}>{value.title_c}</a></div>
                })
            }
            return <li key={value.id_m} style={{float:'left'}} className='aaa'><a href={value.addr_m}>{value.title_m}{data1}</a></li>
        })
        return <div>
            <button onClick={this.ajax}>click me</button>
            <ul>{dataEach}</ul>
        </div>
    }
}
export default Navbar;