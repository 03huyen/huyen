import { Button, Col, Form, Input, Row, Typography, message } from 'antd'
import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const navigate = useNavigate()
    const onFinish = async (values: any) => {
        try {
            const response = await axios.post(`http://localhost:8080/api/signup`, values)
            if (response && response.data) {
                console.log("🚀 ~ file: Register.tsx:12 ~ onFinish ~ response:", response)
                message.success('dang ky thanh cong')
                navigate('/admin/login')
            }
        } catch (error) {
            message.error('dang ky that bai')
        }
    }
    return (
        <Row>
            <Col span={24} style={{ textAlign: 'center' }}>
                <Typography.Title level={3}>Đăng ký</Typography.Title>
            </Col>
            <Col span={24}>
                <Form onFinish={onFinish} layout='vertical' style={{ width: '600px', margin: '0 auto' }} autoComplete='off'>
                    <Form.Item label='name' name='name' rules={[{ required: true, message: 'Không được bỏ trống' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label='email' name={'email'} rules={[{ required: true, message: 'Không được bỏ trống' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label='password' name={'password'} rules={[{ required: true, message: 'Không được bỏ trống' }]}>
                        <Input.Password />
                    </Form.Item>
                    <Form.Item label='Confirm password' name={'confirmPassword'} rules={[{ required: true, message: 'Không được bỏ trống' }]}>
                        <Input.Password />
                    </Form.Item>
                    <Button type='primary' htmlType='submit'>Login</Button>
                </Form>
            </Col>
        </Row>
    )
}

export default Register