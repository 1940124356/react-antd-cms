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

//收到action.type==add,要向list添加一条数据
//先对state进行深复制，得到一个新的newState
//newState.list.push(action.payload)
//最后return newState
export default function todoReducer(state=initState, action){
    // console.log('-----------todo',action)
    //深复制
    let newState = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case CHANGE_MSG:
            newState.msg = action.payload
            return newState;
        case TODO_ADD:
            newState.list.push(action.payload)
            return newState;
        case TODO_DEL:
            //来删除数据
            let id = action.payload
            newState.list = newState.list.filter(ele=>ele.id!==id)
            return newState;
        case TODO_UPD:
            newState.list.map((ele,idx,arr)=>{
                if(ele.id===action.payload.id){
                    arr[idx].task=action.payload.task
                }
                return null
            })
            //来更新数据
            return newState;
        case TODO_CLEAR:
            //清空所有数据
            newState.list = []
            return newState;
        default:
            //什么都不做
            return state
    }
}