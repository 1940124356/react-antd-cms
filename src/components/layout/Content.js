import React from 'react' 
import { Route,Switch,Redirect } from 'react-router-dom'
import routes from '@/routes'

export default class Content extends React.Component {

    createRoutes(){
        let res=[]
        //封装一个创建route的递归方法
        function create(arr){
            arr.map(ele=>{
                res.push(<Route key={ele.id} path={ele.path} component={ele.component}/>)
                if(ele.children){
                    create(ele.children)    
                }
                return null
            })
        }

        routes.map(ele=>{
            create(ele.children)
            return null
        })
        // console.log('res',res)
        return res
    }
    render(){
        return (
            //显示区域
            <div className='kb-content'>
                <Switch>
                    {this.createRoutes()}
                    <Redirect from="/*" to="/home"></Redirect>
                </Switch>
            </div>
        )
    }
}