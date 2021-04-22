import React from 'react'
import { Table, Tag, Space } from 'antd';
import 'antd/dist/antd.css';
const { Column, ColumnGroup } = Table;

class AntTable extends React.Component {

    state = {
        data: ''
    }
    componentDidMount() {
        fetch('http://www.qhdlink-student.top/student/coach.php', {
            method: 'post',
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            body: 'username=zyp&userpwd=123456&userclass=64&type=4'
        }).then(function (res) {
            return res.json();
        }).then((data) => {
            console.log(data);
            this.setState({ data: data })
        })
    }
    delete=(event)=>{
        alert('没研究会呢')
        // event.target.AntTableReactDOM.unmountComponentAtNode
    }

    render() {
        let dataSource = Object.values(this.state.data)
        console.log(dataSource)
        return (<div>
            <Table dataSource={dataSource}>
                <Column title="姓名" dataIndex="name_coach" key="id_coach" />
                <Column title="之前职位" dataIndex="honor_coach" key="id_coach" />
                <Column title="现在职位" dataIndex="type_coach" key="id_coach" />
                <Column title="照片" dataIndex="path_coach" key="id_coach"
                 render={(record) => 
                <img src={'http://www.qhdlink-student.top/'+record} width="50px" alt=""/>
             }
                />
                <Column
                    title="功能"
                    key="id_coach"
                    render={(text, record) => (
                        <Space size="middle">
                            <a>小名 小{record.name_coach.slice(-1)}{record.name_coach.slice(-1)}</a>
                            <a onClick={this.delete}>删除</a>
                        </Space>
                    )}
                />
            </Table>
        </div>)
    }
}
export default AntTable