import React from 'react'
import { Space, Table, Tag, Image, Button, Typography } from 'antd';
import type { ColumnsType } from 'antd/es/table';


interface DataType {
    key: string;
    name: string;
    product: string
};

const CategoryManagement = (props: any) => {
    const OnRemove = (id: any) => {
        props.OnRemove(id);
    }
    const columns: ColumnsType<DataType> = [
        {
            title: 'id',
            dataIndex: 'key',
            key: 'key',
        },
        {
            title: 'name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Số lượng sản phẩm',
            dataIndex: 'Product',
            key: 'Product',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Button type="link" style={{ backgroundColor: "#19A7CE", color: "white" }} onClick={() => window.open('/Admin/Update/' + record.key)}>Sửa</Button>
                    <Button type='default' style={{ backgroundColor: "#FC2947", color: 'white' }} onClick={() => OnRemove(record.key)} >Xóa</Button>
                </Space>
            ),
        },
    ];
    const data = props.data.data?.map((item: any) => {
        return {
            key: item._id,
            name: item.name,
            Product: item.Product.length
        }
    });
    console.log(data);

    return (
        <div>
            <Table columns={columns} dataSource={data} pagination={{ pageSize: 2, showQuickJumper: true }} />
        </div>
    )
}

export default CategoryManagement