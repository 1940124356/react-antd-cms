import { GET_USER_LIST } from '@/store/actionType'

//引入调接口的API
import { fetchUsers } from '@/utils/api'

//调接口
export function getUser(params){
    return function(dispatch){
        fetchUsers(params).then(res=>{
            //调接口时，派发第二个dispatch
            dispatch({
                type:GET_USER_LIST,
                payload:res
            })
        }).catch(err=>{
            //第三次dispatch
            dispatch({
                type:GET_USER_LIST,
                payload:[]
            })
        })
    }
}