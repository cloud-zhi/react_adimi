//定义reducer函数
function reducer(prestate,action){
    switch(action.type){
        case "add":
            return [...prestate,action.data]
        case "del":
            let array=prestate.filter((value) => {
                return value.id!==action.data
            })
            return array;
        case 'change':
            return prestate;
        case 'clean':
           let xxx= prestate.filter((value) => {
                return !action.data.includes(value.id)
            })
            return xxx
        default:return prestate
    }
}

export default reducer;