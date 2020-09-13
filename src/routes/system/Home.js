import React from 'react'
//引入这个高阶函数
import { connect } from 'react-redux'

//把action生成器全部映射进来
import { changeMsg,todoAdd,todoDel,todoUpData,todoClear } from '@/store/actions/todoaction'



//  mapState  mapAction

//把store中需要共享的数据变成成 this.props的方式进行访问
function mapStateToProps(store){
    return {
        msg:store.todo.msg,
        list:store.todo.list
    }
}

//把外部的actions生成器方法，遇到this.props
function mapActionToProps(dispatch) {
    return {
        //调用这个方法来派发一个action
        change:(payload)=>dispatch(changeMsg(payload)),
        add:(payload)=>dispatch(todoAdd(payload)),          //添加一条 
        del:(payload)=>dispatch(todoDel(payload)),          //删除一条
        upd:(payload)=>dispatch(todoUpData(payload)),       //更新一条
        clear:(payload)=>dispatch(todoClear(payload)),      //清空
    }
}

class Home extends React.Component {
    constructor(props){
        super(props)
        this.state={
            
        }
    }
    //按回车添加
    addTodo(e){
        //dispatch一个action，发送出去
        //发送到state
        //变给reducer进行深复制
        if(e.keyCode===13){
            this.props.add({id:Date.now(),task:e.target.value})
        }
    }
    changeVal(){
        console.log('改变')
    }
    createTodo(){
        let { list } = this.props
        // let { arr } = this.state
        return list.map(ele=>(
            <div key={ele.id}>
                <span>{ele.id}</span>
                <span>------</span>
                <input value={ele.task} onChange={this.changeVal.bind(this)} type="text"/>
                <button>删除</button>
            </div>
        ))
    }
    render(){
        console.log(this.props.list)
        return(
            <div className="kb-system-home">
                <h1>首页概况</h1>
                <input onKeyUp={this.addTodo.bind(this)} type="text"/>
                {this.createTodo()}
            </div>
        )
    }
}



//它首先调用自己，然后再返回一个函数
export default connect(mapStateToProps,mapActionToProps)(Home)