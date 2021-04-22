import React from "react";
class Fetch extends React.Component{
    state={data1:''}
    render(){
        let data=Object.values(this.state.data1);
        return(<div>
            {data.map(function(value){
            return(<div key={value.id_coach}>{value.name_coach} <span> {value.type_coach}</span></div>)
        })}
        </div>)
    }
    componentDidMount(){
        let req=new Request('http://www.qhdlink-student.top/student/coacha.php',{
            method:'post',
            headers:{'content-type':'application/x-www-form-urlencoded'},
            body:'username=zyp&userpwd=123456&userclass=64&type=4'
        })
        fetch(req).then(function(response){
            return response.json()
        }).then((data)=>{
            console.log(data)
            this.setState({data1:data})
        })
    }
}
export default Fetch