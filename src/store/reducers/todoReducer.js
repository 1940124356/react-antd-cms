

//初始化数据,可以被所有组件进行共享使用
let initState = {
    msg:1000,
    list:[]
}
//reducer其实就是一个高阶组件
export default function todoReducer(state=initState, action){
    switch(action.type){
        case 'add':
            //收到action.type==add,要向list添加一条数据
            //先对state进行深复制，得到一个新的newState
            //newState.list.push(action.payload)
            //最后return newState
            return state;
        case 'del':
            //来删除数据
            return state;
        case 'upd':
            //来更新数据
            return state;
        case 'clear':
            //清空所有数据
            return state;
        default:
            //什么都不做
            return state
    }
}