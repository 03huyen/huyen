import { Button, Col, Form, Input, Row, Typography, message } from 'antd'
import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const onFinish = async (value: any) => {
        try {
            const response = await axios.post(`http://localhost:8080/api/signin`, value)
            if (response && response.data) {
                message.success('Đăng nhập thành công!')
                navigate('/admin/products')
            }
        } catch (error) {
            message.error('Dang nhap that bai')
        }
    }
    return (
        <Row>
            <Col span={24} style={{ textAlign: 'center' }}>
                <Typography.Title level={3}>Đăng nhập</Typography.Title>
            </Col>
            <Col span={24}>
                <Form onFinish={onFinish} layout='vertical' style={{ width: '600px', margin: '0 auto' }} autoComplete='off'>
                    <Form.Item label='email' name={'email'} rules={[{ required: true, message: 'Không được bỏ trống' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label='password' name={'password'} rules={[{ required: true, message: 'Không được bỏ trống' }]}>
                        <Input />
                    </Form.Item>
                    <Button type='primary' htmlType='submit'>Login</Button>
                </Form>
            </Col>
        </Row>
    )
}

export default Login