//定义reducer函数
function reducer(prestate,action){
    switch(action.type){
        case "change":
            return {"color":action.data}
        break;
        default:return prestate
    }
}

export default reducer;