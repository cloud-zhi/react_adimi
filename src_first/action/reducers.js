function reducer(prestate, action) {  //事件处理者
    switch (action.type) {
      case "add":
        return { "goods": [...prestate.goods, action.data] }//怎么捕捉这个对象？    返回给了store，覆盖了之前的数据
        break;
      case "del":
        let newarry={'goods':[...prestate.goods]}  //重新赋值新数组
        newarry.goods.splice(action.data,1);   //切除不要的元素
        return {"goods":newarry.goods};  //返回对象
        break;
      default: return prestate
    }
  }

  export default reducer;
  