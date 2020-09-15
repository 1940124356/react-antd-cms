import { GET_USER_LIST } from '../actionType'

//初始化数据
const initState = {
    list:[]
}

export default function userReducer(state=initState,action){
    //深复制
    let newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case GET_USER_LIST:
            newState.list = action.payload
            return newState;
        default:
            return state;
    }
}