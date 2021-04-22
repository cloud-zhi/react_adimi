let add_action = function (value) {  //调用方法者
    return {
      type: "add",
      data: value,
    }
  }
  let del_action =function(index){
    return{
      type:'del',
      data:index,
    }
  }

  export {add_action,del_action}