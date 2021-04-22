import React from 'react';

class Teacher extends React.Component{
    constructor(){
        super();
        this.state={
            'data':'',
        }
    }
    showData=()=>{
        const xrl=new XMLHttpRequest();
        xrl.open('post','http://www.qhdlink-student.top/student/coach.php');
        xrl.setRequestHeader('content-type','application/x-www-form-urlencoded');
        xrl.send('username=zyp&userpwd=123456&userclass=64&type=4');
        xrl.onreadystatechange=()=>{
            if(xrl.readyState===4 && xrl.status===200){
                let data=JSON.parse(xrl.responseText);
                this.setState({'data':data})
            }
        }
    }
    render(){
        let datat=Object.values(this.state.data);
        let datad=datat.map((value)=>{
            return <tr key={value.id_coach}><td>{value.id_coach}</td><td>{value.name_coach}</td><td>{value.type_coach}</td></tr>
        })
        return <div>
            <button onClick={this.showData}>点击显示</button>
            <table>
                <tbody>{datad}</tbody>
            </table>
        </div>
    }
}
export default Teacher