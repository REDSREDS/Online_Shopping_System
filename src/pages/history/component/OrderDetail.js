import React, {Component} from 'react';
import axios from 'axios';

class OrderDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      localDetail: null
    }
  }

  render() {
    const localDetail = this.state.localDetail;
    if(localDetail) {
      return(
        <div>
             {localDetail.data.orderDetailList.map((item, index) => {
             return (
              <div>
                <h1>item No. {index + 1}</h1>
                <div>{item.productName} - {item.productPrice} - {item.productQuantity}</div>
              </div>
            )
          })}
        </div>
      )
    } else {
      return(
        <div>loading...</div>
      )
    }
  }

  componentDidMount() {
    axios.get('/api/buyer/order/detail', {
      params: {
        email: this.props.buyerEmail,
        orderId: this.props.orderId
      }
    }).then((res) => {
      const result = res.data;
      this.setState({
        localDetail: result
      })
    })

  }
}

export default OrderDetail;

