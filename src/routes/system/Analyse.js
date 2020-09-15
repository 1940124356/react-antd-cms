import React from 'react'

//引入这个高阶函数
import { connect } from 'react-redux'

//把action生成器映射进来
import { getUser } from '@/store/actions/userAction'


//共享store中的数据，可以用this.props进行访问
function mapStateToProps(store){
    return {
        users:store.user.list
    }
}

//把action生成器方法，放到this.props上
function mapActionToProps(dispatch){
    return {
        //派发第一个dispatch，是一个方法
        init:(params)=>dispatch(getUser(params))

        //不引入直接写法：
        // init:(params)=>{
        //     //第一次派发dispatch
        //     dispatch(function(dispatch){
        //         fetchUsers(params).then(res=>{
        //             //第二次派发dispatch
        //             dispatch({
        //                 type:GET_USER_LIST,
        //                 payload:res
        //             })
        //         }).catch(err=>{
        //             //第三次派发dispatch
        //             dispatch({
        //                 type:GET_USER_LIST,
        //                 payload:[]
        //             })
        //         })
        //     })
        // }
    }
}

class Analyse extends React.Component {
    componentDidMount(){
        //触发一个调接口action
        this.props.init({})
    }
    render(){
        console.log(this.props.users)
        return(
            <div className="kb-system-analyse">
                <h1>数据分析</h1>
            </div>
        )
    }
}

//它首先调用自己，然后再返回一个函数
export default connect(mapStateToProps,mapActionToProps)(Analyse)