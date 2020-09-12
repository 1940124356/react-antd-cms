import React from 'react'
//引入中国高阶函数
import { connect } from 'react-redux'

class Home extends React.Component {
    render(){
        return(
            <div className="kb-system-home">
                <h1>首页概况</h1>
                <h2>{this.props.msg}</h2>
            </div>
        )
    }
}

//定义一个方法吧store中需要共享的数据变成成 this.props的方式进行访问
function mapStateToProps(store){
    return {
        msg:store.todo.msg
    }
}

function mapActionToProps(dispatch) {
    return {

    }
}

//它首先调用自己，然后再返回一个函数
export default connect(mapStateToProps,mapActionToProps)(Home)