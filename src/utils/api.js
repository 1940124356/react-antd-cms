import axios from '@/utils/fetch'


//封装获取用户信息的方法
export function fetchUsers(params){
    return axios({
        url:'/users/all',
        method:'GET',
        params
    })
}

export default {
    fetchUsers
}