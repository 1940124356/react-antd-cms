import React from 'react' 
import KBSider from './Sider'
import KBHeader from './Header'
import KBContent from './Content'
import { Layout } from 'antd'
import './style.scss'
const { Header, Sider, Content } = Layout;

export default class KBLayout extends React.Component {
    render(){
        return (
            <div className='kb-layout'>
                <Layout>
                    <Sider width='150'>
                        <KBSider></KBSider>
                    </Sider>
                    <Layout>
                        <Header>
                            <KBHeader></KBHeader>
                        </Header>
                        <Content>
                            <KBContent></KBContent>
                        </Content>
                    </Layout>
                </Layout>
            </div>
        )
    }
}