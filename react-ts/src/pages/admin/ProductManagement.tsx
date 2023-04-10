import React from 'react'
import { Space, Table, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { IProduct } from '../../types/product';
import { Link } from 'react-router-dom'


interface IProps {
    products: IProduct[],
    onRemove: (_id: string) => void
}

const ProductManagementPage = (props: IProps) => {
    const removeProduct = (_id: string) => {
        console.log(_id);
        props.onRemove(_id)
    }
    const columns: ColumnsType<IProduct> = [
        {
            title: 'Tên sản phẩm',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Giá',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Anh',
            dataIndex: 'image',
            key: 'image',
            render: (text) => <img src={text} alt="" />

        },
        {
            title: 'Mô tả',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Phân loại',
            dataIndex: 'category',
            key: 'category',
        },
        {
            title: 'Hành động',
            key: 'action',
            render: (record) => (

                <Space size="middle">
                    <Button type="primary" style={{ backgroundColor: 'red' }} onClick={() => removeProduct(record._id)}>XÓA</Button>
                    <Button type="primary" ><Link to={`/admin/products/${record._id}/update`}>CẬP NHẬP</Link></Button>
                </Space>
            ),
        },
    ];

    const data: IProduct[] = props.products.map((item: IProduct) => {
        return {
            key: item.id,
            ...item
        }
    })

    return (
        <div>
            <Button type='primary'><Link to={'/admin/products/add'}>Thêm sản phẩm</Link></Button>
            <Table columns={columns} dataSource={data} pagination={{ pageSize: 5 }} />
        </div>
    )
}

export default ProductManagementPage