import React from "react"
import "../content/park.css"
class Park extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div className="content">
                <div className="title">园区动态
                    <div className="after"></div>
                </div>
                <div className="park11">
                    <div className="container">
                        <ul className="items">
                            <li className="item">
                                <div className="meta">
                                    <div className="lsit1">
                                        <div className="mr14" style={{ width: "310px", height: "175px" }}>
                                            <img style={{ width: "310px", height: "175px" }} src={require('../img/54b45faa-dbb4-45a7-b7d9-89b9f26fdc5c.jpg').default}></img>
                                        </div>
                                    </div>
                                    <div className="lsit2">
                                        <h4>宏福科技知识产权工作站成立</h4>
                                        <div className="description">
                                            <div className="ant">
                                                2019年底，宏福孵化器被授予成立北京市知识产权公共服务工作站，此工作站是由北京市知识产权维权援助中心联合区知识产权局，与创新创业载体共同建立，为创新型小微企业和创业团队提供知识产权公共服务。
                                                宏福科技知识产权工作站成立之际，特设立一个知识产权阅读角，提供了各类知识产权相关书籍，欢迎园区内企业积极宣传，前来翻阅！
                                            </div>
                                            <div className="ant-row">
                                                <div className="ant-col"><img src={require("../img/biao.png").default}></img>2020-05-13</div>
                                                <div className="ant-col"><img src={require("../img/yanjing.png").default}></img>1</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <ul className="items">
                            <li className="item">
                                <div className="meta">
                                    <div className="lsit1">
                                        <div className="mr14" style={{ width: "310px", height: "175px" }}>
                                            <img style={{ width: "310px", height: "175px" }} src={require('../img/b79e8b01-069d-434b-b0c8-c04fdc51fcb5.jpg').default}></img>
                                        </div>
                                    </div>
                                    <div className="lsit2">
                                        <h4>疫情下宏福园区企业自控——优秀！</h4>
                                        <div className="description">
                                            <div className="ant">
                                                开工一月有余，全国疫情防控非常有效，新冠确诊人数在逐渐减少，但疫情一天没有解除，宏福科技园就一天不会松懈，防控工作每天必须到位！不仅如此，宏福科技园区中的企业进行的自我防控工作也十分到位，下面就让小编带大家看看这些优秀的企业在疫情自控方面都做了哪些工作：
                                                每日进行员工体温监测每日进行企业复工公示办公区域进行疫情防控指引张贴设置体温测量区和消毒区积极接受上级部门及园区工作人员的检查自设口罩回收处
                                            </div>
                                            <div className="ant-row">
                                                <div className="ant-col"><img src={require("../img/biao.png").default}></img>2020-03-16</div>
                                                <div className="ant-col"><img src={require("../img/yanjing.png").default}></img>4</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="ant-text-center pt10">
                        <a className="ant-btn ant-btn-lg"><img src={require("../img/hao.png")}></img><span className="jiahao">＋</span>查看更多</a>
                    </div>
                </div>
            </div>
        )
    }
}
export default Park