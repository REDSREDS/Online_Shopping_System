import React, { Component } from 'react';
import { Menu } from 'antd';
import 'antd/dist/antd.css';
import { SearchOutlined, HomeOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import {logout} from '../../pages/login/store/actionCreator';

class Header extends Component {
    state = {
        current: 'mail',
      };
    
      handleClick = e => {
        console.log('click ', e);
        this.setState({ current: e.key });
      };
    
      render() {
        const { current } = this.state;
        return (
          <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
            <Menu.Item key="home" icon={<HomeOutlined />}>
                <Link to='/' rel="noopener noreferrer">
                    OnlineStore
                </Link>
            </Menu.Item>
            <Menu.Item key="history">
                <Link to="/history" rel="noopener noreferrer">
                    order history
                </Link>
            </Menu.Item>
            <Menu.Item key="search" icon={<SearchOutlined />}>
              <input
                placeholder='search'
                style={{height: 30}}
              />
            </Menu.Item>
            <Menu.Item key="login">
              <Link to="/login" rel="noopener noreferrer">
                Login
              </Link>
            </Menu.Item>
            {this.props.logStatus ? <Menu.Item key="logout" onClick={() => {this.props.logout()}}>
                logout
            </Menu.Item> : null}
          </Menu>
        );
      }
}

const mapState = (state) => ({
  logStatus: state.login.logStatus
})

const mapDispatch = (dispatch) => ({
  logout() {
    console.log('dispatched');
    dispatch(logout());
  }
})

export default connect(mapState, mapDispatch)(Header);