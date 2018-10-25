import * as React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';

import Index from './route/Index';

const { Header, Content, Footer } = Layout;

import 'antd/dist/antd.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Layout className="layout">
          <Header>
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1">
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item key="1">
                <Link to="/events">Events</Link>
              </Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: '0 50px' }}>
            <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
              <Index />
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            footer
          </Footer>
        </Layout>
      </div>
    );
  }
}

export default App;
