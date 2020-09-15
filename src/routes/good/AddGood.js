import React from 'react'
import { Form,Input,Button,Checkbox } from 'antd'
//引入这个高阶函数
import { connect } from 'react-redux'
const { TextArea } = Input;


//把action生成器映射进来


//共享store中的数据，可以用this.props进行访问
function mapStateToProps(store){
    return {

    }
}

//把action生成器方法，放到this.props上
function mapActionToProps(dispatch){
    return {
        //派发第一个dispatch，是一个方法
        
    }
}

class AddGood extends React.Component {
    onFinish(){
        console.log('提交')
    }
    onFinishFailed(){
        console.log('提交失败')
    }
    render(){
        const layout = {
            labelCol: { span: 4 },
            wrapperCol: { span: 10 },
          };
        const tailLayout = {
            wrapperCol: { offset: 4, span: 16 },
        };
        return(
            <div className="kb-good-add">
                <h1>增加商品</h1>
                <div className='good-add-form'>
                    <Form
                    {...layout}
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={this.onFinish.bind(this)}
                    onFinishFailed={this.onFinishFailed.bind(this)}
                    >
                    <Form.Item
                        label="商品名称"
                        name="name"
                        rules={[{ 
                            required: true,
                            pattern:/^[a-zA-Z]{6,18}$/,
                            message: '密码不规范' 
                        }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="商品描述"
                        name="desc"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <TextArea rows={4} />
                    </Form.Item>

                    <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">提交</Button>
                    </Form.Item>
                    </Form>
                </div>
                
            </div>
        )
    }
}

export default connect(mapStateToProps,mapActionToProps)(AddGood)