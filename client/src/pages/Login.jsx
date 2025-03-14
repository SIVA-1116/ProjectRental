import React from 'react'
import { Row,Col,Form,Input } from 'antd'
import { Link } from 'react-router-dom'
import {useDispatch} from 'react-redux'

const Login = () => {
  
  return (
    <div className='login'>

      <Row gutter={16} className='d-flex align-items-center' >

        <Col lg={16} style={{position:'relative'}} className='loginback-img ' >
              <img src="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?ixlib=rb-1.2.1&ixidMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"/>
              <h1 className='login-logo' >BookCars</h1>
        </Col>

        <Col lg={8} className='custom-text-left p-5 mt-5' >
              <Form layout='vertical' className='login-form p-5'  >
                <h1>Login</h1>
                <hr />
                <Form.Item name='username' label='Username' rules={[{required: true}]} >
                    <Input/>
                </Form.Item> 
                <Form.Item name='password' label='Password' rules={[{required: true}]} >
                    <Input/>
                </Form.Item> 
                <button className='btn1 mt-2 mb-3' >Login</button>
                <br/>
                <Link to='/register' >Click Here to Register</Link>

              </Form>
        </Col>

      </Row>
        
    </div>
  )
}
export default Login