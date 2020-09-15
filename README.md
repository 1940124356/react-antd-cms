# React脚手架
    ```
    //全局安装脚手架
    npm install create-react-app -g
    
    //创建项目
    create-react-app '项目名字'
    cd '项目名字'
    
    npm start   //启动项目
    npm run build   //打包上线
    
    注意：暴露文件的做法
    git init
    git add *
    git commit -m "first"
    npm run eject   //把隐藏文件都暴露出来
    
    npm start   //启动项目
    ```
# 环境配置
    1、自定义端口号 /scripts/start.js 搜索PORT 
    
    2、配置 @ 别名 /config/webpack.config.js 里找到resolve.alias
        '@':path.resolve(__dirname,'../src')
        
    3、favicon制作 找免费在线制作网站，下载32*32的尺寸。
    
    4、sass安装 只用安装 node-sass 这个包即可。
    
    5、本地环境怎么配置代码
    
    安装 cnpm install http-proxy-middleware -D 
    新建代理文件 src/setupProxy.js
    ```
    const { createProxyMiddleware } = require('http-proxy-middleware');
    module.exports = function(app) {
        app.use(
            '/api',
            createProxyMiddleware({
            target:'http://xxx.com',    //目标服务器
            changeOrigin: true
        })
    )};
    ```

# 项目架构

    安装antd
    axios的封装与跨域处理
    layout布局：路由的安装与配置
    
    Flux是Facebook官方提出一种应用程序数据管理思想
    
    Redux 是其它团队基于Flux思想而开发出来、用于React项目架构的数据容器
    
    Redux在中大型的React项目，都会配套使用
        redux
        react-redux 用于把redux和react连接起来，<Provider>  高阶函数： connect()(Home)
    
    Mobx，非常适合小而美React项目
        mobx
        mobx-react  用于把mobx和react应用连接的一个工具 Provider 高阶函数： @inject @observer

# redux
    中文文档：https://www.cntofu.com/book/4/readme.html
    
    action  触发行为，主要的作用是用来触发数据改变的行为
    reducer 它的作用就是用来改变store中的数据
    store   这是共享数据的存储中心
    
    1、安装
    
    npm install redux -S

### redux(state)的三大原则
    1、单一数据源       整个应用的 state 被储存在一棵 object tree 中，并且这个 object tree 只存在于唯一一个 store 中。
    
    2、State是只读的    唯一改变 state 的方法就是触发 action，action 是一个用于描述已发生事件的普通对象。
    
    3、使用纯函数(高阶函数Hook)来执行修改   为了描述 action 如何改变 state tree ，你需要编写 reducers。

### store是怎么创建的？
    使用createStore()来创建，但该方法必须填参数是reducer
    
    const store = createStore(reducer)
    export default store
### 那什么是reducer？
    reducer是一个纯函数，在redux的工作中，它用于更新state
### 那该怎么定义reducer呢？
    鉴于同事协作，要分多个reducer，在使用combineReducers进行合并，得到最终的reducer
    
    export default function childrenReducer(state,action){
        switch(action.type):
        case 'add':
            //收到action.type==add,要向list添加一条数据
            //先对state进行深复制，得到一个新的newState
            //newState.list.push(action.payload)
            //最后return newState
            return state;
    }
### 那state是什么呢？
    是子store中的可以被全局共享的数据
    
    //初始化数据,可以被所有组件进行共享使用
    initState = {
        msg:1000,
        list:[]
    }
### 那action是什么？
    它是reducer更新的信号，包括type和payload
    
    action = {
        type:'',        //你要干什么
        payload:''      //是页面视图传给store的信息（增删改查的信息）
    }
### action从哪里来？
    它是视图中来，由dispatch派发而来

# 渲染使用state
    先安装  npm install react-redux -S
    
    他也有二个API分别是
        Provider    基于上下文的作用，把store中的数据传到组件当中去
        connect     他是一个高阶函数(有点像mobx里的inject和observer)

# 使用方法

    在App.js里创建Provider来给所有的组件进行共享数据
    //redux
    import { Provider } from 'react-redux'
    import store from '@/store/'
    
    return (
      // 哈希路由
      <HashRouter>
        {/* redux */}
        <Provider store={store}>
        <Layout></Layout>
        </Provider>
      </HashRouter>
      
    );

#### 子组件中
    //引入这个高阶函数
    import { connect } from 'react-redux'
    
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
    
    然后再组件中就可以直接用this.props.msg直接使用



### reducer调接口
    所有组件的外部数据，都要从props进来(react的规范)
    
    安装    redux-thunk ||  redux-sage
    npm install redux-thunk -S
    
    //在store/index.js引入
    //是一个中间件，用于支持redux中的异步action
    import thunk from 'redux-thunk'
    
    再引入这个API
    import { applyMiddleware } from 'redux'
    
    这个API是createStore的第三个参数：
        //核心2
        const store = createStore(reducer,applyMiddleware(thunk))

### 异步数据

//组件的外部数据，都要从props进来   (建议,这是react的规范)

//异步action    和同步action：前者需要派发三个action，后者只需要派发一个action

**异步数据的三个action**
    **第一个action：通知store我要调接口，params从视图而来**
        //派发第一个dispatch，是一个方法
        init:(params)=>dispatch(getUser(params))
    **第二个action：我调接口已成功，这是后端返回的数据，给reducer更新**
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
    **第三个action：我调接口已失败，告诉store失败了，不让reducer更新**

# 6、redux异步action

 那么异步的action行为（比如调接口）该怎么办呢？ 
需要使用第三方中间件（redux-thunk）,把一步异步的action转化成三个同步的actoin，以此来解决“redux只支持同步action”特点。 
这三个同步的action，分别是：
                    第一个action的作用告诉reducer有一个异步行为触发；
                    第二个action告诉reducer异步行为执行成功了,可以更新state了；
                    第三个action是告诉reducer这个异步行为失败了。

# 7、面试相关

你如何理解redux？flux，地位，三个概念，单向数据流。
store特点：单一数据源、只读、使用纯函数reducer进行修改。 
react-redux：Provider connect(mapStateToProps,mapActionToProps) 
redux中间件：redux-thunk 
dispatch() 发送一个action到reducer

# 项目经验

    管理系统：toB 企业内部  给其他公司的使用
    管理系统开发：
        功能实现：角色权限功能、用户管理
        业务开发

管理系统的登录流程：
    ->在登录页面登录
    ->登录成功得到一个token（token一般有时间（1天刷新）这时要用到刷新token的接口refreshToken）
    ->存储到localStorage中
    ->进入管理系统用token换取初始化内容（菜单、用户信息）


1、登录权限 管理系统，login - 内部页面 用token来换取所有需要初始的东西：角色role，菜单列表[{path,text,id,icon,group}] NavLink 几乎都是根据后端返回的菜单进行生成的。 Route 是根据 views来生成的。


