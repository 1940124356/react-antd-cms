import React from 'react';
import './assets/css/app.css';
import 'antd/dist/antd.css'

// import { fetchUsers } from '@/utils/api'
import { Layout } from './components/'
import { HashRouter } from 'react-router-dom'

//redux
import { Provider } from 'react-redux'
import store from '@/store/'

class App extends React.Component{
  componentDidMount(){
    // fetchUsers({}).then(res=>{
    //   console.log(res)
    // })
  }
  render(){
    return (
      // 哈希路由
      <HashRouter>
        {/* redux */}
        <Provider store={store}>
        <Layout></Layout>
        </Provider>
      </HashRouter>
      
    );
  }
}

export default App;
