import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Modal, Button } from 'antd';
import 'antd/dist/antd.css';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.totalAmount = this.totalAmount.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = { visible: false }
  }

  render() {
    return (
      <Fragment>
        <div>{this.props.buyerName}</div>
        <div>{this.props.buyerEmail}</div>
        {this.props.list.map((item) => {
          return (
            <div>{item.productName} - {item.productPrice} - {item.productQuantity}</div>
          )
        })}
        <div>total: {this.totalAmount(this.props.list)}</div>
        <Button onClick={this.handleClick}> place order</Button>
        <Modal
          title="Notice"
          visible={this.state.visible}
          onOk={this.handleOk}
          footer={[
            <Button key="InStore">
              <a href='/'>InStore</a>
            </Button>,
            <Button key="Online" type="primary" onClick={this.handleOk}>
              Online
            </Button>,
          ]}
        >
          <p>Your Order has been placed!</p>
          <p>do you wanna pay...</p>
        </Modal>
      </Fragment>
    )
  }

  handleOk = e => {
    this.setState({
      visible: false,
    });

  };

  totalAmount(list) {
    var sum = 0;
    for (var i = 0; i < list.length; i++) {
      sum += list[i].productPrice * list[i].productQuantity;
    }
    return sum;
  }

  handleClick() {
    axios.post('/api/buyer/order/create', {
      name: this.props.buyerName,
      email: this.props.buyerEmail,
      items: this.props.list
    }).then((res) => {
      const result = res.data;
      console.log(result);
    });
    this.setState({
      visible: true,
    });
  }
}

const mapState = (state) => ({
  buyerName: state.login.buyerName,
  buyerEmail: state.login.buyerEmail,
  list: state.home.inCart
})

export default connect(mapState, null)(Cart);