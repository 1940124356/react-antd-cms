import React from 'react' 
import { Menu } from 'antd';
import routes from '@/routes'
import { Link } from 'react-router-dom'
import img from '@/utils/img'
const { SubMenu } = Menu;



export default class Sider extends React.Component {

    //创建二级路由
    createMenuItem(children){
        //如果传过来的二维数组存在就创建二级路由
        if(children){
            return children.map(ele=>(
                <Menu.Item key={ele.id} icon={ele.icon}>
                    <Link to={ele.path}>{ele.text}</Link>
                </Menu.Item>
            ))
        }
    }
    //创建路由
    createNavs(){
        //定义数组用来存放所有的导航
        let arr = []
        routes.map(ele=>{
            arr.push(
                <SubMenu key={ele.id} title={ele.text}>
                    {/* 调用创建二级路由的方法 */}
                    {this.createMenuItem(ele.children)}
                </SubMenu>
            )
            return null
        })
        return arr
    }
    render(){
        return (
            <div className='kb-sider'>
                <div className="sider-logo">
                    <img src={img.nao} alt=""/>
                </div>
                <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="dark"
                >
                    {this.createNavs()}
                </Menu>
            </div>
        )
    }
}