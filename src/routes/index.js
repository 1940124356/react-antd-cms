import loadable from '@loadable/component'
import React from 'react'
import { 
    PieChartOutlined,
    AndroidOutlined,
    DropboxOutlined,
    BarsOutlined
 } from '@ant-design/icons';

const Home = loadable(()=>import('./system/Home'))
const Analyse = loadable(()=>import('./system/Analyse'))
const GoodList = loadable(()=>import('./good/GoodList'))
const AddGood  = loadable(()=>import('./good/AddGood'))

const routes = [
    {
        id:1,
        text:'系统概况',
        children:[
            {id:11,text:'首页概况',path:'/home',component:Home,icon:<AndroidOutlined />},
            {id:12,text:'数据分析',path:'/analyse',component:Analyse,icon:<PieChartOutlined />}
        ]
    },
    {
        id:2,
        text:'商品管理',
        children:[
            {id:21,text:'商品列表',path:'/goodlist',component:GoodList,icon:<BarsOutlined />},
            {id:22,text:'添加商品',path:'/addgoods',component:AddGood,icon:<DropboxOutlined />}
        ]
    },
    {
        id:3,
        text:'系统管理',
        children:[
            {id:31,text:'角色管理',path:'',component:'',icon:<BarsOutlined />},
            {id:32,text:'权限管理',path:'',component:'',icon:<DropboxOutlined />},
            {id:33,text:'用户管理',path:'',component:'',icon:<DropboxOutlined />},
        ]
    }
]

export default routes