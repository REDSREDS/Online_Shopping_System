import React, {Component,Fragment} from 'react';
import FoodItem from './component/FoodItem.js';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import * as actionCreator from './store/actionCreator';

class Home extends Component {
  render() {
    return (
      <Fragment>
        <h1> My cart </h1>
        {this.props.cart.map((item) => {
          return (
            <div>
              {item.productName} -{item.productPrice} - {item.productQuantity}
            </div>
          )
        })}
        <div>Total: {this.props.getTotalPrice(this.props.cart)}</div>
        
        <div>{this.props.showCheckOut(this.props.cart)}</div>
        
        <h1> In stock products </h1>
        {this.props.list.map((category, categoryIndex) => {
          return (
            <div>
              <h1>{category.name}</h1>
              <div>
                  {category.food.map((item, itemIndex) => {
                    return (
                      <FoodItem
                        key={item.id}
                        name={item.name}
                        price={item.price}
                        quantity={item.quantity}
                        categoryIndex={categoryIndex}
                        itemIndex={itemIndex}
                      />
                    )})}
              </div>
            </div>
          )}
        )}
      </Fragment>
    )
  }

  componentDidMount(){
    axios.get('/api/buyer/product/list').then((res) => {
      const result = res.data;
      console.log(result);
      this.props.getProductList(result);
    })
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.home.list,
    cart: state.home.inCart
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getTotalPrice(items) {
      var sum = 0
      for(var i = 0; i < items.length; i ++) {
        sum += items[i].productPrice * items[i].productQuantity;
      }
      return sum;
    },

    showCheckOut(items) {
      if(items.length !== 0) {
        return (
          <button><Link to='/cart'>checkout</Link></button>
        )
      }
    },
    getProductList(result) {
      const code = result.code;
      const msg = result.msg;
      const list = result.data;
      const action = actionCreator.initiateProductList(code, msg, list);
      dispatch(action);
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);