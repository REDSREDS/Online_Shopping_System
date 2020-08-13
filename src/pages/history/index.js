import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as actionCreator from './store/actionCreator';
import {Redirect} from 'react-router-dom';
import axios from 'axios';
import OrderDetail from './component/OrderDetail';

class History extends Component {
  constructor(props) {
    super(props);
    this.state={
      currentOrderId: null
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleDetail = this.handleDetail.bind(this);
  }

  render() {
    const {loginStatus} = this.props;
    if(!loginStatus) {
      return(
      <Redirect to='/login'></Redirect>
      )
    } else {
      return (
        <Fragment>
          {this.props.data.map((item, index) => {
            return(
              <div>
                <h1>{index + 1}</h1>
                <div>{item.orderId} - {item.buyerName} - {item.buyerEmail} - {item.orderAmount}</div>
                <div>orderStatus : {item.orderStatus} - payStatus : {item.payStatus}</div>
                {this.handleDetail(item.orderId, this.state.currentOrderId)}
                <button onClick={() => this.handleButtonClick(item.orderId)}>show details</button>
              </div>
            )
          })}
        </Fragment>
      )
      }
  }

  handleDetail(orderId, currentOrderId) {
    if(orderId === currentOrderId) {
      return (
        <OrderDetail 
          orderId = {orderId}
          buyerEmail = {this.props.buyerEmail}
        />
      )
    }
  }

  handleButtonClick(orderId) {
    this.setState({
      currentOrderId: orderId
    })
  }

  componentDidMount() {
    axios.get('/api/buyer/order/list', {
      params: {
        email: this.props.buyerEmail
      }
    }).then((res) => {
      const result = res.data;
      this.props.getOrderHistory(result);
    })
  }
}

const mapState = (state) => ({
  buyerEmail: state.login.buyerEmail,
  orderDetail: state.history.orderDetail,
  data: state.history.data,
  loginStatus: state.login.logStatus
})

const mapDispatch = (dispatch) => ({
  getOrderHistory(result) {
    const action = actionCreator.getOrderHistory(result);
    dispatch(action);
  }
})

export default connect(mapState, mapDispatch)(History);