import { 
    CHANGE_MSG,
    TODO_ADD,
    TODO_DEL,
    TODO_UPD,
    TODO_CLEAR
} from '@/store/actionType'

//初始化数据,可以被所有组件进行共享使用
let initState = {
    msg:1000,
    list:[{id:1,task:'吃饭'},{id:2,task:'睡觉'}]
}
//reducer其实就是一个高阶组件
export default function todoReducer(state=initState, action){
    // console.log('-----------todo',action)
    let newState = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case CHANGE_MSG:
            //深复制
            newState.msg = action.payload
            return newState;
        case TODO_ADD:
            //收到action.type==add,要向list添加一条数据
            //先对state进行深复制，得到一个新的newState
            //newState.list.push(action.payload)
            //最后return newState
            newState.list.push(action.payload)
            return newState;
        case TODO_DEL:
            //来删除数据
            return state;
        case TODO_UPD:
            //来更新数据
            return state;
        case TODO_CLEAR:
            //清空所有数据
            return state;
        default:
            //什么都不做
            return state
    }
}