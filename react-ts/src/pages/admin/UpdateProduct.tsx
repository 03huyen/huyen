import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { IProduct } from '../../types/product'
import { Button, Col, Form, Input, Row, Typography } from 'antd';
import { getOneProduct } from '../../api/product';
import axios from 'axios';
interface IProps {
    products: IProduct[],
    onUpdate: (product: IProduct) => void
}
const UpdateProductPage = (props: IProps) => {
    const { id } = useParams()

    const navigate = useNavigate()
    const [product, setProduct] = useState<IProduct>()
    useEffect(() => {
        setFields()
    }, [product])
    const [form] = Form.useForm();

    const setFields = () => {
        form.setFieldsValue({
            id: product?.id,
            name: product?.name,
            price: product?.price,
            image: product?.image,
            description: product?.description,
            category: product?.category
        })
    }
    useEffect(() => {
        const fetchData = async () => {
            try {
                if (!id) return;
                const response = await getOneProduct(id)
                if (response && response.data) {
                    setProduct(response.data.data)
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])

    const onFinish = async (values: IProduct) => {
        try {
            const response = await axios.patch(`http://localhost:8080/api/products/${id}`, values)
            if (response && response.data) {
                navigate('/admin/products/')
            }
        } catch (error) {
            console.log(error)
        }
        // props.onUpdate(values);
        // navigate('/admin/products')
    };
    if (!product) return;
    const initialValue = {
        name: product.name,
        price: product.price,
        image: product?.image,
        description: product?.description,
        category: product?.category
    }

    return (
        <Row>
            <Col span={24} style={{ textAlign: 'center' }}>
                <Typography.Title level={3}>Sửa sản phẩm</Typography.Title>
            </Col>
            <Col span={24}>
                <Form
                    layout='vertical'
                    form={form}
                    style={{ maxWidth: 600, margin: '0 auto' }}
                    initialValues={initialValue}
                    onFinish={onFinish}
                >

                    <Form.Item
                        label="Tên sản phẩm"
                        name="name"
                        rules={[{ required: true, message: 'Vui lòng nhập tên' }]}
                    >
                        <Input placeholder='name product' />
                    </Form.Item>

                    <Form.Item
                        label="Giá"
                        name="price"
                        rules={[{ required: true, message: 'Vui lòng nhập giá' }]}>
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Anh"
                        name="image"
                        rules={[{ required: true, message: 'Vui lòng them anh' }]}>
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Mô tả"
                        name="description"
                        rules={[{ required: true, message: 'Vui lòng nhập mô tả' }]}>
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Phân loại"
                        name="category"
                        rules={[{ required: true, message: 'Vui lòng chọn phân loại' }]}>
                        <Input />
                    </Form.Item>


                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            CẬP NHẬP SẢN PHẨM
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    )
}

export default UpdateProductPage