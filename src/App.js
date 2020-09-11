import React from 'react';
import './assets/css/app.css';
import 'antd/dist/antd.css'

import { fetchUsers } from '@/utils/api'
import { Layout } from './components/'

class App extends React.Component{
  componentDidMount(){
    fetchUsers({}).then(res=>{
      console.log(res)
    })
  }
  render(){
    return (
      <div className="App">
        <Layout></Layout>
      </div>
    );
  }
}

export default App;
