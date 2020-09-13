import { 
    CHANGE_MSG,
    TODO_ADD,
    TODO_DEL,
    TODO_UPD,
    TODO_CLEAR
} from '@/store/actionType'

//action生成器
//改msg
export function changeMsg(payload){
    return {
        type:CHANGE_MSG,
        payload
    }
}

//新增一条(传过来的是对象)
export function todoAdd(payload){
    return {
        type:TODO_ADD,
        payload
    }
}

//删除一条(传过来的是下标)
export function todoDel(payload){
    return {
        type:TODO_DEL,
        payload
    }
}

//更新一条
export function todoUpData(payload){
    return {
        type:TODO_UPD,
        payload
    }
}

//清空全部
export function todoClear(payload){
    return {
        type:TODO_CLEAR,
        payload
    }
}