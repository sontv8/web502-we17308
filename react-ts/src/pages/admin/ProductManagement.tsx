import React from 'react'
import { Space, Table, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
    tags: string[];
}

const ProductManagementPage = (props) => {
    const removeProduct = (id: number) => {
        props.onRemove(id)
    }
    const columns: ColumnsType<DataType> = [
        {
            title: 'Product Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Product Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Action',
            key: 'action',
            render: (record) => (

                <Space size="middle">
                    <Button type="primary" style={{ backgroundColor: 'red' }} onClick={() => removeProduct(record.id)}>Remove</Button>
                </Space>
            ),
        },
    ];

    const data: DataType[] = props.products.map(item => {
        return {
            key: item.id,
            ...item
        }
    })

    return <Table columns={columns} dataSource={data} pagination={{ pageSize: 2 }} />
}

export default ProductManagementPage