import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme, Row, Col, Avatar } from 'antd';


const { Header, Sider, Content } = Layout;

const HomePage = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <UserOutlined />,
                            label: 'Admin',
                        },
                        {
                            key: '2',
                            icon: <VideoCameraOutlined />,
                            label: 'Sản phẩm',
                        },
                        {
                            key: '3',
                            icon: <UploadOutlined />,
                            label: 'Chi tiết sản phẩm',
                        },
                    ]}
                />
            </Sider>
            <Layout className="site-layout">
                <Header style={{ padding: 0, background: colorBgContainer }}>
                    <Row>
                        <Col md={18}>
                            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                                className: 'trigger',
                                onClick: () => setCollapsed(!collapsed),
                            })}
                        </Col>
                        <Col md={6}>
                            <div>
                                <Avatar size="default" icon={<UserOutlined />}></Avatar>Nguyen Thi Huyen
                            </div>
                        </Col>
                    </Row>

                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 480,
                        background: colorBgContainer,
                    }}
                >
                    Content
                </Content>
            </Layout>
        </Layout >
    )
}

export default HomePage