import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { IProduct } from '../../types/product'
import { Button, Checkbox, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import Image from 'antd';

interface IProps {
    onAdd: (product: IProduct) => void
}

const AddProductPage = (props: IProps) => {

    const navigate = useNavigate()

    const onFinish = (values: any) => {
        props.onAdd(values);
        console.log(values);

        navigate('/admin/products')
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Tên sản phẩm"
                    name="name"
                    rules={[{ required: true, message: 'Vui lòng nhập tên' }]}>
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Giá"
                    name="price"
                    rules={[{ required: true, message: 'Vui lòng nhập giá' }]} >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Anh"
                    name="image"
                    rules={[{ required: true, message: 'Vui lòng them anh' }]} >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Mô tả"
                    name="description"
                    rules={[{ required: true, message: 'Vui lòng nhập mô tả' }]} >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Phân loại"
                    name="category"
                    rules={[{ required: true, message: 'Vui lòng chọn phân loại' }]} >
                    <Input />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        THÊM SẢN PHẨM
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default AddProductPage
